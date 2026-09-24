import { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact — Abdel Store Parcelle Assainie U8, Dakar",
  description:
    "Contactez Abdel Store à Parcelle Assainie U8 (Case Bah), Dakar. Commandez montres, Oraimo et power banks par WhatsApp, téléphone ou email. Livraison à Dakar et au Sénégal.",
  keywords: [
    "contact abdel store dakar",
    "whatsapp abdelstore dakar",
    "commander tech parcelle assainie",
    "livraison accessoires tech dakar",
    "téléphone boutique tech dakar",
  ],
  openGraph: {
    title: "Contactez Abdel Store — Dakar, Sénégal",
    description:
      "WhatsApp, téléphone ou email. Livraison accessoires tech à Dakar et au Sénégal.",
  },
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
