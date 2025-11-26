"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { VideoCallIcon } from "./Icons";

export default function HeroSection() {
  return (
    <section className="w-full max-w-7xl py-20 mx-auto px-4 sm:px-6">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-10 right-2 md:right-16 lg:right-2 w-100 md:w-80 lg:w-180 z-10 pointer-events-none"
        >
          <Image
            src="/hero-section-img.png"
            alt="Digital Business Illustration"
            className="w-full h-auto object-contain drop-shadow-2xl absolute top-100 right-2 md:top-0 md:right-0"
            width={500}
            height={500}
            priority
            loading="eager"
          />
        </motion.div>

        <div className="bg-[#F9F8F6] h-150 md:h-100 rounded-3xl p-8 md:p-12 lg:p-12 pt-12 text-start md:pt-16 border border-gray-100 shadow-md">
          <div className="max-w-2xl space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight"
            >
              <span className="text-[#18CD40]">Optimal</span>
              <span className="text-black"> performance</span>{" "}
              <span className="text-gray-900 font-normal">
                digital para tu negocio.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="text-[#666464] text-lg sm:text-lg lg:text-xl max-w-xl leading-relaxed"
            >
              Construimos experiencias web pensadas para escalar negocios, no
              solo para mostrarlos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
              className="pt-2 flex justify-center md:justify-start"
            >
              <button className="group inline-flex items-center gap-2 px-6 py-2 rounded-xl border-2 border-[#18CD40] font-semibold text-[#18CD40] hover:bg-[#18CD40] hover:text-white transition-all duration-300 ease-in-out shadow-sm hover:shadow-md cursor-pointer">
                <span>Agendar una llamada</span>
                <VideoCallIcon />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
