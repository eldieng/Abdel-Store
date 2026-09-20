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
      <section className="relative bg-gradient-to-br from-nexora-soft via-white to-primary-50 overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-10 right-0 w-80 h-80 bg-nexora-blue/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
        </div>

        <div className="container-custom px-4 md:px-8 py-20 md:py-28 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-nexora-blue/10 text-nexora-blue px-4 py-2 rounded-full text-sm font-semibold">
                <Zap size={16} />
                High-tech · Livraison à Dakar
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bark leading-tight tracking-tight">
                Votre boutique{" "}
                <span className="text-nexora-blue">tech</span> pour le{" "}
                <span className="text-bark">quotidien</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
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
                <div className="absolute inset-4 bg-nexora-blue/10 rounded-2xl" />
                <Image
                  src="/images/montre-noire-milanais.jpeg"
                  alt="Produits Nexora Shop - Montres et accessoires"
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
      <section className="bg-white section-padding border-y border-sand">
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
                className="text-center p-6 rounded-2xl hover:bg-cream transition-colors duration-300 group"
              >
                <div className="w-14 h-14 bg-nexora-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-nexora-blue/20 transition-colors">
                  <item.icon size={24} className="text-nexora-blue" />
                </div>
                <h3 className="font-bold text-bark mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUITS VEDETTES */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-nexora-blue font-semibold text-sm uppercase tracking-wider">
              Notre sélection
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Nos Produits Phares
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
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
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/oraimo-openbuds-noir.jpeg"
                  alt="Écouteurs Oraimo Nexora Shop"
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4]"
                />
                <Image
                  src="/images/oraimo-powercube-201.jpeg"
                  alt="Chargeur Oraimo Nexora Shop"
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4] mt-8"
                />
              </div>
            </div>
            <div className="space-y-6">
              <span className="text-nexora-blue font-semibold text-sm uppercase tracking-wider">
                Notre histoire
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Nexora Shop, la tech au service de votre quotidien
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Née à Dakar, Nexora Shop est une boutique sénégalaise dédiée aux
                accessoires high-tech. Nous sélectionnons montres connectées,
                audio Oraimo, chargeurs et power banks pour un usage fiable au quotidien.
              </p>
              <p className="text-gray-600 leading-relaxed">
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
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-nexora-blue font-semibold text-sm uppercase tracking-wider">
              Témoignages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Ce que disent nos clients
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Aminata D.",
                text: "Ma montre connectée Nexora Shop est top. Autonomie correcte et le bracelet cadeau est un vrai plus.",
                rating: 5,
              },
              {
                name: "Fatou S.",
                text: "Les Oraimo SpaceBud sont confortables et le son est clair. Commande simple, merci Nexora Shop.",
                rating: 5,
              },
              {
                name: "Ousmane N.",
                text: "Le power bank MagSafe m'a sauvé en déplacement à Dakar. Je recommande Nexora Shop.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SEO LOCAL DAKAR */}
      <section className="bg-white section-padding border-t border-sand">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-bark mb-4 text-center">
            Accessoires tech à Dakar, Sénégal
          </h2>
          <div className="prose prose-gray mx-auto text-gray-600 leading-relaxed space-y-4 text-center md:text-left">
            <p>
              <strong>Nexora Shop</strong> est votre boutique d&apos;accessoires
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
      <section className="bg-nexora-blue section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Restez connecté avec Nexora Shop
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Inscrivez-vous pour recevoir nos offres exclusives et découvrir nos
            nouveaux produits en avant-première.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Merci pour votre inscription !");
            }}
          >
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-5 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <button
              type="submit"
              className="bg-nexora-blue hover:bg-olive-dark text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              S&apos;inscrire
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
