import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { getDictionary } from "@/lib/i18n";
import { site } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDictionary();
  return {
    title: t.sharelog.title,
    description: t.sharelog.lede,
    itunes: { appId: "6815770283" },
  };
}

export default async function SharelogPage() {
  const { t } = await getDictionary();
  const features = [
    [t.sharelog.featureTrailTitle, t.sharelog.featureTrailBody],
    [t.sharelog.featurePrivateTitle, t.sharelog.featurePrivateBody],
    [t.sharelog.featureExportTitle, t.sharelog.featureExportBody],
  ];

  return (
    <>
      <PageIntro
        kicker={t.sharelog.kicker}
        title={t.sharelog.title}
        lede={t.sharelog.lede}
      />
      <div className="mx-auto flex max-w-3xl flex-wrap gap-3 px-5 pt-6 sm:px-8">
        <a
          href={site.apps.sharelog.android}
          className="inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-ink/90"
        >
          {t.sharelog.playStore}
        </a>
        <a
          href={site.apps.sharelog.ios}
          className="inline-flex rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-semibold text-ink hover:bg-cream"
        >
          {t.sharelog.appStore}
        </a>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-display text-2xl font-semibold text-ink">
          {t.sharelog.featuresTitle}
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {features.map(([title, body]) => (
            <article
              key={title}
              className="rounded-3xl border border-line bg-paper p-6"
            >
              <h3 className="font-display text-lg font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
        <h2 className="font-display text-2xl font-semibold text-ink">
          {t.sharelog.supportTitle}
        </h2>
        <p className="mt-3 text-base leading-7 text-ink-soft">
          {t.sharelog.supportBody}
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
          <Link className="text-jam hover:text-jam-deep" href="/apps/sharelog/privacy">
            {t.sharelog.privacy}
          </Link>
          <Link className="text-jam hover:text-jam-deep" href="/terms">
            {t.sharelog.terms}
          </Link>
          <a
            className="text-jam hover:text-jam-deep"
            href={`mailto:${site.apps.sharelog.support}`}
          >
            {site.apps.sharelog.support}
          </a>
        </div>
      </section>
    </>
  );
}
