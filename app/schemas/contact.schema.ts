import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "El nombre es requerido")
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre debe tener menos de 50 caracteres")
    .regex(/^[a-zA-Z\s\u00C0-\u017F'-]+$/, "El nombre contiene caracteres inválidos")
    .transform((val) => val.trim()),

  email: z
    .string()
    .min(1, "El email es requerido")
    .email("Por favor, ingresa un email válido")
    .max(30, "El email debe tener menos de 30 caracteres")
    .toLowerCase()
    .transform((val) => val.trim()),

  phone: z
    .string()
    .min(1, "El número de teléfono es requerido")
    .min(10, "El número de teléfono debe tener al menos 10 dígitos")
    .max(20, "El número de teléfono debe tener menos de 20 caracteres")
    .regex(/^[\d\s\-\+\(\)\.]+$/, "El número de teléfono contiene caracteres inválidos")
    .transform((val) => val.replace(/\s+/g, "")),
  reason: z
    .string()
    .min(1, "Por favor, selecciona un motivo")
    .refine(
      (val) => [
        "SinglePageWebsite",
        "Multi-PageStaticWebsite",
        "Ecommercer/WebPersonalizada",
      ].includes(val),
      "Por favor, selecciona un motivo válido"
    ),

  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters")
    .transform((val) => val.trim()),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const serverContactSchema = contactFormSchema.extend({
  userAgent: z.string().optional(),
  timestamp: z.number().optional(),
});

export type ServerContactData = z.infer<typeof serverContactSchema>;

export function sanitizeForEmail(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/\//g, "&#x2F;");
}

export function validateAndSanitizeContactForm(data: unknown) {
  try {
    const validatedData = contactFormSchema.parse(data);
    
    return {
      ...validatedData,
      name: sanitizeForEmail(validatedData.name),
      message: sanitizeForEmail(validatedData.message),
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.issues.map((err: z.ZodIssue) => ({
        field: err.path.join("."),
        message: err.message,
      }));
      throw new Error(`Validation failed: ${JSON.stringify(errorMessages)}`);
    }
    throw error;
  }
}