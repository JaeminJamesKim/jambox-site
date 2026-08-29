import Link from "next/link";
import { getDictionary } from "@/lib/i18n";

export default async function NotFound() {
  const { t } = await getDictionary();

  return (
    <div className="mx-auto max-w-3xl px-5 py-28 sm:px-8">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-ink">
        {t.notFound.title}
      </h1>
      <p className="mt-4 text-lg text-ink-soft">{t.notFound.body}</p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-jam px-5 py-2.5 text-sm font-semibold text-paper hover:bg-jam-deep"
      >
        {t.notFound.cta}
      </Link>
    </div>
  );
}
