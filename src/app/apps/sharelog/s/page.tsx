import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import { site } from "@/lib/site";

const PLAY_ID = "com.jambox.sharelog";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: { absolute: "Sharelog" },
    description: "Sharelog",
    robots: { index: false, follow: false },
    itunes: { appId: "6815770283" },
    openGraph: { title: "Sharelog", description: "Sharelog" },
  };
}

export default async function SharelogInvitePage() {
  const { t } = await getDictionary();
  const play = site.apps.sharelog.android;
  const apple = site.apps.sharelog.ios;

  const redirect = `
(function () {
  var q = location.search || "";
  var ua = navigator.userAgent || "";
  var play = ${JSON.stringify(play)};
  if (q.length > 1) {
    play += "&referrer=" + encodeURIComponent(q.slice(1));
  }
  var apple = ${JSON.stringify(apple)};
  var android = /Android/i.test(ua);
  var ios = /iPhone|iPad|iPod/i.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  if (android) {
    location.replace(
      "intent://s" + q +
      "#Intent;scheme=sharelog;package=${PLAY_ID};S.browser_fallback_url=" +
      encodeURIComponent(play) + ";end"
    );
    return;
  }
  if (ios) {
    var appUri = "sharelog://s" + q;
    var left = false;
    var deadline = Date.now() + 1600;
    function markLeft() { left = true; }
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden") markLeft();
    });
    window.addEventListener("pagehide", markLeft);
    window.addEventListener("blur", function () {
      deadline = Date.now() + 2500;
    });
    location.href = appUri;
    if (document.body) {
      var opener = document.createElement("a");
      opener.href = appUri;
      document.body.appendChild(opener);
      opener.click();
    }
    function finish() {
      if (left || document.visibilityState === "hidden") return;
      if (Date.now() < deadline) {
        setTimeout(finish, 200);
        return;
      }
      location.replace(apple);
    }
    setTimeout(finish, 200);
    return;
  }
  document.documentElement.setAttribute("data-invite", "desktop");
})();
`;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: redirect }} />
      <style>{`
        .invite-stores { display: none; }
        html[data-invite="desktop"] .invite-stores { display: flex; }
      `}</style>
      <div className="invite-stores min-h-screen flex-col items-center justify-center gap-3 bg-cream px-6">
        <a
          href={play}
          className="inline-flex justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper"
        >
          {t.sharelog.playStore}
        </a>
        <a
          href={apple}
          className="inline-flex justify-center rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-semibold text-ink"
        >
          {t.sharelog.appStore}
        </a>
      </div>
    </>
  );
}
