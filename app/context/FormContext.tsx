"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type FormContextType = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const FormContext = createContext<FormContextType | null>(null);

export function FormProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <FormContext.Provider value={{ open, setOpen }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("useForm must be used inside <FormProvider>");
  return ctx;
}
