import Image from "next/image";
import Pricing from "./components/Pricing";
import ProjectsGrid from "./components/ProjectsGrid";
import HeroSection from "./components/HeroSection";
import { DiagnosisItem, SolutionItem } from "./components/DiagnosisItem";

export default function Home() {
  const items = [
    {
      img: "/pc-img.webp",
      title: "70%",
      desc: "de los consumidores creen que una empresa sin sitio web es menos confiable.",
    },
    {
      img: "/clock-img.webp",
      title: "0.05 segundos",
      desc: "Toma que alguien forme una impresión de tu web. Sí, menos que un parpadeo.",
    },
    {
      img: "/money-img.webp",
      title: "3X más ventas",
      desc: "cuando un sitio está optimizado para conversión.",
    },
    {
      img: "/calendar-img.webp",
      title: "1er lugar",
      desc: "en impacto digital: un sitio web profesional supera siempre a redes sociales.",
    },
    {
      img: "/screen-img.webp",
      title: "+75%",
      desc: "de los usuarios juzgan la credibilidad de un negocio por su sitio web.",
    },
    {
      img: "/phone-img.webp",
      title: "88%",
      desc: "de las personas no vuelven a un sitio después de una mala experiencia.",
    },
  ];

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <HeroSection />

      <section className="py-12 max-w-7xl p-6 mx-auto">
        <div className="text-3xl md:text-4xl font-bold text-start mb-12 ">
          <span className="text-[#18CD40]">Si esto te suena familiar</span>
          <span className="font-normal"> necesitas nuestra ayuda.</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#f9f9f7] p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              Diagnóstico
            </h3>
            <div className="space-y-4">
              <DiagnosisItem text="Tu sitio web se ve viejo, lento o no representa tu marca." />
              <DiagnosisItem text="No tienes un sitio — solo redes sociales o un PDF." />
              <DiagnosisItem text="La gente visita tu sitio, pero no te contacta ni compra." />
              <DiagnosisItem text="Tu web no se ve bien en celulares." />
              <DiagnosisItem text="Estás creciendo, pero tu web no crece contigo." />
              <DiagnosisItem text="No sabes si tu web está funcionando o no." />
            </div>
          </div>

          <div className="bg-[#f9f9f7] p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 text-[#00c48c]">Solución</h3>
            <div className="space-y-4">
              <SolutionItem text="Diseñamos una web moderna, funcional y alineada con tu identidad." />
              <SolutionItem text="Presencia digital sólida y única para tu negocio." />
              <SolutionItem text="Optimizamos la estructura y mensajes para aumentar conversiones." />
              <SolutionItem text="Diseño responsive adaptable a cada dispositivo." />
              <SolutionItem text="Sitios escalables y fáciles de actualizar." />
              <SolutionItem text="Métricas claras y seguimiento del rendimiento." />
            </div>
          </div>
        </div>
      </section>

      <Pricing />

      <section className="w-full bg-[#191715] py-20 px-4 flex items-center justify-center">
        <div className="relative w-full max-w-4xl text-center">
          <div className="flex justify-center mb-6 -mt-10 md:-mt-14">
            <Image
              src="/cta-image.webp"
              alt="Growth"
              className="w-[320px] max-w-full drop-shadow-xl"
              width={500}
              height={500}
            />
          </div>

          <div className="px-6 py-6 flex flex-col gap-2">
            <h1 className="text-5xl sm:text-4xl font-bold text-white mb-4">
              Diseño web estratégico, sólido y medible.
            </h1>

            <p className="text-white font-semibold mb-2 text-2xl sm:text-xl">
              Tu presencia digital debe escalar.
            </p>

            <p className="text-gray-300 max-w-xl mx-auto leading-relaxed text-xl sm:text-lg">
              Diseñamos sitios que evolucionan, crecen y te acompañan hasta la
              cima: el Peak de tu rendimiento online.
            </p>

            <button className="mx-auto mt-8 px-6 py-2 bg-white text-black rounded-lg shadow-md hover:shadow-lg transition font-semibold cursor-pointer hover:bg-[#18CD40] hover:text-white">
              Conversemos
            </button>
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-4 bg-white flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
          No es un gasto.{" "}
          <span className="text-[#18CD40]">Es una inversión</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-linear-to-r from-[#FFFFFF] to-[#F9F8F6] border border-gray-200 rounded-xl p-8 flex flex-col shadow-sm hover:shadow-md transition"
            >
              <Image
                src={item.img}
                alt={item.title}
                className="w-40 mx-auto mb-6"
                width={500}
                height={500}
              />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-[#666464] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ProjectsGrid />

      <section className="w-full py-20 px-4 flex flex-col items-center bg-white">
        <h2 className="text-4xl sm:text-4xl font-extrabold text-center mb-6">
          Donde las marcas encuentran su rumbo
        </h2>
        <p className="font-semibold text-gray-700 mb-6 text-center text-xl">
          Hoy, quien no se muestra, no existe.
        </p>
        <p className="text-gray-500 text-center mb-6 max-w-3xl text-xl">
          Y quien se muestra sin intención, se pierde.
        </p>
        <p className="text-gray-500 text-center mb-6 max-w-4xl text-xl">
          En Seeker, transformamos sitios web en brújulas: herramientas que
          guían, elevan y abren camino.
        </p>
        <p className="text-gray-500 text-center max-w-4xl text-xl">
          Creamos espacios digitales donde tu marca no solo aparece, sino que se
          afirma, respira y crece. Porque cuando tu web tiene dirección, tu
          negocio también.
        </p>
      </section>
    </main>
  );
}
