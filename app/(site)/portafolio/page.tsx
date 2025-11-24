import ProjectsGrid from "@/app/components/ProjectsGrid";

export default function Portafolio() {
  return (
    <section>
      <div className="w-full py-20 px-4 flex flex-col max-w-7xl mx-auto bg-white">
        <h1 className="text-7xl sm:text-9xl font-extrabold text-start mb-6">
          Proyectos
        </h1>
        <p className="text-gray-500 text-start max-w-3xl text-xl">
          En cada proyecto buscamos precisión, intención y resultados. Sitios web diseñados estratégicamente para comunicar mejor, escalar y diferenciarse en un entorno cada vez más competitivo.
        </p>
      </div>
      <ProjectsGrid />
    </section>
  );
}
