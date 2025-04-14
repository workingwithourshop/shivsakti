import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent, UserJSON } from "@clerk/nextjs/server";
import { connectToDatabase } from "@/lib/database/db";
import { getUserCollection } from "@/lib/database/models/User";
import { NextResponse } from "next/server";
import { IUser, UserRole } from "@/lib/database/types/User";

// --- Configuration ---
const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

if (!WEBHOOK_SECRET) {
  throw new Error(
    "Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
  );
}

// --- Helper Function ---
async function syncUser(clerkUserData: UserJSON): Promise<void> {
  await connectToDatabase(); // Ensure DB is connected
  const users = getUserCollection();

  const userData: Partial<IUser> = {
    clerkId: clerkUserData.id,
    email:
      clerkUserData.email_addresses.find(
        (e) => e.id === clerkUserData.primary_email_address_id
      )?.email_address ?? "",
    firstName: clerkUserData.first_name ?? undefined,
    lastName: clerkUserData.last_name ?? undefined,
    imageUrl: clerkUserData.image_url ?? undefined,
    updatedAt: new Date(clerkUserData.updated_at),
    role: (clerkUserData.public_metadata.role as UserRole) || UserRole.USER,
  };

  if (!userData.email) {
    console.warn(
      `User ${clerkUserData.id} missing primary email. Skipping sync.`
    );
    return;
  }

  await users.updateOne(
    { clerkId: clerkUserData.id },
    {
      $set: userData,
      $setOnInsert: { createdAt: new Date(clerkUserData.created_at) }, // Only set createdAt on insert
    },
    { upsert: true } // Create if not exists, update if exists
  );
  console.log(`Synced user: ${clerkUserData.id}`);
}

// --- Webhook Handler ---
export async function POST(req: Request) {
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occurred -- no svix headers", { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occurred", { status: 400 });
  }

  const eventType = evt.type;
  console.log(`Received webhook event: ${eventType}`);

  try {
    switch (eventType) {
      case "user.created":
      case "user.updated":
        const userData = evt.data;
        await syncUser(userData);
        break;
      case "user.deleted":
        const { id: clerkIdToDelete } = evt.data; // Clerk sends { id, deleted }
        if (clerkIdToDelete) {
          await connectToDatabase();
          const users = getUserCollection();
          const result = await users.deleteOne({ clerkId: clerkIdToDelete });
          if (result.deletedCount > 0) {
            console.log(`Deleted user: ${clerkIdToDelete}`);
          } else {
            console.warn(`User to delete not found in DB: ${clerkIdToDelete}`);
          }
        } else {
          console.warn("Received user.deleted event without an ID.");
        }
        break;
      default:
        console.log(`Unhandled webhook event type: ${eventType}`);
    }
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(`Error processing webhook ${eventType}:`, error);
    // Use NextResponse for standardized JSON error responses
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
