"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ShoppingBag } from "lucide-react";
import { LOCAL_SEO } from "@/lib/seo";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-abdel-gold/30">
      <div className="h-0.5 bg-gradient-to-r from-transparent via-abdel-gold to-transparent" />

      <div className="container-custom section-padding !pt-12 !pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo-abdel-store.png"
                alt="Abdel Store"
                width={80}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-abdel-gold text-sm leading-relaxed mb-1 font-semibold tracking-wide">
              Premium tech, près de chez vous
            </p>
            <p className="text-white/55 text-sm leading-relaxed mb-4">
              Abdel Store à Dakar : montres connectées, écouteurs Oraimo,
              chargeurs et power banks — sélection premium.
            </p>
            <div className="flex items-center gap-2 text-abdel-gold">
              <ShoppingBag size={16} />
              <span className="text-sm font-medium">Produits sélectionnés</span>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold mb-4 text-abdel-gold flex items-center gap-2">
              <span className="w-6 h-0.5 bg-abdel-gold inline-block" />
              Liens rapides
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Accueil" },
                { href: "/boutique", label: "Boutique" },
                { href: "/a-propos", label: "À propos" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-abdel-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold mb-4 text-abdel-gold flex items-center gap-2">
              <span className="w-6 h-0.5 bg-abdel-gold inline-block" />
              Nos produits
            </h3>
            <ul className="space-y-2.5">
              {[
                "Black Mesh",
                "Gold Mesh",
                "OpenBuds",
                "SpaceBud",
                "Power banks MagSafe",
              ].map((name) => (
                <li key={name}>
                  <Link
                    href="/boutique"
                    className="text-white/55 hover:text-abdel-gold transition-colors text-sm"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold mb-4 text-abdel-gold flex items-center gap-2">
              <span className="w-6 h-0.5 bg-abdel-gold inline-block" />
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-abdel-gold/15 border border-abdel-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-abdel-gold" />
                </div>
                <span className="text-white/55 text-sm">
                  {LOCAL_SEO.addressDisplay}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-abdel-gold/15 border border-abdel-gold/30 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-abdel-gold" />
                </div>
                <a
                  href={`tel:${LOCAL_SEO.phone}`}
                  className="text-white/55 text-sm hover:text-abdel-gold transition-colors"
                >
                  {LOCAL_SEO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-abdel-gold/15 border border-abdel-gold/30 flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-abdel-gold" />
                </div>
                <a
                  href={`mailto:${LOCAL_SEO.email}`}
                  className="text-white/55 text-sm hover:text-abdel-gold transition-colors break-all"
                >
                  {LOCAL_SEO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-abdel-gold/15">
        <div className="container-custom px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Abdel Store. Tous droits réservés.
          </p>
          <p className="text-abdel-gold/50 text-xs tracking-wide">
            Parcelle Assainie U8, Dakar · Livraison au Sénégal
          </p>
        </div>
      </div>
    </footer>
  );
}
