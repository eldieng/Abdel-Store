import { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "À propos — Boutique Tech à Dakar",
  description:
    "Nexora Shop est une boutique d'accessoires high-tech à Dakar (Sicap Mbao) : montres connectées, écouteurs Oraimo, chargeurs et power banks pour le Sénégal.",
  keywords: [
    "nexora shop dakar",
    "boutique tech sicap mbao",
    "accessoires high-tech sénégal",
    "histoire nexora shop",
  ],
  openGraph: {
    title: "À propos de Nexora Shop — Dakar",
    description:
      "Boutique sénégalaise d'accessoires high-tech à Dakar. Montres, Oraimo, charge et power banks.",
  },
  alternates: {
    canonical: `${SITE_URL}/a-propos`,
  },
};

export default function AProposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
