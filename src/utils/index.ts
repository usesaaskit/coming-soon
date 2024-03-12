import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cnMerge(...classValues: ClassValue[]) {
  return twMerge(clsx(classValues));
}

export function validateEmail(email?: string) {
  if (!email || !email.trim()) {
    return "Email is a required field!";
  }
  if (
    !email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    return "Email is a invalid!";
  }
  return null;
}
