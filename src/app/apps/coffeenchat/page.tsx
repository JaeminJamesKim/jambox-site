import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { site } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  const url = `${site.url}/apps/coffeenchat`;

  return {
    title: t.coffeenchat.title,
    description: t.coffeenchat.lede,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title: t.coffeenchat.title,
      description: t.coffeenchat.lede,
      locale: locale === "ko" ? "ko_KR" : "en_US",
      alternateLocale: [locale === "ko" ? "en_US" : "ko_KR"],
    },
    twitter: {
      card: "summary_large_image",
      title: t.coffeenchat.title,
      description: t.coffeenchat.lede,
    },
  };
}

function CoffeeMark() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="size-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 20h23v10a9 9 0 0 1-9 9h-5a9 9 0 0 1-9-9V20Z" />
      <path d="M33 22h3a5 5 0 0 1 0 10h-3M7 42h29M17 13V7M25 13V5" />
    </svg>
  );
}

export default async function CoffeenChatPage() {
  const { t } = await getDictionary();
  const copy = t.coffeenchat;
  const steps = [
    [copy.stepDiscoverTitle, copy.stepDiscoverBody],
    [copy.stepPlanTitle, copy.stepPlanBody],
    [copy.stepMeetTitle, copy.stepMeetBody],
  ];
  const features = [
    [copy.featurePeopleTitle, copy.featurePeopleBody],
    [copy.featureMeetTitle, copy.featureMeetBody],
    [copy.featureCommunityTitle, copy.featureCommunityBody],
  ];

  return (
    <>
      <section className="break-keep border-b border-line bg-[#F7F6F3]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3F2E26]">
              {copy.kicker}
            </p>
            <h1 className="font-display mt-5 text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
              {copy.title}
            </h1>
            <p className="font-display mt-5 max-w-xl text-2xl leading-snug text-[#3F2E26] sm:text-3xl">
              {copy.headline}
            </p>
            <p className="mt-5 max-w-lg text-lg leading-8 text-ink-soft">
              {copy.lede}
            </p>
            <span className="mt-6 inline-flex rounded-full border border-[#E2E0D8] bg-white px-3 py-1 text-xs font-semibold text-[#5C5A56]">
              {copy.status}
            </span>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#features"
                className="inline-flex rounded-full bg-[#3F2E26] px-5 py-2.5 text-sm font-semibold text-white hover:bg-ink"
              >
                {copy.explore}
              </a>
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-cream"
              >
                {copy.contact}
              </Link>
            </div>
          </div>

          <section
            aria-labelledby="conversation-steps"
            className="rounded-[2rem] border border-[#E2E0D8] bg-white p-7 sm:p-8"
          >
            <div className="flex size-16 items-center justify-center rounded-2xl bg-[#ECEAE4] text-[#3F2E26]">
              <CoffeeMark />
            </div>
            <h2 id="conversation-steps" className="font-display mt-6 text-2xl font-semibold leading-snug text-ink">
              {copy.stepsTitle}
            </h2>
            <ol className="mt-6 divide-y divide-[#E2E0D8]">
              {steps.map(([title, body], index) => (
                <li key={title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                  <span className="pt-1 text-xs font-semibold text-[#5C5A56]" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink-soft">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl scroll-mt-24 break-keep px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {copy.featuresTitle}
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {features.map(([title, body]) => (
            <article key={title} className="rounded-3xl border border-line bg-paper p-6">
              <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl break-keep px-5 pb-20 sm:px-8">
        <div className="rounded-[2rem] bg-[#3F2E26] px-7 py-10 text-paper sm:px-10 sm:py-12">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            {copy.developmentTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-paper/85">
            {copy.developmentBody}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-paper/85">
            {copy.contactBody}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <Link href="/contact" className="inline-flex rounded-full bg-paper px-5 py-2.5 text-sm font-semibold text-[#3F2E26] hover:bg-cream">
              {copy.contact}
            </Link>
            <Link href="/apps" className="text-sm font-semibold text-paper underline underline-offset-4 hover:text-paper/80">
              {copy.allApps} →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
