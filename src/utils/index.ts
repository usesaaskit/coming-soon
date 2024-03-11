import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cnMerge(...classValues: ClassValue[]) {
  return twMerge(clsx(classValues));
}
