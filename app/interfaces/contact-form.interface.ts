export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  reason?: string;
  message?: string;
}

export interface ContactAPIResponse {
  success: boolean;
  data?: {
    id: string;
    from: string;
    to: string;
    subject: string;
  };
  error?: string;
}