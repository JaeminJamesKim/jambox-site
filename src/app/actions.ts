"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function setLocale(formData: FormData) {
  const next = formData.get("locale") === "ko" ? "ko" : "en";
  (await cookies()).set("locale", next, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  revalidatePath("/", "layout");
}
