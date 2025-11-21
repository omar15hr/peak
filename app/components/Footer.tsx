import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="relative w-full min-h-[800px] flex flex-col justify-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/footer-img.webp"
          alt="Landscape with mountain and trees"
          fill
          className="object-fill"
          priority
        />
        {/* Subtle gradient to ensure text readability at the very bottom */}
        <div className="absolute inset-0 from-black/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pb-8 pt-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          {/* Logo */}
          <div className="text-white text-3xl font-black tracking-tighter uppercase">
            PEAK
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8 text-white/90 text-sm font-medium">
            <Link href="#" className="hover:text-white transition-colors">
              Contacto
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Preguntas Frecuentes
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Politicas
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/70 text-[10px] md:text-xs font-medium tracking-wide">
          Copyright © 2025 PEAK STUDIO - Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}
