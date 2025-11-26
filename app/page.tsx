import Image from "next/image";
import Pricing from "./components/Pricing";
import ProjectsGrid from "./components/ProjectsGrid";
import HeroSection from "./components/HeroSection";
import DiagnosisSection from "./components/DiagnosisSection";
import InvestmentSection from "./components/InvestmentSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <DiagnosisSection />
      <Pricing />

      <section className="w-full bg-[#191715] py-20 px-4 flex items-center justify-center mt-10">
        <div className="relative w-full max-w-4xl text-center">
          <div className="flex justify-center mb-6 -mt-10 md:-mt-14">
            <Image
              src="/cta-image.png"
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

      <InvestmentSection />

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
