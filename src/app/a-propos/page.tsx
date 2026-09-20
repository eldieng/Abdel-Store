"use client";

import Image from "next/image";
import { Zap, Heart, Award, Users } from "lucide-react";

export default function AProposPage() {
  return (
    <>
      {/* Banner */}
      <section className="bg-gradient-to-r from-nexora-black to-nexora-blue text-white py-16 md:py-20">
        <div className="container-custom px-4 md:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            À Propos de Nexora Shop
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Accessoires high-tech sélectionnés pour Dakar et le Sénégal
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Notre histoire
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Née au coeur du Sénégal
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Nexora Shop est née d&apos;une envie simple : rendre la tech accessible
                à Dakar. Basée à Sicap Mbao, notre boutique propose des
                accessoires sélectionnés — montres, audio Oraimo, charge et power banks.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Chaque produit que nous proposons est choisi pour son rapport
                qualité-prix et sa fiabilité au quotidien. Des montres connectées
                aux écouteurs Oraimo, nous sélectionnons les
                meilleurs produits pour votre quotidien.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Notre mission est simple : rendre accessible à tous les
                meilleurs accessoires high-tech, avec un service de proximité
                et des prix à valider avec le propriétaire.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/oraimo-spacebud.jpeg"
                alt="Audio Nexora Shop"
                width={300}
                height={400}
                className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4]"
              />
              <Image
                src="/images/montre-or-milanais.jpeg"
                alt="Montre Nexora Shop"
                width={300}
                height={400}
                className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4] mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Nos valeurs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Ce qui nous guide
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Naturel",
                desc: "Nous sélectionnons des accessoires fiables, de marques reconnues comme Oraimo, pour un usage quotidien.",
              },
              {
                icon: Award,
                title: "Qualité",
                desc: "Nous sélectionnons rigoureusement chaque ingrédient pour garantir une qualité premium à nos clients.",
              },
              {
                icon: Heart,
                title: "Passion",
                desc: "Chaque produit est préparé avec amour et dévouement, dans le respect des traditions sénégalaises.",
              },
              {
                icon: Users,
                title: "Communauté",
                desc: "Nous travaillons avec les producteurs locaux pour soutenir l'économie et les familles du Sénégal.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products showcase */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Nos produits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Des produits tech d&apos;exception
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Chaque produit Nexora Shop est soigneusement préparé dans notre
              atelier de Dakar, avec les meilleurs ingrédients du Sénégal.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { src: "/images/montre-noire-milanais.jpeg", name: "Montres connectées" },
              { src: "/images/oraimo-openbuds-noir.jpeg", name: "Oraimo OpenBuds" },
              { src: "/images/oraimo-magsafe-gris.jpeg", name: "Power banks" },
              { src: "/images/montre-or-milanais.jpeg", name: "Montre or" },
              { src: "/images/oraimo-spacebud.jpeg", name: "Oraimo SpaceBud" },
            ].map((product, i) => (
              <div key={i} className="text-center">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-3">
                  <Image
                    src={product.src}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="font-medium text-gray-800 text-sm">
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
