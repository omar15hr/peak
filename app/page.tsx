import Image from "next/image";
import { CheckIcon, CloseIcon, VideoCallIcon } from "./components/Icons";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <section className="w-full max-w-7xl py-10 mx-auto px-4 sm:px-6">
        <div className="bg-[#F9F8F6] rounded-[32px] p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 border border-gray-100 shadow-sm">
          <div className="w-full max-w-2xl space-y-4 sm:space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              <span className="bg-linear-to-r from-[#026b60] to-[#04a18f] bg-clip-text text-transparent">
                Optimal performance
              </span>
              <br />
              <span className="text-black font-medium">
                digital para tu negocio.
              </span>
            </h1>

            <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
              Construimos experiencias web pensadas para escalar negocios, no
              solo para mostrarlos.
            </p>

            <div className="flex justify-center md:justify-start">
              <button className="group flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#006D5B] font-semibold hover:bg-[#006D5B] hover:text-white transition-all duration-300 cursor-pointer">
                <span className="bg-linear-to-r from-black to-[#026b60] bg-clip-text text-transparent group-hover:text-white">
                  Agendar una llamada
                </span>
                <div className="relative text-[#026b60] group-hover:text-white">
                  <VideoCallIcon />
                </div>
              </button>
            </div>
          </div>

          <div className="w-full max-w-md lg:max-w-xl flex justify-center mt-8 md:mt-0">
            <div className="w-full max-w-[400px] md:max-w-none">
              <Image
                src="/hero-section-img.webp"
                alt="Digital Business Illustration"
                className="w-full h-auto object-contain drop-shadow-xl"
                width={600}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 max-w-7xl p-6 mx-auto">
        <div className="text-3xl md:text-4xl font-bold text-start mb-12 ">
          <span className="bg-linear-to-r from-black to-[#026b60] bg-clip-text text-transparent">
            Si esto te suena familiar
          </span>
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
    </main>
  );

  function DiagnosisItem({ text }: { text: string }) {
    return (
      <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
        <div className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
          <CloseIcon />
        </div>
        <p className="text-gray-600 text-sm sm:text-base pt-1">{text}</p>
      </div>
    );
  }

  function SolutionItem({ text }: { text: string }) {
    return (
      <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
        <div className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-[#00c48c]">
          <CheckIcon />
        </div>
        <p className="text-gray-600 text-sm sm:text-base pt-1">{text}</p>
      </div>
    );
  }
}
