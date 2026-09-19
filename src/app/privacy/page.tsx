import type { Metadata } from "next";
import Link from "next/link";
import { LegalArticle } from "@/components/page-intro";
import { getDictionary } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDictionary();
  return { title: t.privacy.title, description: t.privacy.intro };
}

export default async function PrivacyPage() {
  const { t } = await getDictionary();
  return (
    <>
      <LegalArticle t={t.privacy} />
      <p className="mx-auto max-w-3xl px-5 pb-16 text-sm font-semibold sm:px-8">
        <Link className="text-jam hover:text-jam-deep" href="/apps/sharelog/privacy">
          {t.sharelog.privacy} →
        </Link>
      </p>
    </>
  );
}
