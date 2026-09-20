"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ShoppingBag } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-nexora-black text-white">
      <div className="h-1 bg-gradient-to-r from-nexora-blue via-accent to-nexora-blue" />

      <div className="container-custom section-padding !pt-12 !pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo-nexora-light.png"
                alt="Nexora Shop"
                width={160}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-1 font-medium">
              Tech &amp; accessoires, près de chez vous
            </p>
            <p className="text-white/55 text-sm leading-relaxed mb-4">
              Boutique high-tech à Dakar : montres connectées, écouteurs Oraimo,
              chargeurs et power banks.
            </p>
            <div className="flex items-center gap-2 text-accent-light">
              <ShoppingBag size={16} />
              <span className="text-sm font-medium">Produits sélectionnés</span>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold mb-4 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-nexora-blue inline-block" />
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
                    className="text-white/55 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold mb-4 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-nexora-blue inline-block" />
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
                    className="text-white/55 hover:text-white transition-colors text-sm"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold mb-4 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-nexora-blue inline-block" />
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-nexora-blue/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-accent-light" />
                </div>
                <span className="text-white/55 text-sm">
                  Sicap Mbao, Dakar, Sénégal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-nexora-blue/20 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-accent-light" />
                </div>
                <div className="text-white/55 text-sm space-y-0.5">
                  <a href="tel:+221772958443" className="block hover:text-white transition-colors">
                    +221 77 295 84 43
                  </a>
                  <a href="tel:+221761617169" className="block hover:text-white transition-colors">
                    +221 76 161 71 69
                  </a>
                  <a href="tel:+221775432218" className="block hover:text-white transition-colors">
                    +221 77 543 22 18
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-nexora-blue/20 flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-accent-light" />
                </div>
                <a
                  href="mailto:contact@nexora.sn"
                  className="text-white/55 text-sm hover:text-white transition-colors"
                >
                  contact@nexora.sn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Nexora Shop. Tous droits réservés.
          </p>
          <p className="text-white/30 text-xs">
            Sicap Mbao, Dakar · Livraison au Sénégal
          </p>
        </div>
      </div>
    </footer>
  );
}
