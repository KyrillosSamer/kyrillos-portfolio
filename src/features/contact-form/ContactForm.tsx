"use client";

import { useContactForm } from "./model/useContactForm";
import { FormField } from "./ui/FormField";
import { PERSONAL_INFO } from "@/shared/config/constants";
import { Mail, Phone, MapPin } from "lucide-react";

export const ContactForm = () => {
  const { form, status, onSubmit } = useContactForm();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

      {/* Left – Info */}
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Work Together
            </span>
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            Whether you have a project in mind, need a GIS solution, or just want to say hi —
            my inbox is always open.
          </p>
        </div>

        {/* Contact details */}
        <div className="space-y-4">
          {[
            {
              icon: <Mail />,
              label: "Email",
              value: PERSONAL_INFO.email,
              href: `mailto:${PERSONAL_INFO.email}`,
            },
            {
              icon: <Phone />,
              label: "Phone",
              value: PERSONAL_INFO.phone,
              href: `tel:${PERSONAL_INFO.phone}`,
            },
            {
              icon: <MapPin />,
              label: "Location",
              value: PERSONAL_INFO.location,
              href: undefined,
            },
          ].map(({ icon, label, value, href }) => (
            <div
              key={label}
              className="flex items-center gap-4 p-4 bg-gray-900/60 border border-gray-800 rounded-xl"
            >
              <span className="text-xl">{icon}</span>

              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  {label}
                </p>

                {href ? (
                  <a
                    href={href}
                    className="text-sm text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm text-gray-300">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex gap-3">

          {/* GitHub */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 rounded-xl border border-gray-800 hover:border-gray-600 
                       text-gray-400 hover:text-white text-sm text-center transition-all duration-200"
          >
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 rounded-xl border border-gray-800 hover:border-gray-600 
                       text-gray-400 hover:text-white text-sm text-center transition-all duration-200"
          >
            LinkedIn
          </a>

          {/* CV */}
          <a
            href={PERSONAL_INFO.cvUrl}
            download
            className="flex-1 py-3 rounded-xl border border-purple-800 hover:border-purple-600 
                       text-purple-400 hover:text-purple-300 text-sm text-center transition-all duration-200"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Right – Form */}
      <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 sm:p-8">
        {status === "success" ? (
          <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-4">
            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-3xl">
              ✓
            </div>

            <h3 className="text-xl font-semibold text-white">
              Message Sent!
            </h3>

            <p className="text-gray-400 text-sm">
              Thanks for reaching out. I'll get back to you soon.
            </p>

            <button
              onClick={() => form.reset()}
              className="mt-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5" noValidate>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormField
                label="Name"
                placeholder="Kyrillos Samer"
                error={errors.name?.message}
                {...register("name")}
              />

              <FormField
                label="Email"
                type="email"
                placeholder="you@example.com"
                error={errors.email?.message}
                {...register("email")}
              />
            </div>

            <FormField
              label="Subject"
              placeholder="Project inquiry / Collaboration"
              error={errors.subject?.message}
              {...register("subject")}
            />

            <FormField
              label="Message"
              placeholder="Tell me about your project..."
              multiline
              rows={5}
              error={errors.message?.message}
              {...register("message")}
            />

            {status === "error" && (
              <p className="text-sm text-red-400 bg-red-950/40 border border-red-900 rounded-lg px-4 py-2">
                Something went wrong. Please try again or email me directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 
                         hover:from-purple-500 hover:to-blue-500 text-white font-medium text-sm
                         transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 
                         disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};