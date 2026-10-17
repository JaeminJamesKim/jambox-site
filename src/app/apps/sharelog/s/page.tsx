import type { Metadata } from "next";
import { Suspense } from "react";
import { PageIntro } from "@/components/page-intro";
import { getDictionary } from "@/lib/i18n";
import { site } from "@/lib/site";
import { SharelogInviteActions } from "./invite-actions";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDictionary();
  return {
    title: t.sharelogInvite.title,
    description: t.sharelogInvite.body,
    robots: { index: false, follow: false },
  };
}

export default async function SharelogInvitePage() {
  const { t } = await getDictionary();

  return (
    <>
      <PageIntro
        kicker={t.sharelog.kicker}
        title={t.sharelogInvite.title}
        lede={t.sharelogInvite.body}
      />
      <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
        <Suspense>
          <SharelogInviteActions
            playStoreUrl={site.apps.sharelog.android}
            iosAppStoreId=""
            copy={{
              open: t.sharelogInvite.open,
              store: t.sharelogInvite.store,
              hint: t.sharelogInvite.hint,
              iosSoon: t.sharelogInvite.iosSoon,
            }}
          />
        </Suspense>
      </section>
    </>
  );
}
