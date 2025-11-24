import Image from "next/image";
import { CheckIcon, VideoCallIcon } from "./components/Icons";
import { DiagnosisItem, SolutionItem } from "./components/DiagnosisItem";

export default function Home() {
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
    <main className="min-h-screen w-full overflow-x-hidden">
      <section className="w-full max-w-7xl py-20 mx-auto px-4 sm:px-6">
        <div className="relative">
          <div className="absolute top-10 right-6 md:right-16 lg:right-2 w-100 md:w-80 lg:w-180 z-10 pointer-events-none">
            <Image
              src="/hero-section-img.webp"
              alt="Digital Business Illustration"
              className="w-full h-auto object-contain drop-shadow-2xl absolute top-90 right-2 md:top-0 md:right-0"
              width={500}
              height={500}
            />
          </div>

          <div className="bg-[#F9F8F6] h-150 md:h-100 rounded-3xl p-8 md:p-12 lg:p-12 pt-12 text-start md:pt-16 border border-gray-100 shadow-md">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-[#18CD40]">Optimal</span>
                <span className="text-black"> performance</span>{" "}
                <span className="text-gray-900 font-normal">
                  digital para tu negocio.
                </span>
              </h1>

              <p className="text-[#666464] text-lg sm:text-lg lg:text-xl max-w-xl leading-relaxed">
                Construimos experiencias web pensadas para escalar negocios, no
                solo para mostrarlos.
              </p>

              <div className="pt-2 flex justify-center md:justify-start">
                <button className="group inline-flex items-center gap-2 px-6 py-2 rounded-xl border-2 border-[#18CD40] font-semibold text-[#18CD40] hover:bg-[#18CD40] hover:text-white transition-all duration-300 ease-in-out shadow-sm hover:shadow-md cursor-pointer">
                  <span>Agendar una llamada</span>
                  <VideoCallIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 max-w-7xl p-6 mx-auto">
        <div className="text-3xl md:text-4xl font-bold text-start mb-12 ">
          <span className="text-[#18CD40]">Si esto te suena familiar</span>
          <span className="font-normal"> necesitas nuestra ayuda.</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Diagnosis Column */}
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

          {/* Solution Column */}
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

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="relative max-w-2xl mx-auto text-center">
            <h3 className="text-[#191715] text-3xl font-bold sm:text-4xl">
              Nos adaptamos a lo que necesitas
            </h3>
            <div className="mt-3 max-w-xl text-[#71717A]">
              <p>
                Revisa los planes que tenemos para ti.
              </p>
            </div>
          </div>
          <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
            {plans.map((item, idx) => (
              <div
                key={idx}
                className={`relative shadow-md flex-1 flex items-stretch flex-col rounded-xl mt-6 sm:mt-0 ${
                  item.isMostPop ? "mt-10 bg-[#191715] text-white" : "bg-[#F9F8F6]"
                }`}
              >
                {item.isMostPop ? (
                  <span className="w-full absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-md shadow-md bg-linear-to-br from-[#18CD40] to-[#191715] text-center text-white text-sm font-semibold">
                    Recomendado
                  </span>
                ) : (
                  ""
                )}
                <div className="p-8 space-y-4">
                  {item.isMostPop ? (
                    <span className="text-white font-bold text-xl">
                      {item.name}
                    </span>
                  ) : (
                    <span className="text-black font-bold text-xl">
                      {item.name}
                    </span>
                  )}
                  <p>{item.desc}</p>
                  <button className="px-3 text-[#191715] py-4 rounded-lg w-full font-semibold text-sm duration-150 bg-[#18CD40] hover:bg-[#18CD40]/80 active:bg-[#18CD40]/80 cursor-pointer">
                    Empecemos con tu proyecto
                  </button>
                </div>
                <ul className="p-8 space-y-3">
                  {item.features.map((featureItem, idx) => (
                    <li key={idx} className="flex items-center gap-5">
                      <div className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-[#00c48c]">
                        <CheckIcon />
                      </div>
                      {featureItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
