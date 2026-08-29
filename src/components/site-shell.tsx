import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Dictionary, Locale } from "@/lib/i18n";

export function SiteShell({
  locale,
  t,
  children,
}: {
  locale: Locale;
  t: Dictionary;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-jam focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper"
      >
        {t.nav.skip}
      </a>
      <SiteHeader locale={locale} t={t} />
      <main id="content" className="flex-1">
        {children}
      </main>
      <SiteFooter t={t} />
    </div>
  );
}
