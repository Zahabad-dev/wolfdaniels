const SITE_URL = "https://wolfdanielsymaktub.com";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Wolf Daniel's & Maktub",
  alternateName: ["Wolf Daniel's", "Maktub"],
  url: SITE_URL,
  logo: `${SITE_URL}/brand/wolf-logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  description:
    "Fabricantes de camisas vaqueras al mayoreo en México. Venta exclusiva al mayoreo, pedido mínimo 30 piezas.",
  slogan: "Camisas vaqueras de fábrica al mayoreo",
  brand: [
    { "@type": "Brand", name: "Wolf Daniel's" },
    { "@type": "Brand", name: "Maktub" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+52-771-214-3401",
      contactType: "sales",
      areaServed: "MX",
      availableLanguage: ["Spanish"],
    },
  ],
  sameAs: [] as string[],
};

const stores = [
  {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Wolf Daniel's & Maktub - Sucursal San Martín",
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    telephone: "+52-771-214-3401",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Eje Central",
      addressLocality: "San Martín Texmelucan",
      addressRegion: "Puebla",
      addressCountry: "MX",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Wolf Daniel's & Maktub - Sucursal Texticuizeo",
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    telephone: "+52-771-214-3401",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pasillo 8, Locales 76-77, Carretera Morelia",
      addressLocality: "Texticuizeo",
      addressRegion: "Michoacán",
      addressCountry: "MX",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Wolf Daniel's & Maktub - Sucursal Chiconcuac",
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    telephone: "+52-771-214-3401",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Vicente Guerrero",
      addressLocality: "Chiconcuac",
      addressRegion: "Estado de México",
      addressCountry: "MX",
    },
  },
];

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Wolf Daniel's & Maktub",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "es-MX",
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      {stores.map((store) => (
        <script
          key={store.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(store) }}
        />
      ))}
    </>
  );
}
