import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
import QueryProvider from "@/lib/tanstack/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivsakti",
  description: "Shivsakti provides best Manforce for your Industry. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <QueryProvider>
        <html lang='en'>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <header
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
              }}
            >
              <div>My App</div>
              <div>
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </header>
            <main>{children}</main>
          </body>
        </html>
      </QueryProvider>
    </ClerkProvider>
  );
}
