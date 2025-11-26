"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function InvestmentSection() {
  const items = [
    {
      img: "/pc-img.png",
      title: "70%",
      desc: "de los consumidores creen que una empresa sin sitio web es menos confiable.",
    },
    {
      img: "/clock-img.png",
      title: "0.05 segundos",
      desc: "Toma que alguien forme una impresión de tu web. Sí, menos que un parpadeo.",
    },
    {
      img: "/money-img.png",
      title: "3X más ventas",
      desc: "cuando un sitio está optimizado para conversión.",
    },
  ];

  return (
    <section className="w-full py-20 px-4 bg-white flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-extrabold text-center mb-12"
      >
        No es un gasto. <span className="text-[#18CD40]">Es una inversión</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
              delay: i * 0.12,
            }}
            viewport={{ once: true }}
            className="bg-linear-to-r from-[#FFFFFF] to-[#F9F8F6] border border-gray-200 rounded-xl p-8 flex flex-col shadow-sm hover:shadow-md transition"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image
                src={item.img}
                alt={item.title}
                className="w-40 mx-auto mb-6"
                width={500}
                height={500}
              />
            </motion.div>

            <h3 className="text-xl font-bold mb-2">{item.title}</h3>

            <p className="text-[#666464] text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
