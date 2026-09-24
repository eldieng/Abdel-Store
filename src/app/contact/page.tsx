"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";
import { LOCAL_SEO } from "@/lib/seo";

const fieldClass =
  "w-full px-4 py-3 bg-black border border-abdel-gold/30 rounded-xl text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-abdel-gold focus:border-abdel-gold";

const labelClass = "block text-sm font-medium text-abdel-gold mb-1.5";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <section className="bg-gradient-to-r from-black to-abdel-soft text-white py-12 md:py-16 border-b border-abdel-gold/20">
        <div className="container-custom px-4 md:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Contact <span className="text-abdel-gold">Abdel Store</span> — Dakar
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Parcelle Assainie U8 · WhatsApp, téléphone ou email · Livraison Dakar &amp; Sénégal
          </p>
        </div>
      </section>

      <section className="bg-abdel-soft section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="bg-abdel-card p-6 rounded-2xl border border-abdel-gold/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-abdel-gold/10 border border-abdel-gold/30 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-abdel-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Adresse</h3>
                    <p className="text-sm text-white/60">
                      Dakar, Parcelle Assainie U8
                      <br />
                      Sénégal (Case Bah)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-abdel-card p-6 rounded-2xl border border-abdel-gold/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-abdel-gold/10 border border-abdel-gold/30 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-abdel-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Téléphone</h3>
                    <a
                      href={`tel:${LOCAL_SEO.phone}`}
                      className="text-sm text-white/60 hover:text-abdel-gold transition-colors"
                    >
                      {LOCAL_SEO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-abdel-card p-6 rounded-2xl border border-abdel-gold/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-abdel-gold/10 border border-abdel-gold/30 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-abdel-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Email</h3>
                    <a
                      href={`mailto:${LOCAL_SEO.email}`}
                      className="text-sm text-white/60 hover:text-abdel-gold transition-colors break-all"
                    >
                      {LOCAL_SEO.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-abdel-card border border-abdel-gold/40 p-6 rounded-2xl text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-abdel-gold/15 border border-abdel-gold/40 rounded-xl flex items-center justify-center shrink-0">
                    <MessageCircle size={20} className="text-abdel-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-abdel-gold">WhatsApp</h3>
                    <p className="text-sm text-white/60 mb-3">
                      Contactez-nous directement sur WhatsApp pour une réponse
                      rapide
                    </p>
                    <a
                      href={`https://wa.me/${LOCAL_SEO.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-abdel-gold text-black px-4 py-2 rounded-xl text-sm font-semibold hover:bg-abdel-goldLight transition-colors"
                    >
                      <MessageCircle size={16} />
                      Écrire sur WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-abdel-card p-8 rounded-2xl border border-abdel-gold/20">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Envoyez-nous un message
                </h2>

                {sent && (
                  <div className="bg-abdel-gold/10 border border-abdel-gold/40 text-abdel-gold p-4 rounded-xl mb-6">
                    Merci pour votre message ! Nous vous répondrons dans les
                    plus brefs délais.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Nom complet</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={fieldClass}
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={fieldClass}
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Sujet</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className={fieldClass}
                      placeholder="Objet de votre message"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`${fieldClass} resize-none`}
                      placeholder="Votre message..."
                    />
                  </div>
                  <button type="submit" className="btn-primary">
                    <Send size={16} />
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
