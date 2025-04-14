"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md"
          : "bg-white dark:bg-gray-900"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-orange-600 dark:text-orange-400 transition-colors duration-200"
            onClick={closeMenu}
          >
            SHIVSHAKTI
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/" onClick={closeMenu}>Home</NavLink>
            <NavLink href="/about" onClick={closeMenu}>About</NavLink>
            <NavLink href="/services" onClick={closeMenu}>Services</NavLink>
            <NavLink href="/contact" onClick={closeMenu}>Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            {/* Hamburger/Close Button */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-xl">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink href="/" onClick={closeMenu} mobile>Home</NavLink>
            <NavLink href="/about" onClick={closeMenu} mobile>About</NavLink>
            <NavLink href="/services" onClick={closeMenu} mobile>Services</NavLink>
            <NavLink href="/contact" onClick={closeMenu} mobile>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

// NavLink component for consistent styling
function NavLink({ href, children, onClick, mobile = false }: { 
  href: string, 
  children: React.ReactNode, 
  onClick?: () => void,
  mobile?: boolean 
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "font-medium transition-colors duration-200",
        mobile 
          ? "block py-2 text-lg text-gray-900 dark:text-gray-100 hover:text-orange-600 dark:hover:text-orange-400" 
          : "text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
      )}
    >
      {children}
    </Link>
  );
} 