import type { Metadata } from "next";
import { LegalArticle } from "@/components/page-intro";
import { getDictionary } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDictionary();
  return { title: t.privacy.title, description: t.privacy.intro };
}

export default async function PrivacyPage() {
  const { t } = await getDictionary();
  return <LegalArticle t={t.privacy} />;
}
