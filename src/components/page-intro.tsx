import type { Dictionary } from "@/lib/i18n";

export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="mx-auto max-w-3xl px-5 pt-16 sm:px-8 sm:pt-24">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-jam">
        {kicker}
      </p>
      <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {title}
      </h1>
      {lede ? (
        <p className="mt-5 text-lg leading-8 text-ink-soft">{lede}</p>
      ) : null}
    </header>
  );
}

export function LegalArticle({
  t,
}: {
  t: Dictionary["privacy"] | Dictionary["terms"];
}) {
  const sections = [
    ["s1Title", "s1Body"],
    ["s2Title", "s2Body"],
    ["s3Title", "s3Body"],
    ["s4Title", "s4Body"],
    ["s5Title", "s5Body"],
    ["s6Title", "s6Body"],
    ["s7Title", "s7Body"],
    ["s8Title", "s8Body"],
    ["s9Title", "s9Body"],
  ] as const;

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-ink">
        {t.title}
      </h1>
      <p className="mt-3 text-sm text-ink-soft">{t.updated}</p>
      <p className="mt-8 text-base leading-7 text-ink">{t.intro}</p>
      {sections.map(([titleKey, bodyKey]) => {
        if (!(titleKey in t)) return null;
        return (
          <section key={titleKey} className="mt-10">
            <h2 className="font-display text-xl font-semibold text-ink">
              {t[titleKey as keyof typeof t]}
            </h2>
            <p className="mt-3 text-base leading-7 text-ink-soft">
              {t[bodyKey as keyof typeof t]}
            </p>
          </section>
        );
      })}
    </article>
  );
}
