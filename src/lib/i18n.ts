import { cookies } from "next/headers";
import en from "../../translations/en.json";
import ko from "../../translations/ko.json";

export type Locale = "en" | "ko";
export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  ko: ko as Dictionary,
};

export async function getLocale(): Promise<Locale> {
  const value = (await cookies()).get("locale")?.value;
  return value === "ko" ? "ko" : "en";
}

export async function getDictionary(): Promise<{
  locale: Locale;
  t: Dictionary;
}> {
  const locale = await getLocale();
  return { locale, t: dictionaries[locale] };
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "ko" : "en";
}
