"use client";

import { motion } from "motion/react";
import { InfoIcon, CheckIcon } from "./Icons";

export default function Pricing() {
  const plans = [
    {
      name: "Single Page Website",
      desc: "Sitio de una sola página, rápido y directo, ideal para presentar tu marca, servicios o un producto sin necesidad de navegación compleja.",
      price: 12,
      isMostPop: false,
      features: [
        "Diseño responsive adaptado a todos los dispositivos.",
        "Formulario de contacto (opcional)",
        "Integración de enlaces a redes sociales.",
        "Optimización básica de SEO.",
        "Monitoreo y soporte básico por 1 meses.",
      ],
    },
    {
      name: "Multi-page Static Website",
      desc: "Sitio estructurado con varias secciones independientes (Inicio, Servicios, Contacto, etc.), pensado para proyectos que necesitan más contenido y mejor organización.",
      price: 35,
      isMostPop: true,
      features: [
        "Diseño responsive adaptado a todos los dispositivos.",
        "Hasta 5 secciones (ej: inicio, servicios, sobre nosotros, contacto, etc.).",
        "Formulario de contacto (opcional)",
        "Integración de enlaces a redes sociales.",
        "Optimización básica de SEO.",
        "Monitoreo y soporte básico por 1 meses.",
      ],
    },
    {
      name: "E-commerce/Web Personalizada",
      desc: "Tienda online o plataforma a medida con funcionalidades avanzadas: catálogo, carrito, pagos, panel de gestión y desarrollo personalizado según tus necesidades.",
      price: 60,
      isMostPop: false,
      features: [
        "Hasta 10 secciones (ej: inicio, catálogo, producto, carrito, checkout, contacto, etc.).",
        "Configuración de productos iniciales. Carrito de compras + checkout integrado.",
        "Integración con pasarela de pago.",
        "Gestión de stock básica.",
        "Optimización básica de SEO.",
        "Monitoreo y soporte básico por 1 meses.",
      ],
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 text-gray-600 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          viewport={{ once: true }}
          className="relative max-w-2xl mx-auto text-center"
        >
          <h3 className="text-[#191715] text-3xl font-bold sm:text-4xl">
            Nos adaptamos a lo que necesitas
          </h3>
          <div className="mt-3 max-w-xl text-[#71717A]">
            <p>Revisa los planes que tenemos para ti.</p>
          </div>
        </motion.div>

        <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: idx * 0.12,
              }}
              viewport={{ once: true }}
              className={`relative shadow-md flex-1 flex items-stretch flex-col rounded-xl mt-6 sm:mt-0 ${
                item.isMostPop
                  ? "mt-10 bg-[#191715] text-white"
                  : "bg-[#F9F8F6]"
              }`}
            >
              {item.isMostPop && (
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="w-full absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-md shadow-md bg-linear-to-br from-[#18CD40] to-[#191715] text-center text-white text-sm font-semibold"
                >
                  Más popular
                </motion.span>
              )}

              <div className="p-8 space-y-4">
                <span
                  className={`font-bold text-xl ${
                    item.isMostPop ? "text-white" : "text-black"
                  }`}
                >
                  {item.name}
                </span>

                <p>{item.desc}</p>

                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="px-3 text-[#191715] py-4 rounded-lg w-full font-semibold text-sm duration-150 bg-[#18CD40] hover:bg-[#18CD40]/80 active:bg-[#18CD40]/80 cursor-pointer"
                >
                  Empecemos con tu proyecto
                </motion.button>
              </div>

              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.08 },
                  },
                }}
                className="p-8 space-y-3"
              >
                {item.features.map((featureItem, idx) => (
                  <motion.li
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -15 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex items-center gap-5"
                  >
                    <div className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-[#00c48c]">
                      <CheckIcon />
                    </div>
                    {featureItem}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center bg-[#F5F5F5] py-4 mt-10 rounded-lg shadow-sm">
        <div className="flex gap-4">
          <div className="flex items-start justify-start gap-2">
            <InfoIcon />
          </div>
          <div className="flex flex-col justify-start">
            <span className="font-bold self-start">Importante</span>
            <span className="text-sm text-gray-500">
              El servicio no incluye dominio ni hosting. Estos deben ser
              adquiridos por el cliente, pero nosotros nos encargamos de
              configurarlos y conectarlos sin costo adicional.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
