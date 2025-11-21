"use client";

import { useState } from "react";
import Link from "next/link";
import { CloseIcon, MenuIcon } from "./Icons";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Planes" },
    { href: "/services", label: "Portafolio" },
    { href: "/contact", label: "Nosotros" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div>
            <Link href="/" className="text-xl font-bold text-foreground">
              PEAK
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-[#71717A] transition-colors hover:text-[#18CD40]"
                >
                  {link.label}
                </Link>
              ))}
              <button className="bg-[#18CD40] text-[#191715] p-2 font-bold rounded-lg px-4 text-sm cursor-pointer hover:bg-[#18CD40]/80">Conversemos</button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 pt-2">
              <button className="w-full bg-[#18CD40] text-[#191715] p-2 font-bold rounded-lg px-4 text-sm cursor-pointer hover:bg-[#18CD40]/80" onClick={() => setIsMenuOpen(false)}>
                Conversemos
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
