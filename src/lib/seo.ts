import { EMAIL, content, type Lang } from "./content";

export const SITE_URL = "https://infirmiereagadir.netlify.app";

const paths: Record<Lang, string> = { fr: "/", ar: "/ar" };

export function buildHead(lang: Lang) {
  const t = content[lang];
  const url = SITE_URL + paths[lang];
  return {
    meta: [
      { title: t.seo.title },
      { name: "description", content: t.seo.description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "MA-AGD" },
      { name: "geo.placename", content: "Agadir" },
      { name: "geo.position", content: "30.4278;-9.5981" },
      { name: "ICBM", content: "30.4278, -9.5981" },
      { property: "og:title", content: t.seo.title },
      { property: "og:description", content: t.seo.description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: lang === "fr" ? "fr_MA" : "ar_MA" },
      { property: "og:locale:alternate", content: lang === "fr" ? "ar_MA" : "fr_MA" },
      { property: "og:site_name", content: content.fr.brand + " — " + content.fr.brandRole },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: t.seo.title },
      { name: "twitter:description", content: t.seo.description },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "fr", href: SITE_URL + "/" },
      { rel: "alternate", hrefLang: "ar", href: SITE_URL + "/ar" },
      { rel: "alternate", hrefLang: "x-default", href: SITE_URL + "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["MedicalBusiness", "LocalBusiness"],
          "@id": SITE_URL + "/#business",
          name: lang === "fr" ? "Hanane Alaoui — Infirmière à domicile" : "حنان العلوي — ممرضة بالمنزل",
          description: t.seo.description,
          url,
          inLanguage: lang,
          telephone: "+212666064369",
          email: EMAIL,
          medicalSpecialty: "Nursing",
          priceRange: "Sur devis",
          paymentAccepted: "Cash",
          currenciesAccepted: "MAD",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Agadir",
            addressRegion: "Souss-Massa",
            addressCountry: "MA",
          },
          geo: { "@type": "GeoCoordinates", latitude: 30.4278, longitude: -9.5981 },
          areaServed: {
            "@type": "GeoCircle",
            geoMidpoint: { "@type": "GeoCoordinates", latitude: 30.4278, longitude: -9.5981 },
            geoRadius: 30000,
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
          },
          availableLanguage: ["fr", "ar"],
          founder: { "@type": "Person", name: "Hanane Alaoui", jobTitle: "Infirmière libérale" },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: t.services.title,
            itemListElement: t.services.items.map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "MedicalProcedure", name: s },
            })),
          },
        }),
      },
    ],
  };
}
