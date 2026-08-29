import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { getDictionary } from "@/lib/i18n";
import { site } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDictionary();
  return { title: t.boardhood.title, description: t.boardhood.lede };
}

export default async function BoardhoodPage() {
  const { t } = await getDictionary();
  const features = [
    [t.boardhood.featureCommunityTitle, t.boardhood.featureCommunityBody],
    [t.boardhood.featureMatchTitle, t.boardhood.featureMatchBody],
    [t.boardhood.featureRecordsTitle, t.boardhood.featureRecordsBody],
  ];

  return (
    <>
      <PageIntro
        kicker={t.boardhood.kicker}
        title={t.boardhood.title}
        lede={t.boardhood.lede}
      />
      <div className="mx-auto flex max-w-3xl flex-wrap gap-3 px-5 pt-6 sm:px-8">
        <a
          href={site.apps.boardhood.ios}
          className="inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-ink/90"
        >
          {t.boardhood.appStore}
        </a>
        <a
          href={site.apps.boardhood.android}
          className="inline-flex rounded-full border border-ink/15 bg-paper px-5 py-2.5 text-sm font-semibold text-ink hover:border-ink/30"
        >
          {t.boardhood.playStore}
        </a>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-display text-2xl font-semibold text-ink">
          {t.boardhood.featuresTitle}
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
          {t.boardhood.supportTitle}
        </h2>
        <p className="mt-3 text-base leading-7 text-ink-soft">
          {t.boardhood.supportBody}
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
          <Link className="text-jam hover:text-jam-deep" href="/privacy">
            {t.boardhood.privacy}
          </Link>
          <Link className="text-jam hover:text-jam-deep" href="/terms">
            {t.boardhood.terms}
          </Link>
          <Link className="text-jam hover:text-jam-deep" href="/support">
            {t.boardhood.support}
          </Link>
        </div>
      </section>
    </>
  );
}
