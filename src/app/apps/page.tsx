import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { getDictionary } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDictionary();
  return { title: t.appsPage.title, description: t.appsPage.body };
}

export default async function AppsPage() {
  const { t } = await getDictionary();

  return (
    <>
      <PageIntro
        kicker={t.appsPage.kicker}
        title={t.appsPage.title}
        lede={t.appsPage.body}
      />
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:px-8 md:grid-cols-2">
        <article className="flex flex-col rounded-[1.75rem] border border-line bg-paper p-7">
          <span className="w-fit rounded-full bg-forest/12 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-forest">
            {t.appsPage.live}
          </span>
          <h2 className="font-display mt-5 text-3xl font-semibold text-ink">
            Boardhood
          </h2>
          <p className="mt-3 flex-1 text-sm leading-6 text-ink-soft">
            {t.appsPage.boardhoodSummary}
          </p>
          <Link
            href="/apps/boardhood"
            className="mt-6 text-sm font-semibold text-forest hover:text-forest-deep"
          >
            {t.appsPage.boardhoodCta} →
          </Link>
        </article>

        <article className="flex flex-col rounded-[1.75rem] border border-line bg-paper p-7">
          <span className="w-fit rounded-full bg-wood/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink-soft">
            {t.appsPage.coming}
          </span>
          <h2 className="font-display mt-5 text-3xl font-semibold text-ink">
            Sharelog
          </h2>
          <p className="mt-3 flex-1 text-sm leading-6 text-ink-soft">
            {t.appsPage.sharelogSummary}
          </p>
          <Link
            href="/apps/sharelog"
            className="mt-6 text-sm font-semibold text-forest hover:text-forest-deep"
          >
            {t.appsPage.sharelogCta} →
          </Link>
        </article>

        <article className="flex flex-col rounded-[1.75rem] border border-line bg-paper p-7">
          <span className="w-fit rounded-full bg-wood/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink-soft">
            {t.coffeenchat.status}
          </span>
          <h2 className="font-display mt-5 text-3xl font-semibold text-ink">
            {t.coffeenchat.title}
          </h2>
          <p className="mt-3 flex-1 text-sm leading-6 text-ink-soft">
            {t.appsPage.coffeenchatSummary}
          </p>
          <Link
            href="/apps/coffeenchat"
            className="mt-6 text-sm font-semibold text-[#3F2E26] hover:text-ink"
          >
            {t.appsPage.coffeenchatCta} →
          </Link>
        </article>

        <article className="flex flex-col rounded-[1.75rem] border border-dashed border-line bg-cream p-7">
          <span className="w-fit rounded-full bg-wood/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink-soft">
            {t.appsPage.labNote}
          </span>
          <h2 className="font-display mt-5 text-3xl font-semibold text-ink">
            {t.appsPage.labTitle}
          </h2>
          <p className="mt-3 flex-1 text-sm leading-6 text-ink-soft">
            {t.appsPage.labSummary}
          </p>
        </article>
      </div>
    </>
  );
}
