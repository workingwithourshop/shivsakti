import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p className="mb-2">📍 Address: [Your Address]</p>
                <p className="mb-2">📞 Phone: [Your Phone Number]</p>
                <p className="mb-2">📧 Email: [Your Email]</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="hover:text-gray-300">Home</a></li>
                  <li><a href="/about" className="hover:text-gray-300">About</a></li>
                  <li><a href="/services" className="hover:text-gray-300">Services</a></li>
                  <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-gray-300">Facebook</a>
                  <a href="#" className="hover:text-gray-300">LinkedIn</a>
                  <a href="#" className="hover:text-gray-300">Twitter</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p>&copy; {new Date().getFullYear()} SHIVSHAKTI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
