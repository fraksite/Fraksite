import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { NAV } from "../data/content";
import { useApp } from "../contexts/AppContext";
import { Button } from "./ui/button";
import LogoFraksite from "../assets/images/logoFraksi.png";

export default function Navbar() {
  const { lang, toggleLang, theme, toggleTheme, t } = useApp();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-10 h-16 md:h-20 flex items-center justify-between gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 group"
          aria-label="Fraksite Home"
        >
          <img
            src={LogoFraksite}
            alt="ini merupakan logo fraksite"
            className="w-12 h-12 rounded-lg"
          />
          <span className="font-display text-lg md:text-xl font-semibold tracking-tight">
            Fraksite
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <NavLink
              key={n.key}
              to={n.href}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {t(n.id, n.en)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="hidden sm:inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs font-medium tracking-widest uppercase hover:border-foreground/40 transition-colors"
          >
            <span
              className={
                lang === "id" ? "text-foreground" : "text-muted-foreground"
              }
            >
              ID
            </span>
            <span className="text-muted-foreground">/</span>
            <span
              className={
                lang === "en" ? "text-foreground" : "text-muted-foreground"
              }
            >
              EN
            </span>
          </button>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border hover:border-foreground/40 transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          <Link to="/mulai-proyek" className="hidden md:inline-flex">
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-white font-medium px-5 h-10 shadow-glow group">
              {t("Mulai Proyek", "Start Project")}
              <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </Link>
          <button
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-border"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="px-5 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.key}
                to={n.href}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-lg text-sm font-medium ${
                    isActive
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground"
                  }`
                }
              >
                {t(n.id, n.en)}
              </NavLink>
            ))}
            <div className="flex items-center gap-2 pt-3 border-t border-border mt-2">
              <button
                onClick={toggleLang}
                className="flex-1 rounded-full border border-border px-3 py-2 text-xs font-medium tracking-widest uppercase"
              >
                {lang === "id" ? "ID · Indonesia" : "EN · English"}
              </button>
              <Link to="/mulai-proyek" className="flex-1">
                <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-white">
                  {t("Mulai Proyek", "Start Project")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
