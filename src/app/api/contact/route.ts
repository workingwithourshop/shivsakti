import { NextResponse } from "next/server";
import { getContactCollection } from "@/lib/database/models/Contact";
import { connectToDatabase } from "@/lib/database/db";
import { Resend } from "resend";
import { z } from "zod";
import { IContact } from "@/lib/database/types/Contact";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { ObjectId } from "mongodb";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactPayloadSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const validatedData = ContactPayloadSchema.parse(payload);

    await connectToDatabase();
    const contactsCollection = getContactCollection();

    const newContact: Omit<IContact, "_id" | "createdAt" | "clerkId"> = {
      ...validatedData,
      status: "unread",
    };

    const result = await contactsCollection.insertOne({
      ...newContact,
      createdAt: new Date(),
      clerkId: (await auth()).userId || "",
    });

    const fromEmail = `OurShop <${
      process.env.FROM_OUR_EMAIL || "hello@utkarshchaudhary.space"
    }>`;
    const toEmail = process.env.RECIPIENT_EMAIL || "ourshop005@gmail.com";

    if (!fromEmail || !fromEmail.includes("@")) {
      console.error("Invalid 'from' email address");
      return NextResponse.json(
        {
          message:
            "Message saved but failed to send notification: Invalid 'from' email address",
          contactId: result.insertedId,
        },
        { status: 201 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Contact: ${validatedData.subject}`,
      text: `New message from ${validatedData.name} (${validatedData.email}): ${validatedData.message}`,
      html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${validatedData.name} (${validatedData.email})</p>
      <p><strong>Subject:</strong> ${validatedData.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${validatedData.message}</p>
  `,
    });

    if (error) {
      console.error("Failed to send email:", error);
      return NextResponse.json(
        {
          message: `Message saved but failed to send notification: ${error.message}`,
          contactId: result.insertedId,
        },
        { status: 201 }
      );
    }
    console.log("Email sent successfully", data);

    revalidatePath("/admin/inbox");

    return NextResponse.json(
      {
        message: "Message sent successfully",
        contactId: result.insertedId,
      },
      { status: 201 }
    );
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Validation Error", errors: err.errors },
        { status: 400 }
      );
    }
    console.error("Contact POST Error:", err);
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");

    await connectToDatabase();
    const contactsCollection = getContactCollection();

    let query = {};
    if (status && ["unread", "read", "replied"].includes(status)) {
      query = { status };
    }

    const messages = await contactsCollection
      .find(query)
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(messages);
  } catch (err) {
    console.error("Contact GET Error:", err);
    return NextResponse.json(
      { message: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "Contact ID is required" },
        { status: 400 }
      );
    }

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid Contact ID format" },
        { status: 400 }
      );
    }

    await connectToDatabase();
    const contactsCollection = getContactCollection();

    const deleteResult = await contactsCollection.deleteOne({
      _id: new ObjectId(id),
    });

    if (deleteResult.deletedCount === 0) {
      return NextResponse.json(
        { message: "Contact not found" },
        { status: 404 }
      );
    }

    revalidatePath("/admin/inbox");
    return NextResponse.json(
      { message: "Contact deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact DELETE Error:", err);
    return NextResponse.json(
      { message: "Failed to delete contact" },
      { status: 500 }
    );
  }
}
