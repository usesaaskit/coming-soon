"use client";

import Link from "next/link";
import { createNewSubscription } from "@/lib/create-new-subscription";
import { validateEmail } from "@/utils";
import { useState } from "react";
import { Badge } from "@/components/badge";

export function JoinWaitingListForm() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [eamilValidationMessage, setEamilValidationMessage] = useState("");

  async function onFormAction(formData: FormData) {
    const email = formData.get("email")?.toString();

    const message = validateEmail(email);
    if (message) {
      setEamilValidationMessage(message);
      return;
    }

    try {
      setFormStatus("loading");
      await createNewSubscription(email!);
      setFormStatus("success");
    } catch (error) {
      setFormStatus("error");
    }
  }

  if (formStatus === "success") {
    return (
      <Badge variant="success" className="text-lg">
        Success! Now check your email to confirm your spot on the waiting list.
      </Badge>
    );
  }

  return (
    <form noValidate action={onFormAction} className="max-w-lg w-full">
      <div className="flex flex-col sm:flex-row gap-2 ">
        <input
          type="email"
          placeholder="your@email.com"
          className="flex-1 px-3 py-2 rounded-md border outline-none focus:border-primary"
          name="email"
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-primary text-slate-50 text-sm font-semibold"
        >
          {formStatus === "loading" ? "Joining..." : "Join Waiting List"}
        </button>
      </div>
      <p className="text-left mt-1 text-red-500">{eamilValidationMessage}</p>
    </form>
  );
}
