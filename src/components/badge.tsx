import { cnMerge } from "@/utils";
import { ComponentPropsWithoutRef } from "react";

const variants = {
  success: "bg-green-50 text-green-700 ring-green-600/20",
  primary: "bg-blue-50 text-blue-700 ring-blue-600/20",
};

export function Badge({
  className,
  children,
  variant = "primary",
}: ComponentPropsWithoutRef<"span"> & { variant?: keyof typeof variants }) {
  return (
    <span
      className={cnMerge(
        "inline-flex items-center gap-x-0.5 rounded-md px-2 py-1 font-medium  text-xs ring-1 ring-inset",
        "bg-blue-50   text-blue-700  ring-blue-600/20",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
