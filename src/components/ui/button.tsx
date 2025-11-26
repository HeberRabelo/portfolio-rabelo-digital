import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Button({
  variant = "primary",
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary"|"outline"|"ghost" }) {
  const base = "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors";
  const styles = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-soft",
    outline: "border border-gray-200 hover:bg-gray-50",
    ghost: "text-gray-700 hover:bg-gray-100",
  }[variant];
  return <button className={cn(base, styles, className)} {...rest} />;
}
