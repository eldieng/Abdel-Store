import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  SITE_URL,
  SITE_NAME,
  SITE_LOCALE,
  LOCAL_SEO,
  LOCAL_KEYWORDS,
  DEFAULT_DESCRIPTION,
} from "@/lib/seo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Montres, Oraimo & Accessoires Tech à Dakar`,
    template: `%s | ${SITE_NAME} Dakar`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: LOCAL_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Accessoires Tech à Dakar, Sénégal`,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/images/logo-nexora.png",
        width: 1200,
        height: 630,
        alt: "Nexora Shop — boutique tech à Dakar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Tech à Dakar`,
    description:
      "Montres connectées, Oraimo, chargeurs et power banks. Livraison à Dakar et au Sénégal.",
    images: ["/images/logo-nexora.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "fr-SN": SITE_URL,
      fr: SITE_URL,
    },
  },
  category: "shopping",
  other: {
    "geo.region": "SN-DK",
    "geo.placename": "Dakar",
    "geo.position": `${LOCAL_SEO.geo.lat};${LOCAL_SEO.geo.lng}`,
    ICBM: `${LOCAL_SEO.geo.lat}, ${LOCAL_SEO.geo.lng}`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ElectronicsStore", "LocalBusiness"],
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo-nexora.png`,
      image: `${SITE_URL}/images/logo-nexora.png`,
      telephone: LOCAL_SEO.phone,
      email: LOCAL_SEO.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: LOCAL_SEO.neighborhood,
        addressLocality: LOCAL_SEO.city,
        addressRegion: LOCAL_SEO.region,
        addressCountry: LOCAL_SEO.countryCode,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: LOCAL_SEO.geo.lat,
        longitude: LOCAL_SEO.geo.lng,
      },
      areaServed: [
        { "@type": "City", name: "Dakar" },
        { "@type": "AdministrativeArea", name: "Dakar" },
        { "@type": "Country", name: "Sénégal" },
        { "@type": "Place", name: "Sicap Mbao" },
        { "@type": "Place", name: "Pikine" },
        { "@type": "Place", name: "Guédiawaye" },
        { "@type": "Place", name: "Rufisque" },
      ],
      priceRange: "$$",
      currenciesAccepted: "XOF",
      paymentAccepted: "Cash, Wave, Orange Money, Free Money, Virement",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "08:00",
          closes: "20:00",
        },
      ],
      availableLanguage: ["French", "Wolof"],
      knowsAbout: [
        "montres connectées",
        "écouteurs Oraimo",
        "power banks",
        "chargeurs USB-C",
        "accessoires high-tech Dakar",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Catalogue Nexora Shop Dakar",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Montres connectées",
              category: "Montres",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Écouteurs Oraimo",
              category: "Audio",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Chargeurs Oraimo",
              category: "Chargeurs",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Power banks Oraimo",
              category: "Power Banks",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "fr-SN",
      publisher: { "@id": `${SITE_URL}/#business` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/boutique?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-SN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} font-body antialiased`}>
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
