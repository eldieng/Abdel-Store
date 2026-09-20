import { Metadata } from "next";
import { SITE_URL, LOCAL_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Boutique — Montres, Oraimo & Power Banks à Dakar",
  description:
    "Achetez à Dakar : montres connectées, écouteurs Oraimo (OpenBuds, SpaceBud), chargeurs et power banks MagSafe. Livraison Dakar & Sénégal. Commande WhatsApp.",
  keywords: [
    ...LOCAL_KEYWORDS,
    "boutique oraimo dakar",
    "catalogue montre connectée sénégal",
    "acheter power bank dakar",
  ],
  openGraph: {
    title: "Boutique Abdel Store — Accessoires Tech à Dakar",
    description:
      "Catalogue montres, audio Oraimo, chargeurs et power banks. Livraison à Dakar et au Sénégal.",
  },
  alternates: {
    canonical: `${SITE_URL}/boutique`,
  },
};

export default function BoutiqueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
