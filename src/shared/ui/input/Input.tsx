import { forwardRef } from "react";
import { cn } from "@/shared/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className, ...props }, ref) => (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={cn(
          "w-full bg-gray-900/60 border rounded-lg px-4 py-3 text-white text-sm",
          "placeholder:text-gray-600 outline-none transition-all duration-200",
          "focus:ring-2 focus:ring-purple-500/50 focus:border-purple-600",
          error
            ? "border-red-600"
            : "border-gray-800 hover:border-gray-700",
          className
        )}
        {...props}
      />
      {hint  && !error && <p className="text-xs text-gray-600">{hint}</p>}
      {error && (
        <p className="text-xs text-red-400 flex items-center gap-1">
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  )
);

Input.displayName = "Input";