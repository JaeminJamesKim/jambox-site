"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";

const PLAY_ID = "com.jambox.sharelog";

export function SharelogInviteActions({
  playStoreUrl,
  appStoreUrl,
  copy,
}: {
  playStoreUrl: string;
  appStoreUrl: string;
  copy: {
    open: string;
    playStore: string;
    appStore: string;
    hint: string;
  };
}) {
  const params = useSearchParams();
  const query = params.toString();
  const appUri = query ? `sharelog://s?${query}` : "sharelog://s";
  const playUrl = useMemo(() => {
    const url = new URL(playStoreUrl);
    if (query) {
      url.searchParams.set("referrer", query);
    }
    return url.toString();
  }, [playStoreUrl, query]);

  useEffect(() => {
    const ua = navigator.userAgent || "";
    const isAndroid = /Android/i.test(ua);
    const isIOS =
      /iPhone|iPad|iPod/i.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    if (isAndroid) {
      const intent =
        "intent://s" +
        (query ? `?${query}` : "") +
        `#Intent;scheme=sharelog;package=${PLAY_ID}` +
        `;S.browser_fallback_url=${encodeURIComponent(playUrl)};end`;
      const timer = window.setTimeout(() => {
        window.location.replace(intent);
      }, 80);
      return () => window.clearTimeout(timer);
    }

    if (isIOS) {
      const openTimer = window.setTimeout(() => {
        window.location.href = appUri;
      }, 80);
      return () => window.clearTimeout(openTimer);
    }

    return undefined;
  }, [appUri, playUrl, query]);

  return (
    <>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={appUri}
          className="inline-flex justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-ink/90"
        >
          {copy.open}
        </a>
        <a
          href={playUrl}
          className="inline-flex justify-center rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-semibold text-ink hover:bg-cream"
        >
          {copy.playStore}
        </a>
        <a
          href={appStoreUrl}
          className="inline-flex justify-center rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-semibold text-ink hover:bg-cream"
        >
          {copy.appStore}
        </a>
      </div>
      <p className="mt-6 text-sm leading-6 text-ink-soft">{copy.hint}</p>
    </>
  );
}
