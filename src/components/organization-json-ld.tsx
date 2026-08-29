import { site } from "@/lib/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: "Seoul",
      addressRegion: "Gangseo-gu",
      addressCountry: "KR",
    },
    areaServed: "Worldwide",
    description:
      "Independent app studio in Seoul making software for play, learning, and belonging.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
