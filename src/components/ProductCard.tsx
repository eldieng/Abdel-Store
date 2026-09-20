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
      <div className="bg-abdel-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-abdel-gold/10 hover:-translate-y-0.5 transition-all duration-300 border border-abdel-gold/20 hover:border-abdel-gold/50">
        <div className="relative aspect-square overflow-hidden bg-black">
          <Image
            src={product.image}
            alt={`${product.name} — Abdel Store Dakar`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="absolute top-3 left-3 bg-abdel-gold text-black text-xs px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-md font-semibold">
            <Tag size={12} />
            {product.badge}
          </div>
          <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm text-abdel-gold text-xs px-2.5 py-1 rounded-lg font-semibold border border-abdel-gold/30">
            {product.variants && product.variants.length > 0
              ? product.variants.map((v) => v.weight).join(" / ")
              : product.weight}
          </div>
          <button
            onClick={handleAddToCart}
            className={`absolute bottom-3 right-3 p-3 rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg ${
              added
                ? "bg-abdel-gold text-black"
                : "bg-black/90 text-abdel-gold border border-abdel-gold/50 hover:bg-abdel-gold hover:text-black"
            }`}
          >
            {added ? <Check size={18} /> : <ShoppingCart size={18} />}
          </button>
        </div>

        <div className="p-5">
          <p className="text-xs text-abdel-gold font-semibold uppercase tracking-wider mb-1">
            {product.category}
          </p>
          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-abdel-gold transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-white/50 mb-3 line-clamp-1">{product.subtitle}</p>
          <div className="flex items-center justify-between pt-3 border-t border-abdel-gold/15">
            <div>
              {product.variants && product.variants.length > 0 ? (
                <>
                  <span className="text-xs text-white/40">À partir de</span>
                  <span className="text-lg font-bold text-abdel-gold block -mt-0.5">
                    {formatPrice(Math.min(...product.variants.map((v) => v.price)))}
                  </span>
                </>
              ) : (
                <span className="text-lg font-bold text-abdel-gold">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>
            <span className="text-xs text-black bg-abdel-gold px-3 py-1.5 rounded-lg font-semibold">
              Voir
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
