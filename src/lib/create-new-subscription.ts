"use server";

import { CONVERTKIT_API_KEY, CONVERTKIT_FORM_ID } from "@/config/server";

export async function createNewSubscription(email: string) {
  const body = JSON.stringify({
    api_key: CONVERTKIT_API_KEY,
    email: email,
  });

  const headers = new Headers({
    "Content-Type": "application/json; charset=utf-8",
  });

  const res = await fetch(
    `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
    {
      method: "POST",
      cache: "no-cache",
      headers,
      body,
    }
  );

  const json = await res.json();

  if (!res.ok) throw json;

  return json;
}
