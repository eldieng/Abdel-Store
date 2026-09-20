"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X, User, Phone } from "lucide-react";
import { getCart, getCartCount } from "@/lib/cart";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateCart = () => {
      const cart = getCart();
      setCartCount(getCartCount(cart));
    };
    updateCart();
    window.addEventListener("cart-updated", updateCart);
    window.addEventListener("storage", updateCart);
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("cart-updated", updateCart);
      window.removeEventListener("storage", updateCart);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/boutique", label: "Boutique" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <div className="bg-black text-abdel-gold text-xs py-2 hidden md:block border-b border-abdel-gold/20">
        <div className="container-custom px-4 md:px-8 flex items-center justify-between">
          <span className="text-abdel-gold/90 font-medium tracking-wide">
            ABDEL STORE · Dakar — Montres, Oraimo &amp; accessoires premium
          </span>
          <div className="flex items-center gap-4">
            <a
              href="tel:+221772958443"
              className="flex items-center gap-1 text-abdel-gold/80 hover:text-abdel-goldLight transition-colors"
            >
              <Phone size={12} />
              +221 77 295 84 43
            </a>
            <Link
              href="/admin"
              className="text-abdel-gold/80 hover:text-abdel-goldLight flex items-center gap-1"
            >
              <User size={12} />
              Admin
            </Link>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/40 border-abdel-gold/20 py-2"
            : "bg-black border-abdel-gold/10 py-3"
        }`}
      >
        <div className="container-custom flex items-center justify-between px-4 md:px-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-abdel-store.png"
              alt="Abdel Store"
              width={72}
              height={72}
              className="h-12 md:h-14 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-abdel-gold font-medium transition-colors relative group text-sm tracking-wide"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-abdel-gold group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/panier" className="relative group">
              <div className="w-10 h-10 rounded-xl bg-abdel-gold/10 border border-abdel-gold/30 flex items-center justify-center group-hover:bg-abdel-gold/20 transition-colors">
                <ShoppingCart size={20} className="text-abdel-gold" />
              </div>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-abdel-gold text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              className="md:hidden text-abdel-gold w-10 h-10 rounded-xl bg-abdel-gold/10 border border-abdel-gold/30 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-abdel-card border-t border-abdel-gold/20">
            <nav className="flex flex-col py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-6 py-3.5 text-white/80 hover:bg-abdel-gold/10 hover:text-abdel-gold transition-colors border-b border-white/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/admin"
                className="px-6 py-3.5 text-white/80 hover:bg-abdel-gold/10 hover:text-abdel-gold transition-colors flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={16} />
                Administration
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
