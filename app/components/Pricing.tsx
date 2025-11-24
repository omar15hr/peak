"use client";

import { motion } from "motion/react";
import { CheckIcon } from "./Icons";

export default function Pricing() {
  const plans = [
    {
      name: "Quick Templates",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 12,
      isMostPop: false,
      features: [
        "Curabitur faucibus",
        "massa ut pretium maximus",
        "Sed posuere nisi",
        "Pellentesque eu nibh et neque",
        "Suspendisse a leo",
        "Praesent quis venenatis ipsum",
        "Duis non diam vel tortor",
      ],
    },
    {
      name: "Solución a la medida",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 35,
      isMostPop: true,
      features: [
        "Curabitur faucibus",
        "massa ut pretium maximus",
        "Sed posuere nisi",
        "Pellentesque eu nibh et neque",
        "Suspendisse a leo",
        "Praesent quis venenatis ipsum",
        "Duis non diam vel tortor",
      ],
    },
    {
      name: "Shopify Templates",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 60,
      isMostPop: false,
      features: [
        "Curabitur faucibus",
        "massa ut pretium maximus",
        "Sed posuere nisi",
        "Pellentesque eu nibh et neque",
        "Suspendisse a leo",
        "Praesent quis venenatis ipsum",
        "Duis non diam vel tortor",
      ],
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 text-gray-600 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
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
                  Recomendado
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
    </section>
  );
}
