import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...rest }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        "border-brand-200 text-brand-800 bg-brand-50",
        className
      )}
      {...rest}
    />
  );
}

