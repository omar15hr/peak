import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="relative w-full min-h-[600px] md:min-h-[800px] flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/footer-img.png"
          alt="Landscape with mountain and trees"
          fill
          className="object-cover md:object-fill"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pb-8 pt-12 md:pt-20">
        <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between gap-8 md:gap-4 mb-12 md:mb-16">
          <div className="text-white text-2xl sm:text-3xl font-black tracking-tighter uppercase mb-4 md:mb-0">
            PEAK
          </div>

          <nav className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 text-white/90 text-sm sm:text-base font-medium mb-6 md:mb-0">
            <Link href="#" className="hover:text-white transition-colors whitespace-nowrap">
              Contacto
            </Link>
            <Link href="/faq" className="hover:text-white transition-colors whitespace-nowrap">
              Preguntas Frecuentes
            </Link>
            <Link href="#" className="hover:text-white transition-colors whitespace-nowrap">
              Politicas
            </Link>
          </nav>

          <div className="flex gap-6">
            <Link
              href="#"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </div>
        </div>

        <div className="text-center text-white/70 text-xs sm:text-sm font-medium tracking-wide px-4">
          Copyright © 2025 PEAK STUDIO - Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}
