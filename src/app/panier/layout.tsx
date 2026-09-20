import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panier",
  description: "Votre panier Nexora Shop — finalisez votre commande à Dakar.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PanierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
