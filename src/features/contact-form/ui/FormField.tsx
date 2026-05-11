import React, { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

interface BaseProps {
  label: string;
  error?: string;
  multiline?: boolean;
  rows?: number;
}

type FormFieldProps = BaseProps & (InputProps | TextareaProps);

export const FormField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FormFieldProps
>(({ label, error, multiline = false, rows = 5, ...props }, ref) => {
  const base =
    "w-full bg-gray-900/60 border rounded-lg px-4 py-3 text-white text-sm " +
    "placeholder:text-gray-600 outline-none transition-all duration-200 " +
    "focus:ring-2 focus:ring-purple-500/50 focus:border-purple-600 " +
    (error ? "border-red-600" : "border-gray-800 hover:border-gray-700");

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">
        {label}
      </label>

      {multiline ? (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          rows={rows}
          className={`${base} resize-none`}
          {...(props as TextareaProps)}
        />
      ) : (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          className={base}
          {...(props as InputProps)}
        />
      )}

      {error && (
        <p className="text-xs text-red-400">
          ⚠ {error}
        </p>
      )}
    </div>
  );
});

FormField.displayName = "FormField";