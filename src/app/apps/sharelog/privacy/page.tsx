import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { site } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDictionary();
  const url = `${site.url}${site.apps.sharelog.privacy}`;
  return {
    title: t.sharelogPrivacy.title,
    description: t.sharelogPrivacy.intro,
    alternates: { canonical: url },
    openGraph: { title: t.sharelogPrivacy.title, description: t.sharelogPrivacy.intro, url },
    twitter: { card: "summary_large_image", title: t.sharelogPrivacy.title, description: t.sharelogPrivacy.intro },
  };
}

export default async function SharelogPrivacyPage() {
  const { t } = await getDictionary();
  const copy = t.sharelogPrivacy;

  return (
    <article className="mx-auto max-w-3xl break-keep px-5 py-16 sm:px-8">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-ink">
        {copy.title}
      </h1>
      <p className="mt-3 text-sm text-ink-soft">{copy.updated}</p>
      <p className="mt-8 text-base leading-7 text-ink">{copy.intro}</p>

      <section aria-labelledby="account-deletion" className="mt-8 rounded-2xl border border-line bg-paper p-6">
        <h2 id="account-deletion" className="font-display text-xl font-semibold text-ink">
          {copy.deletionTitle}
        </h2>
        <p className="mt-3 text-base leading-7 text-ink-soft">{copy.deletionBody}</p>
        <Link
          href={site.apps.sharelog.deletion}
          className="mt-5 inline-flex rounded-full bg-jam px-5 py-2.5 text-sm font-semibold text-paper hover:bg-jam-deep"
        >
          {t.sharelog.deleteAccount}
        </Link>
      </section>

      <nav aria-label={copy.contents} className="mt-8 border-y border-line py-5">
        <p className="text-sm font-semibold text-ink">{copy.contents}</p>
        <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
          {copy.sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="text-jam underline underline-offset-4 hover:text-jam-deep">
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {copy.sections.map((section) => (
        <section key={section.id} id={section.id} className="mt-10 scroll-mt-24">
          <h2 className="font-display text-xl font-semibold text-ink">{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-3 text-base leading-7 text-ink-soft">{paragraph}</p>
          ))}
          {section.id === "deletion" && (
            <Link className="mt-3 inline-flex text-base font-semibold text-jam underline underline-offset-4 hover:text-jam-deep" href={site.apps.sharelog.deletion}>
              {t.sharelog.deleteAccount}
            </Link>
          )}
          {section.id === "retention" && (
            <a className="mt-3 inline-flex text-base text-jam underline underline-offset-4 hover:text-jam-deep" href="https://firebase.google.com/support/privacy">
              {copy.providerPrivacy}
            </a>
          )}
        </section>
      ))}

      <p className="mt-8 text-base leading-7 text-ink-soft">
        {copy.contactLabel}: {" "}
        <a href={`mailto:${site.apps.sharelog.support}`} className="text-jam underline underline-offset-4 hover:text-jam-deep">
          {site.apps.sharelog.support}
        </a>
      </p>
    </article>
  );
}
