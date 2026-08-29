import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { site } from "@/lib/site";

function HexMark() {
  return (
    <svg
      viewBox="0 0 64 72"
      className="h-14 w-12"
      fill="none"
      aria-hidden
    >
      <path
        d="M32 4.5 56 18.5v28L32 60.5 8 46.5v-28L32 4.5Z"
        fill="#2F8A5A"
      />
      <circle cx="32" cy="32" r="6" fill="#FAF7F1" />
      <path
        d="M32 26v-5M29.5 34.5 24 42M34.5 34.5 40 42"
        stroke="#FAF7F1"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default async function HomePage() {
  const { locale, t } = await getDictionary();
  const address = locale === "ko" ? site.address.ko : site.address.en;

  return (
    <>
      <section className="board-grid border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-jam">
              {t.hero.kicker}
            </p>
            <h1 className="font-display mt-5 max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-ink-soft">
              {t.hero.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/apps"
                className="inline-flex items-center rounded-full bg-jam px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-jam-deep"
              >
                {t.hero.primary}
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-ink/15 bg-paper px-5 py-2.5 text-sm font-semibold text-ink hover:border-ink/30"
              >
                {t.hero.secondary}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-line bg-paper p-6 shadow-[0_20px_60px_-32px_rgba(27,25,20,0.45)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest">
                {t.home.nowKicker}
              </p>
              <div className="mt-5 flex items-start gap-4">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-forest/10">
                  <HexMark />
                </div>
                <div>
                  <h2 className="font-display text-3xl font-semibold text-ink">
                    {t.home.nowTitle}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-ink-soft">
                    {t.home.nowBody}
                  </p>
                </div>
              </div>
              <Link
                href="/apps/boardhood"
                className="mt-6 inline-flex text-sm font-semibold text-forest hover:text-forest-deep"
              >
                {t.home.nowCta} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-jam">
          {t.home.pillarsKicker}
        </p>
        <h2 className="font-display mt-3 max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {t.home.pillarsTitle}
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            [t.home.pillarPlayTitle, t.home.pillarPlayBody],
            [t.home.pillarLearnTitle, t.home.pillarLearnBody],
            [t.home.pillarBelongTitle, t.home.pillarBelongBody],
          ].map(([title, body]) => (
            <article
              key={title}
              className="rounded-3xl border border-line bg-paper p-6"
            >
              <h3 className="font-display text-xl font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-jam">
              {t.home.studioKicker}
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {t.home.studioTitle}
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-ink-soft">
              {t.home.studioBody}
            </p>
          </div>
          <dl className="grid gap-6 sm:grid-cols-1">
            <div className="border-t border-line pt-4">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                {t.home.factName}
              </dt>
              <dd className="mt-1 text-base text-ink">{site.legalName}</dd>
            </div>
            <div className="border-t border-line pt-4">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                {t.home.factWhere}
              </dt>
              <dd className="mt-1 text-base text-ink">{address}</dd>
            </div>
            <div className="border-t border-line pt-4">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                {t.home.factContact}
              </dt>
              <dd className="mt-1 text-base">
                <a className="text-jam hover:text-jam-deep" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="rounded-[2rem] bg-ink px-8 py-12 text-paper sm:px-12">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            {t.home.ctaTitle}
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-6 text-paper/75">
            {t.home.ctaBody}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-jam px-5 py-2.5 text-sm font-semibold text-paper hover:bg-jam-deep"
          >
            {t.home.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
