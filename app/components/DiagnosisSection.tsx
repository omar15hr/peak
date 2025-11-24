"use client";

import { motion } from "motion/react";
import { DiagnosisItem, SolutionItem } from "./DiagnosisItem";

export default function DiagnosisSection() {
  return (
    <section className="py-14 pt-30 max-w-7xl p-6 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-start mb-12"
      >
        <span className="text-[#18CD40]">Si esto te suena familiar</span>
        <span className="font-normal"> necesitas nuestra ayuda.</span>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#f9f9f7] p-8 rounded-2xl border border-gray-100"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900">Diagnóstico</h3>

          <div className="space-y-4">
            {[
              "Tu sitio web se ve viejo, lento o no representa tu marca.",
              "No tienes un sitio — solo redes sociales o un PDF.",
              "La gente visita tu sitio, pero no te contacta ni compra.",
              "Tu web no se ve bien en celulares.",
              "Estás creciendo, pero tu web no crece contigo.",
              "No sabes si tu web está funcionando o no.",
            ].map((text, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: idx * 0.08,
                }}
                viewport={{ once: true }}
              >
                <DiagnosisItem text={text} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-[#f9f9f7] p-8 rounded-2xl border border-gray-100"
        >
          <h3 className="text-2xl font-bold mb-8 text-[#00c48c]">Solución</h3>

          <div className="space-y-4">
            {[
              "Diseñamos una web moderna, funcional y alineada con tu identidad.",
              "Presencia digital sólida y única para tu negocio.",
              "Optimizamos la estructura y mensajes para aumentar conversiones.",
              "Diseño responsive adaptable a cada dispositivo.",
              "Sitios escalables y fáciles de actualizar.",
              "Métricas claras y seguimiento del rendimiento.",
            ].map((text, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: idx * 0.08,
                }}
                viewport={{ once: true }}
              >
                <SolutionItem text={text} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
