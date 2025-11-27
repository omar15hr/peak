"use client";

import { useForm } from "../context/FormContext";
import { CloseIcon } from "./Icons";

export default function FloatingForm() {
  const { open, setOpen } = useForm();

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity"
        />
      )}

      <div
        className={`
          fixed top-0 right-0 h-full bg-white z-50 shadow-2xl px-12
          w-[420px] max-w-full 
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
          sm:w-[500px]
        `}
      >
        <div className="flex justify-end mt-5">
          <button
            onClick={() => setOpen(false)}
            className="text-2xl cursor-pointer bg-[#F9F8F6] rounded-full p-2"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex flex-col items-center justify-between mb-6 mt-5 gap-4">
          <h2 className="text-xl font-bold">
            ¿Quieres cotizar y agendar una llamada con nosotros?
          </h2>
          <p className="text-[#666464]">
            Déjanos tus datos y te contactaremos en 24 horas.
          </p>
        </div>

        <form
          className="flex flex-col gap-5 mt-4"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Enviado");
          }}
        >
          <input
            className="w-full border border-gray-300 rounded-xl p-4 text-[15px] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20"
            type="text"
            placeholder="Nombre"
            required
          />

          <input
            className="w-full border border-gray-300 rounded-xl p-4 text-[15px] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20"
            type="email"
            placeholder="Correo electrónico"
            required
          />

          <input
            className="w-full border border-gray-300 rounded-xl p-4 text-[15px] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20"
            type="tel"
            placeholder="Teléfono"
          />

          <select
            className="w-full border border-gray-300 rounded-xl p-4 text-[15px] placeholder-gray-500 bg-white 
             focus:outline-none focus:ring-2 focus:ring-black/20 text-[#666464]
             appearance-none pr-12 relative"
            defaultValue=""
            required
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' stroke='%23666464' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 8 10 12 14 8'/%3E%3C/svg%3E\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
              backgroundSize: "24px",
            }}
          >
            <option value="" disabled>
              Elige un plan para cotizar
            </option>
            <option value="singlePageWebsite">Single Page Website</option>
            <option value="MultiPageStaticWebsite">Multi Page Static Website</option>
            <option value="EcommerceWebPersonalizada">Ecommerce Web Personalizada</option>
          </select>

          <textarea
            className="w-full border border-gray-300 rounded-xl p-4 text-[15px] h-32 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20"
            placeholder="Algo que quieras decirnos para prepararnos (opcional)"
          />

          <button
            type="submit"
            className="w-[134px] bg-[#18CD40] text-[#191715] p-2 rounded-lg font-semibold hover:bg-[#18CD40]/80 transition-all cursor-pointer"
          >
            Enviar datos
          </button>
        </form>
      </div>
    </>
  );
}
