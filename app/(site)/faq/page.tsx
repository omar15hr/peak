import FaqsCard from "@/app/components/FaqsCard";

export default function FAQ() {
  const faqsList = [
    {
      q: "¿El precio incluye todo lo necesario para la web?",
      a: "El servicio no incluye dominio ni hosting. Estos deben ser adquiridos por el cliente, pero nosotros nos encargamos de configurarlos y conectarlos sin costo adicional.",
    },
    {
      q: "¿Cuál es el tiempo de entrega?",
      a: "Depende del plan que elijas y del alcance del proyecto.",
    },
    {
      q: "¿Las páginas incluyen soporte y mantención?",
      a: "Sí, cada plan incluye 1 mes de soporte y mantención. Esto cubre actualizaciones, corrección de errores y ajustes simples, no cambios de diseño o estructura.",
    },
    {
      q: "¿Quién se encarga de la página en el futuro?",
      a: "Nosotros entregamos un producto final listo para usar. La administración y los futuros cambios quedan a cargo del cliente. Incluimos un manual de uso para facilitar la gestión.",
    },
    {
      q: "¿Cuando se hace el pago del plan?",
      a: "Al cliente aprobar la propuesta y presupuesto del plan, se debe pagar y apartir de allí cuenta el tiempo de entrega.",
    },
    {
      q: "¿El diseño es personalizado o utilizan plantillas?",
      a: "El diseño es completamente personalizado según tus requerimientos y los objetivos de la página.",
    },
  ];

  return (
    <section className="leading-relaxed max-w-7xl mt-12 mx-auto px-4 md:px-8">
      <div className="w-full py-20 px-4 flex flex-col max-w-7xl bg-white">
        <h1 className="text-7xl sm:text-9xl font-extrabold text-start mb-6">
          FAQs
        </h1>
        <p className="text-gray-500 text-start max-w-3xl text-xl">
          Estas son nuestras preguntas más frecuentes. Si no encuentras alguna relacionada a tu pregunta, no dudes en contáctarnos.
        </p>
      </div>

      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} idx={idx} item={item} />
        ))}
      </div>
    </section>
  );
}
