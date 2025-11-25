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
      a: "Al cliente aprobar la propuesta y presupuesto del plan, se debe pagar y apartir de alli cuenta el tiempo de entrega.",
    },
    {
      q: "¿El diseño es personalizado o utilizan plantillas?",
      a: "El diseño es completamente personalizado según tus requerimientos y los objetivos de la página.",
    },
  ];

  return (
    <section>
      <div className="leading-relaxed mt-12 mx-4 md:mx-8">
        <div className="text-center space-y-3">
          <h1 className="block text-gray-800 text-3xl font-semibold">
            Preguntas Frecuentes
          </h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            Encuentra aquí las respuestas a las dudas más comunes sobre nuestros
            planes, procesos y servicios. Si no encuentras lo que buscabas,
            contáctanos.
          </p>
        </div>
        <div
          className="relative bg-white rounded-md mt-10 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl sm:mx-auto"
          style={{ boxShadow: "0px 7px 20px 7px #F1F1F1" }}
        >
          <div className="grid gap-4 py-8 md:grid-cols-2">
            {faqsList.map((item, idx) => (
              <div className="space-y-3 mt-6 px-8" key={idx}>
                <h4 className="text-gray-800 text-xl font-semibold ">
                  {item.q}
                </h4>
                <p className="text-gray-500">{item.a}</p>
              </div>
            ))}
          </div>
          <span className="w-0.5 h-full bg-gray-200 m-auto absolute top-0 left-0 right-0 hidden md:block"></span>
        </div>
      </div>
    </section>
  );
}
