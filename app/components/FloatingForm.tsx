"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm as useFloatingForm } from "../context/FormContext";
import { CloseIcon } from "./Icons";
import { ContactFormData } from "../interfaces/contact-form.interface";
import { contactFormSchema } from "../schemas/contact.schema";

export default function FloatingForm() {
  const { open, setOpen } = useFloatingForm();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submit:", data);
  };

  const fieldClass = (field: keyof ContactFormData) => {
    const hasError = !!errors[field];
    const touched = !!touchedFields[field];

    return `
      w-full rounded-xl p-4 text-[15px] placeholder-gray-500
      border transition-all
      focus:outline-none focus:ring-2
      ${
        hasError
          ? "border-red-500 focus:ring-red-300"
          : touched
          ? "border-green-500 focus:ring-green-300"
          : "border-gray-300 focus:ring-black/20"
      }
    `;
  };

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      <div
        className={`
          fixed top-0 right-0 h-full bg-white z-50 shadow-2xl px-12
          w-[420px] max-w-full transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
          sm:w-[600px]
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

        <div className="flex flex-col items-center mb-6 mt-5 gap-4">
          <h2 className="text-xl font-bold">
            ¿Quieres cotizar y agendar una llamada con nosotros?
          </h2>
          <p className="text-[#666464] self-start">
            Déjanos tus datos y te contactaremos en 24 horas.
          </p>
        </div>

        <form
          className="flex flex-col gap-5 mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input
              {...register("name")}
              placeholder="Nombre"
              className={fieldClass("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("email")}
              placeholder="Correo electrónico"
              className={fieldClass("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("phone")}
              placeholder="Teléfono"
              className={fieldClass("phone")}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <select
              {...register("reason")}
              className={`
                ${fieldClass("reason")}
                bg-white appearance-none pr-12
              `}
              defaultValue=""
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' stroke='%23666464' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 8 10 12 14 8'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
                backgroundSize: "24px",
              }}
            >
              <option value="" disabled>
                Elige un motivo / plan
              </option>
              <option value="SinglePageWebsite">Single Page Website</option>
              <option value="Multi-PageStaticWebsite">Multi-Page Static Website</option>
              <option value="Ecommercer/WebPersonalizada">Ecommercer/Web Personalizada</option>
            </select>

            {errors.reason && (
              <p className="text-red-500 text-sm mt-1">
                {errors.reason.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              {...register("message")}
              placeholder="Mensaje"
              className={`${fieldClass("message")} h-32`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className="w-[134px] bg-[#18CD40] text-[#191715] p-2 rounded-lg font-semibold 
            hover:bg-[#18CD40]/80 transition-all cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Enviar datos
          </button>
        </form>
      </div>
    </>
  );
}
