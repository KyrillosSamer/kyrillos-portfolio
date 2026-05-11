"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "./schema";

type Status = "idle" | "loading" | "success" | "error";

export const useContactForm = () => {
  const [status, setStatus] = useState<Status>("idle");

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      // Replace with your API endpoint / EmailJS / Resend / Nodemailer
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return { form, status, onSubmit: form.handleSubmit(onSubmit) };
};