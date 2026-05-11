import { ContactForm } from "@/features/contact-form/ContactForm";

export const metadata = {
  title: "Contact | Kyrillos Samer",
  description: "Get in touch with Kyrillos Samer – Front-End & GIS Developer",
};

export default function ContactPage() {
  return (
    <section className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <ContactForm />
    </section>
  );
}