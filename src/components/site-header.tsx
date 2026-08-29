import Link from "next/link";
import { LanguageToggle } from "@/components/language-toggle";
import { JamBoxWordmark } from "@/components/logo";
import type { Dictionary, Locale } from "@/lib/i18n";

const links = [
  { href: "/apps", key: "apps" },
  { href: "/about", key: "about" },
  { href: "/support", key: "support" },
  { href: "/contact", key: "contact" },
] as const;

export function SiteHeader({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link href="/" className="shrink-0 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-jam">
          <JamBoxWordmark />
          <span className="sr-only">{t.nav.home}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:bg-line/70 hover:text-ink"
            >
              {t.nav[item.key]}
            </Link>
          ))}
          <LanguageToggle locale={locale} label={t.nav.language} />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle locale={locale} label={t.nav.language} />
          <details className="relative">
            <summary className="cursor-pointer list-none rounded-full border border-line bg-paper px-3 py-1.5 text-sm font-medium text-ink">
              {t.nav.menu}
            </summary>
            <div className="absolute right-0 mt-2 w-44 rounded-2xl border border-line bg-paper p-2 shadow-lg">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-ink hover:bg-cream"
                >
                  {t.nav[item.key]}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
