"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const PLAY_ID = "com.jambox.sharelog";

export function SharelogInviteActions({
  playStoreUrl,
  iosAppStoreId,
  copy,
}: {
  playStoreUrl: string;
  iosAppStoreId: string;
  copy: {
    open: string;
    store: string;
    hint: string;
    iosSoon: string;
  };
}) {
  const params = useSearchParams();
  const [hint, setHint] = useState("");
  const [hideStore, setHideStore] = useState(false);

  const query = params.toString();
  const appUri = query ? `sharelog://s?${query}` : "sharelog://s";
  const playUrl = useMemo(() => {
    const url = new URL(playStoreUrl);
    if (query) {
      url.searchParams.set("referrer", query);
    }
    return url.toString();
  }, [playStoreUrl, query]);
  const appleUrl = iosAppStoreId
    ? `https://apps.apple.com/app/id${iosAppStoreId}`
    : "";

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
      if (!appleUrl) {
        setHideStore(true);
        setHint(copy.iosSoon);
      }
      const openTimer = window.setTimeout(() => {
        window.location.href = appUri;
      }, 80);
      const hintTimer = window.setTimeout(() => {
        if (appleUrl && document.visibilityState === "visible") {
          setHint(copy.hint);
        }
      }, 1400);
      return () => {
        window.clearTimeout(openTimer);
        window.clearTimeout(hintTimer);
      };
    }

    setHint(copy.hint);
    return undefined;
  }, [appUri, appleUrl, copy.hint, copy.iosSoon, playUrl, query]);

  const storeHref = appleUrl || playUrl;

  return (
    <>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={appUri}
          className="inline-flex justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-ink/90"
        >
          {copy.open}
        </a>
        {hideStore ? null : (
          <a
            href={storeHref}
            className="inline-flex justify-center rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-semibold text-ink hover:bg-cream"
          >
            {copy.store}
          </a>
        )}
      </div>
      {hint ? (
        <p className="mt-6 text-sm leading-6 text-ink-soft">{hint}</p>
      ) : null}
    </>
  );
}
