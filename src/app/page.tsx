"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Truck,
  Shield,
  Smartphone,
  ArrowRight,
  Star,
  ChevronRight,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { fetchProducts, Product } from "@/lib/products";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-black via-abdel-soft to-abdel-card overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-10 right-0 w-80 h-80 bg-abdel-gold/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
        </div>

        <div className="container-custom px-4 md:px-8 py-10 md:py-14 relative">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-abdel-gold/10 text-abdel-gold px-4 py-2 rounded-full text-sm font-semibold">
                <Zap size={16} />
                High-tech · Livraison à Dakar
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Votre boutique{" "}
                <span className="text-abdel-gold">tech</span> pour le{" "}
                <span className="text-white">quotidien</span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed max-w-lg">
                Montres connectées, écouteurs Oraimo, chargeurs et power banks.
                Des accessoires sélectionnés, prêts à commander depuis Dakar.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/boutique" className="btn-primary">
                  Découvrir nos produits
                  <ArrowRight size={18} />
                </Link>
                <Link href="/a-propos" className="btn-outline">
                  Notre histoire
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-4 bg-abdel-gold/10 rounded-2xl" />
                <Image
                  src="/images/montre-noire-milanais.jpeg"
                  alt="Produits Abdel Store - Montres et accessoires"
                  fill
                  className="object-cover rounded-3xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="bg-abdel-card section-padding border-y border-abdel-gold/20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: Zap,
                title: "Marques reconnues",
                desc: "Oraimo et accessoires sélectionnés",
              },
              {
                icon: Shield,
                title: "Qualité Premium",
                desc: "Sélection rigoureuse",
              },
              {
                icon: Truck,
                title: "Livraison Dakar",
                desc: "Rapide et sécurisée",
              },
              {
                icon: Smartphone,
                title: "Service local",
                desc: "Conseil et suivi depuis Dakar",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl hover:bg-abdel-soft transition-colors duration-300 group"
              >
                <div className="w-14 h-14 bg-abdel-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-abdel-gold/20 transition-colors">
                  <item.icon size={24} className="text-abdel-gold" />
                </div>
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-white/55">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUITS VEDETTES */}
      <section className="bg-abdel-soft section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-abdel-gold font-semibold text-sm uppercase tracking-wider">
              Notre sélection
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Nos Produits Phares
            </h2>
            <p className="text-white/70 mt-3 max-w-2xl mx-auto">
              Des produits tech africains soigneusement sélectionnés pour votre
              santé et votre plaisir
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/boutique" className="btn-primary">
              Voir tous les produits
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* À PROPOS SECTION */}
      <section className="bg-abdel-card section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/oraimo-openbuds-noir.jpeg"
                  alt="Écouteurs Oraimo Abdel Store"
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4]"
                />
                <Image
                  src="/images/oraimo-powercube-201.jpeg"
                  alt="Chargeur Oraimo Abdel Store"
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4] mt-8"
                />
              </div>
            </div>
            <div className="space-y-6">
              <span className="text-abdel-gold font-semibold text-sm uppercase tracking-wider">
                Notre histoire
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Abdel Store, la tech au service de votre quotidien
              </h2>
              <p className="text-white/70 leading-relaxed">
                Née à Dakar, Abdel Store est une boutique sénégalaise dédiée aux
                accessoires high-tech. Nous sélectionnons montres connectées,
                audio Oraimo, chargeurs et power banks pour un usage fiable au quotidien.
              </p>
              <p className="text-white/70 leading-relaxed">
                Notre objectif : rendre la tech accessible, avec un service local
                et des produits choisis pour leur qualité et leur rapport prix.
              </p>
              <Link href="/a-propos" className="btn-outline">
                En savoir plus
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="bg-abdel-soft section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-abdel-gold font-semibold text-sm uppercase tracking-wider">
              Témoignages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Ce que disent nos clients
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Aminata D.",
                text: "Ma montre connectée Abdel Store est top. Autonomie correcte et le bracelet cadeau est un vrai plus.",
                rating: 5,
              },
              {
                name: "Fatou S.",
                text: "Les Oraimo SpaceBud sont confortables et le son est clair. Commande simple, merci Abdel Store.",
                rating: 5,
              },
              {
                name: "Ousmane N.",
                text: "Le power bank MagSafe m'a sauvé en déplacement à Dakar. Je recommande Abdel Store.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-abdel-card p-8 rounded-2xl border border-abdel-gold/20 shadow-black/40">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="fill-abdel-gold text-abdel-gold"
                    />
                  ))}
                </div>
                <p className="text-white/70 italic mb-4 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p className="font-bold text-white">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SEO LOCAL DAKAR */}
      <section className="bg-abdel-card section-padding border-t border-abdel-gold/20">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
            Accessoires tech à Dakar, Sénégal
          </h2>
          <div className="prose prose-gray mx-auto text-white/70 leading-relaxed space-y-4 text-center md:text-left">
            <p>
              <strong>Abdel Store</strong> est votre boutique d&apos;accessoires
              high-tech à <strong>Dakar</strong> (Sicap Mbao). Nous proposons des{" "}
              <strong>montres connectées</strong>, des{" "}
              <strong>écouteurs Oraimo</strong> (OpenBuds, SpaceBud), des{" "}
              <strong>chargeurs rapides</strong> et des{" "}
              <strong>power banks</strong> (dont MagSafe), avec commande simple
              et livraison à Dakar et dans le Sénégal.
            </p>
            <p>
              Que vous cherchiez une montre Black Mesh, des écouteurs sans fil
              ou un power bank pour ne plus tomber à court de batterie en
              ville, notre catalogue est pensé pour le quotidien dakaroise —
              prix en FCFA, paiement Mobile Money possible, et nouveaux
              produits à venir.
            </p>
          </div>
        </div>
      </section>

      {/* NEWSLETTER / CTA */}
      <section className="bg-black section-padding border-t border-abdel-gold/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-abdel-gold/10 via-transparent to-abdel-gold/10 pointer-events-none" />
        <div className="container-custom text-center relative">
          <p className="text-abdel-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Newsletter
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Restez connecté avec{" "}
            <span className="text-abdel-gold">Abdel Store</span>
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Inscrivez-vous pour recevoir nos offres exclusives et découvrir nos
            nouveaux produits en avant-première.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Merci pour votre inscription !");
            }}
          >
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-5 py-3.5 rounded-xl bg-abdel-card border border-abdel-gold/30 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-abdel-gold focus:border-abdel-gold"
              required
            />
            <button
              type="submit"
              className="bg-abdel-gold hover:bg-abdel-goldLight text-black px-8 py-3.5 rounded-xl font-semibold transition-colors shadow-lg shadow-abdel-gold/20"
            >
              S&apos;inscrire
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
