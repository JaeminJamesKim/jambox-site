import type { Metadata } from "next";
import { Fraunces, Noto_Sans_KR, Plus_Jakarta_Sans } from "next/font/google";
import { OrganizationJsonLd } from "@/components/organization-json-ld";
import { SiteShell } from "@/components/site-shell";
import { getDictionary } from "@/lib/i18n";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const noto = Noto_Sans_KR({
  variable: "--font-noto",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDictionary();
  return {
    metadataBase: new URL(site.url),
    title: {
      default: t.meta.title,
      template: `%s · ${site.name}`,
    },
    description: t.meta.description,
    applicationName: site.name,
    authors: [{ name: site.legalName, url: site.url }],
    creator: site.legalName,
    publisher: site.legalName,
    keywords: [
      "JamBox",
      "Boardhood",
      "app studio",
      "Seoul",
      "board games",
      "independent developer",
    ],
    openGraph: {
      type: "website",
      locale: "en_US",
      alternateLocale: ["ko_KR"],
      url: site.url,
      siteName: site.name,
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
    },
    robots: { index: true, follow: true },
    alternates: { canonical: site.url },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { locale, t } = await getDictionary();

  return (
    <html
      lang={locale}
      className={`${fraunces.variable} ${plusJakarta.variable} ${noto.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream font-sans text-ink">
        <OrganizationJsonLd />
        <SiteShell locale={locale} t={t}>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
