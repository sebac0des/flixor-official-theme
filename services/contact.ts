import { HomepageFormSchema } from "../types";

export async function createContact(data: HomepageFormSchema) {
  const request = await fetch(
    "https://jalf-backend-production.up.railway.app/contact",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!request.ok)
    throw new Error("Algo no ha salido bien, vuelve a intentarlo");

  const response = await request.json();

  return response;
}
