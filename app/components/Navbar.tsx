"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CloseIcon, MenuIcon } from "./Icons";
import { useForm } from "../context/FormContext";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const { setOpen, open } = useForm();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/planes", label: "Planes" },
    { href: "/portafolio", label: "Portafolio" },
    { href: "/nosotros", label: "Nosotros" },
  ];

  return (
    <nav
      className={`
    sticky top-0 z-50 w-full bg-white p-2 
    transition-all duration-300
    ${scrolled ? "shadow-md" : "shadow-none"}
    ${open ? "opacity-0 pointer-events-none" : "opacity-100"}
  `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div>
            <Link href="/" className="text-xl font-bold text-foreground">
              PEAK
            </Link>
          </div>

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
              <button
                onClick={() => setOpen(true)}
                className="bg-[#18CD40] p-2 font-bold rounded-lg px-4 text-sm cursor-pointer hover:bg-[#18CD40]/80"
              >
                Conversemos
              </button>
            </div>
          </div>

          <div className="md:hidden flex gap-6">
            <button
              className="bg-[#18CD40] p-2 font-bold rounded-lg px-4 text-sm cursor-pointer hover:bg-[#18CD40]/80"
              onClick={() => setOpen(true)}
            >
              Conversemos
            </button>
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

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
          </div>
        </div>
      )}
    </nav>
  );
}
