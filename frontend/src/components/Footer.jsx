import { Link } from "react-router-dom";
import { Instagram, Mail, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import { NAV, CONTACT, CATEGORIES } from "../data/content";
import { useApp } from "../contexts/AppContext";

export default function Footer() {
  const { t } = useApp();
  return (
    <footer className="relative border-t border-border mt-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground mb-4">
              {t("Siap mulai?", "Ready to start?")}
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tighter">
              {t("Bangun website", "Build a website")}
              <br />
              <span className="text-gradient-blue">{t("yang menjual.", "that sells.")}</span>
            </h2>
            <Link
              to="/mulai-proyek"
              className="inline-flex items-center gap-2 mt-8 rounded-full bg-primary hover:bg-primary/90 text-white px-6 py-3 text-sm font-medium transition-colors group"
            >
              {t("Mulai Proyek Sekarang", "Start Your Project")}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                {t("Halaman", "Pages")}
              </p>
              <ul className="space-y-2">
                {NAV.map((n) => (
                  <li key={n.key}>
                    <Link
                      to={n.href}
                      className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {t(n.id, n.en)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                {t("Kategori", "Categories")}
              </p>
              <ul className="space-y-2">
                {CATEGORIES.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to={`/hasil-kerja?cat=${c.slug}`}
                      className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {t(c.id.name, c.en.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                {t("Kontak", "Contact")}
              </p>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground"
                  >
                    <Mail className="w-4 h-4" /> {CONTACT.email}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground"
                  >
                    <Instagram className="w-4 h-4" /> @fraksite
                  </a>
                </li>
                <li className="inline-flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" /> {CONTACT.location}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Fraksite. {t("Semua hak dilindungi.", "All rights reserved.")}
          </p>
          <p className="text-xs text-muted-foreground">
            {t("Dibuat dengan ", "Crafted with ")}
            <span className="text-primary">●</span>
            {t(" di Indonesia", " in Indonesia")}
          </p>
        </div>
      </div>
    </footer>
  );
}
