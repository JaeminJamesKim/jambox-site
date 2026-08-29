import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { getDictionary } from "@/lib/i18n";
import { site } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDictionary();
  return { title: t.contact.title, description: t.contact.lede };
}

export default async function ContactPage() {
  const { locale, t } = await getDictionary();
  const address = locale === "ko" ? site.address.ko : site.address.en;

  return (
    <>
      <PageIntro
        kicker={t.contact.kicker}
        title={t.contact.title}
        lede={t.contact.lede}
      />
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:px-8 md:grid-cols-2">
        <article className="rounded-[1.75rem] border border-line bg-paper p-7">
          <h2 className="font-display text-xl font-semibold text-ink">
            {t.contact.write}
          </h2>
          <a
            className="mt-4 inline-block text-lg font-medium text-jam hover:text-jam-deep"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
        </article>
        <article className="rounded-[1.75rem] border border-line bg-paper p-7">
          <h2 className="font-display text-xl font-semibold text-ink">
            {t.contact.visit}
          </h2>
          <p className="mt-4 text-base leading-7 text-ink">{address}</p>
          <p className="mt-4 text-sm leading-6 text-ink-soft">
            {t.contact.legalNote}
          </p>
        </article>
      </div>
    </>
  );
}
