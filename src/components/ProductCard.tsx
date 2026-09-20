"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Check, Tag } from "lucide-react";
import { Product } from "@/lib/products";
import { addToCart, formatPrice } from "@/lib/cart";

export default function ProductCard({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      weight: product.weight,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link href={`/produit/${product.id}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-sand">
        <div className="relative aspect-square overflow-hidden bg-nexora-soft">
          <Image
            src={product.image}
            alt={`${product.name} — Nexora Shop Dakar`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="absolute top-3 left-3 bg-nexora-blue text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-md font-medium">
            <Tag size={12} />
            {product.badge}
          </div>
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-bark text-xs px-2.5 py-1 rounded-lg font-semibold shadow-sm border border-sand">
            {product.variants && product.variants.length > 0
              ? product.variants.map((v) => v.weight).join(" / ")
              : product.weight}
          </div>
          <button
            onClick={handleAddToCart}
            className={`absolute bottom-3 right-3 p-3 rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg ${
              added
                ? "bg-nexora-blue text-white"
                : "bg-white text-nexora-blue hover:bg-nexora-blue hover:text-white"
            }`}
          >
            {added ? <Check size={18} /> : <ShoppingCart size={18} />}
          </button>
        </div>

        <div className="p-5">
          <p className="text-xs text-nexora-blue font-semibold uppercase tracking-wider mb-1">
            {product.category}
          </p>
          <h3 className="text-lg font-bold text-bark mb-1 group-hover:text-nexora-blue transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mb-3 line-clamp-1">{product.subtitle}</p>
          <div className="flex items-center justify-between pt-3 border-t border-sand">
            <div>
              {product.variants && product.variants.length > 0 ? (
                <>
                  <span className="text-xs text-gray-400">À partir de</span>
                  <span className="text-lg font-bold text-bark block -mt-0.5">
                    {formatPrice(Math.min(...product.variants.map((v) => v.price)))}
                  </span>
                </>
              ) : (
                <span className="text-lg font-bold text-bark">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>
            <span className="text-xs text-nexora-blue bg-primary-50 px-3 py-1.5 rounded-lg font-semibold">
              Voir
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
