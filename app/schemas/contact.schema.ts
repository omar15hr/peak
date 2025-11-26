import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s\u00C0-\u017F'-]+$/, "Name contains invalid characters")
    .transform((val) => val.trim()),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(30, "Email must be less than 254 characters")
    .toLowerCase()
    .transform((val) => val.trim()),

  phone: z
    .string()
    .min(1, "Phone number is required")
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number must be less than 20 characters")
    .regex(/^[\d\s\-\+\(\)\.]+$/, "Phone number contains invalid characters")
    .transform((val) => val.replace(/\s+/g, "")), // Remove spaces

  reason: z
    .string()
    .min(1, "Please select a reason for inquiry")
    .refine(
      (val) => ["Residential", "Commercial", "Industrial", "Other"].includes(val),
      "Please select a valid reason"
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