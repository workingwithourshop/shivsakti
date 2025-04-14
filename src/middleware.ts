import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { getDb } from "@/lib/database/db";
import { IUser } from "@/lib/database/types/User";
import { NextResponse } from "next/server";
import { sendEmail } from "./lib/utils/Mailer/Mailer";

// check user role function
const checkUserRole = async (userId: string) => {
  try {
    const db = await getDb();
    const user = await db?.collection<IUser>("users").findOne({
      where: {
        id: userId,
      },
    });
    if (!user) {
      return null;
    }
    console.log(user);
    return user.role;
  } catch (error) {
    console.error(error);
    sendEmail(
      "workingwithourshop@gmail.com",
      "Error checking user role in middleware",
      `Error checking user role in middleware: ${error}`
    );
    return null;
  }
};
const publicRoutes = createRouteMatcher(["/contact", "/", "/api/contact"]);
const adminRoutes = createRouteMatcher(["/admin", "/api/admin"]);

// check user role middleware
export default clerkMiddleware(async (auth, req) => {
  const user = await checkUserRole((await auth()).userId || "");
  if (user !== "admin" && !publicRoutes(req) && !adminRoutes(req)) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
