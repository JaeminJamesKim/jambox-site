import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { getDictionary } from "@/lib/i18n";
import { site } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDictionary();
  return { title: t.about.title, description: t.about.lede };
}

export default async function AboutPage() {
  const { locale, t } = await getDictionary();
  const address = locale === "ko" ? site.address.ko : site.address.en;

  return (
    <>
      <PageIntro
        kicker={t.about.kicker}
        title={t.about.title}
        lede={t.about.lede}
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2">
        <section>
          <h2 className="font-display text-2xl font-semibold text-ink">
            {t.about.storyTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-soft">
            {t.about.storyBody}
          </p>
        </section>
        <section className="rounded-[1.75rem] border border-line bg-paper p-7">
          <h2 className="font-display text-2xl font-semibold text-ink">
            {t.about.orgTitle}
          </h2>
          <p className="mt-3 text-sm leading-6 text-ink-soft">{t.about.orgBody}</p>
          <dl className="mt-8 space-y-5">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                {t.about.legalName}
              </dt>
              <dd className="mt-1 text-base text-ink">{site.legalName}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                {t.about.address}
              </dt>
              <dd className="mt-1 text-base text-ink">{address}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                {t.about.email}
              </dt>
              <dd className="mt-1 text-base">
                <a className="text-jam hover:text-jam-deep" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                {t.about.website}
              </dt>
              <dd className="mt-1 text-base">
                <a className="text-jam hover:text-jam-deep" href={site.url}>
                  jambox.site
                </a>
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
