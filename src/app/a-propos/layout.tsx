import { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "À propos — Boutique Tech à Dakar",
  description:
    "Abdel Store est une boutique d'accessoires high-tech à Dakar (Parcelle Assainie U8) : montres connectées, écouteurs Oraimo, chargeurs et power banks pour le Sénégal.",
  keywords: [
    "abdel store dakar",
    "boutique tech parcelle assainie",
    "accessoires high-tech sénégal",
    "histoire abdel store",
  ],
  openGraph: {
    title: "À propos de Abdel Store — Dakar",
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
