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
    itunes: { appId: "6815770283" },
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
            appStoreUrl={site.apps.sharelog.ios}
            copy={{
              open: t.sharelogInvite.open,
              playStore: t.sharelog.playStore,
              appStore: t.sharelog.appStore,
              hint: t.sharelogInvite.hint,
            }}
          />
        </Suspense>
      </section>
    </>
  );
}
