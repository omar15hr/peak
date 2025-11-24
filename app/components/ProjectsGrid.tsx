import Image from "next/image";

export default function ProjectsGrid() {
  const projects = [
    {
      id: 1,
      img: "/pag-dogleader.webp",
      name: "Dogleader",
      logo: "/dogleader.webp",
    },
    {
      id: 2,
      img: "/pag-fluxor.webp",
      name: "Fluxor",
      logo: "/fluxor-logo.webp",
    },
    { id: 3, img: "/pag-fortius.webp", name: "Fortius", logo: "/fortius.webp" },
  ];

  return (
    <section className="w-full py-20 px-4 flex flex-col items-center bg-white">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-2">
        Descubre lo que somos capaces de hacer
      </h2>
      <p className="font-semibold text-gray-700 text-center">Portafolio</p>
      <p className="text-gray-500 text-center mb-12 max-w-xl">
        Algunas marcas que hemos llevado a la cima de su industria.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-full max-w-6xl">
        {projects.map((item, i) => (
          <div key={i} className="flex flex-col">
            <div className="w-full overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
              <Image
                width={500}
                height={500}
                src={item.img}
                alt="Proyecto"
                className="w-full object-cover"
              />
            </div>

            <div className="flex items-center gap-3 mt-4">
              <Image
                width={500}
                height={500}
                src={item.logo}
                alt="Marca"
                className="w-10 h-10 object-contain"
              />
              <p className="font-semibold text-gray-800">{item.name}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-14 px-6 py-2 border border-[#18CD40] text-[#18CD40] rounded-lg hover:bg-[#18CD40]/80 transition font-medium cursor-pointer hover:text-white">
        Ver todos los proyectos
      </button>
    </section>
  );
}
