import { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact — Nexora Shop Sicap Mbao, Dakar",
  description:
    "Contactez Nexora Shop à Sicap Mbao, Dakar. Commandez montres, Oraimo et power banks par WhatsApp, téléphone ou email. Livraison à Dakar et au Sénégal.",
  keywords: [
    "contact nexora shop dakar",
    "whatsapp nexora dakar",
    "commander tech sicap mbao",
    "livraison accessoires tech dakar",
    "téléphone boutique tech dakar",
  ],
  openGraph: {
    title: "Contactez Nexora Shop — Dakar, Sénégal",
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
