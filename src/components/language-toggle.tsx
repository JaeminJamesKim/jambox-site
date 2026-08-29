"use client";

import { setLocale } from "@/app/actions";
import type { Locale } from "@/lib/i18n";

export function LanguageToggle({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  return (
    <form action={setLocale}>
      <input type="hidden" name="locale" value={locale === "en" ? "ko" : "en"} />
      <button
        type="submit"
        className="rounded-full px-3 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:bg-line/70 hover:text-ink"
      >
        {label}
      </button>
    </form>
  );
}
