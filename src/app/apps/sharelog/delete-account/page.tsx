import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { getDictionary } from "@/lib/i18n";
import { site } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDictionary();
  const url = `${site.url}${site.apps.sharelog.deletion}`;
  return {
    title: t.sharelogDeletion.title,
    description: t.sharelogDeletion.lede,
    alternates: { canonical: url },
    openGraph: { title: t.sharelogDeletion.title, description: t.sharelogDeletion.lede, url },
    twitter: { card: "summary_large_image", title: t.sharelogDeletion.title, description: t.sharelogDeletion.lede },
  };
}

export default async function SharelogDeletionPage() {
  const { t } = await getDictionary();
  const copy = t.sharelogDeletion;
  const emailHref = `mailto:${site.apps.sharelog.support}?subject=${encodeURIComponent(copy.emailSubject)}&body=${encodeURIComponent(copy.emailTemplate)}`;

  return (
    <div className="break-keep">
      <PageIntro kicker={copy.kicker} title={copy.title} lede={copy.lede} />
      <div className="mx-auto max-w-3xl px-5 pb-20 pt-8 sm:px-8">
        <section aria-labelledby="email-request" className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
          <h2 id="email-request" className="font-display text-2xl font-semibold text-ink">
            {copy.emailTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-soft">{copy.emailBody}</p>
          <a href={emailHref} className="mt-6 inline-flex rounded-full bg-jam px-5 py-3 text-sm font-semibold text-paper hover:bg-jam-deep">
            {copy.emailAction}
          </a>
          <p className="mt-4 text-base leading-7 text-ink-soft">{copy.emailFallback}</p>
          <a href={`mailto:${site.apps.sharelog.support}`} className="mt-3 inline-flex text-base font-semibold text-jam underline underline-offset-4 hover:text-jam-deep">
            {site.apps.sharelog.support}
          </a>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold text-ink">{copy.verificationTitle}</h2>
          <p className="mt-3 text-base leading-7 text-ink-soft">{copy.verificationBody}</p>
        </section>
        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold text-ink">{copy.inAppTitle}</h2>
          <p className="mt-3 text-base leading-7 text-ink-soft">{copy.inAppBody}</p>
        </section>
        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold text-ink">{copy.removedTitle}</h2>
          <ul className="mt-3 list-disc space-y-3 pl-5 text-base leading-7 text-ink-soft">
            {copy.removedItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold text-ink">{copy.retainedTitle}</h2>
          <p className="mt-3 text-base leading-7 text-ink-soft">{copy.retainedBody}</p>
          <a href="https://firebase.google.com/support/privacy" className="mt-3 inline-flex text-base text-jam underline underline-offset-4 hover:text-jam-deep">
            {copy.providerLink}
          </a>
        </section>
        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold text-ink">{copy.localTitle}</h2>
          <p className="mt-3 text-base leading-7 text-ink-soft">{copy.localBody}</p>
        </section>
        <Link href={site.apps.sharelog.privacy} className="mt-10 inline-flex text-base font-semibold text-jam underline underline-offset-4 hover:text-jam-deep">
          {copy.privacyLink}
        </Link>
      </div>
    </div>
  );
}
