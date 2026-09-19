import Link from "next/link";
import { JamBoxMark } from "@/components/logo";
import type { Dictionary } from "@/lib/i18n";
import { site } from "@/lib/site";

export function SiteFooter({ t }: { t: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <JamBoxMark className="size-7" />
            <span className="font-display text-lg font-semibold text-ink">
              {site.name}
            </span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-ink-soft">
            {t.footer.tagline}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
            {t.nav.apps}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link className="text-ink hover:text-jam" href="/apps">
                {t.nav.apps}
              </Link>
            </li>
            <li>
              <Link className="text-ink hover:text-jam" href="/apps/boardhood">
                Boardhood
              </Link>
            </li>
            <li>
              <Link className="text-ink hover:text-jam" href="/apps/sharelog">
                Sharelog
              </Link>
            </li>
            <li>
              <Link className="text-ink hover:text-jam" href="/about">
                {t.nav.about}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
            {t.nav.support}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link className="text-ink hover:text-jam" href="/support">
                {t.nav.support}
              </Link>
            </li>
            <li>
              <Link className="text-ink hover:text-jam" href="/contact">
                {t.nav.contact}
              </Link>
            </li>
            <li>
              <Link className="text-ink hover:text-jam" href="/privacy">
                {t.nav.privacy}
              </Link>
            </li>
            <li>
              <Link className="text-ink hover:text-jam" href="/terms">
                {t.nav.terms}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-ink-soft sm:px-8">
          © {year} {t.footer.org}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
