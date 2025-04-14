import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SHIVSHAKTI - Reliable Manpower for Your Industrial Needs",
  description: "Specialized in supplying skilled and unskilled labor to motor and manufacturing industries across India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} dark:bg-gray-900 dark:text-white`}>
        <NavBar />
        <main className="pt-16 md:pt-20">
          {children}
        </main>
        <footer className="bg-[#1B1B1B] text-white py-8 sm:py-12 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold mb-3 sm:mb-4">Contact Us</h3>
                <p className="mb-2">📍 122 Adstress</p>
                <p className="mb-2">📞 183, Incdstrrial.brea</p>
                <p className="mb-2">📧 +01 56783 A5210</p>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
                  <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
                  <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
                  <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
                </ul>
              </div>
              <div className="text-center sm:text-left mt-6 sm:mt-0">
                <h3 className="text-lg font-semibold mb-3 sm:mb-4">Follow Us</h3>
                <div className="flex justify-center sm:justify-start space-x-4">
                  <Link href="#" className="hover:text-gray-300">Facebook</Link>
                  <Link href="#" className="hover:text-gray-300">LinkedIn</Link>
                  <Link href="#" className="hover:text-gray-300">Twitter</Link>
                </div>
              </div>
            </div>
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800 text-center">
              <p>&copy; {new Date().getFullYear()} SHIVSHAKTI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
