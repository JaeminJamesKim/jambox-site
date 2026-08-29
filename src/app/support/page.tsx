import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { getDictionary } from "@/lib/i18n";
import { site } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDictionary();
  return { title: t.support.title, description: t.support.lede };
}

export default async function SupportPage() {
  const { t } = await getDictionary();

  return (
    <>
      <PageIntro
        kicker={t.support.kicker}
        title={t.support.title}
        lede={t.support.lede}
      />
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:px-8 md:grid-cols-3">
        <article className="rounded-3xl border border-line bg-paper p-6">
          <h2 className="font-display text-xl font-semibold text-ink">
            {t.support.emailTitle}
          </h2>
          <p className="mt-3 text-sm leading-6 text-ink-soft">
            {t.support.emailBody}
          </p>
          <a
            className="mt-5 inline-flex text-sm font-semibold text-jam hover:text-jam-deep"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
        </article>
        <article className="rounded-3xl border border-line bg-paper p-6">
          <h2 className="font-display text-xl font-semibold text-ink">
            {t.support.boardhoodTitle}
          </h2>
          <p className="mt-3 text-sm leading-6 text-ink-soft">
            {t.support.boardhoodBody}
          </p>
          <Link
            className="mt-5 inline-flex text-sm font-semibold text-jam hover:text-jam-deep"
            href="/apps/boardhood"
          >
            Boardhood
          </Link>
        </article>
        <article className="rounded-3xl border border-line bg-paper p-6">
          <h2 className="font-display text-xl font-semibold text-ink">
            {t.support.responseTitle}
          </h2>
          <p className="mt-3 text-sm leading-6 text-ink-soft">
            {t.support.responseBody}
          </p>
        </article>
      </div>
    </>
  );
}
