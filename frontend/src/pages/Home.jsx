import { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
} from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { Button } from "../components/ui/button";
import {
  CATEGORIES,
  PROJECTS,
  PRICING,
  PROCESS,
  PROBLEMS,
  WHY,
  FAQ_GROUPS,
  TECH,
} from "../data/content";
import { useApp } from "../contexts/AppContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export default function Home() {
  const { t } = useApp();
  const [mode, setMode] = useState("fraksite");

  const comparison =
    mode === "biasa"
      ? {
          badge: "❌ Standard Template",
          badgeClass:
            "border-orange-200 bg-orange-100 text-orange-700",
          panelClass:
            "border-slate-200 bg-slate-100/90 text-slate-700",
          title: "Website Biasa",
          itemClass: "text-slate-600",
          accentClass: "text-orange-500",
          items: [
            {
              icon: "⏱️",
              label: "Speed",
              value: "Lambat (4.8s)",
            },
            {
              icon: "📱",
              label: "Layout",
              value: "Kaku & Berantakan di HP",
            },
            {
              icon: "📉",
              label: "Hasil",
              value: "Sepi Pembeli / Konversi Rendah",
            },
          ],
        }
      : {
          badge: "⚡ Custom High-Performance",
          badgeClass:
            "border-emerald-200 bg-emerald-100 text-emerald-700",
          panelClass:
            "border-blue-500/30 bg-white/95 text-slate-800 shadow-[0_20px_50px_rgba(59,130,246,0.18)]",
          title: "Versi Fraksite",
          itemClass: "text-slate-700",
          accentClass: "text-emerald-500",
          items: [
            {
              icon: "⚡",
              label: "Speed",
              value: "Super Cepat (<0.8s)",
            },
            {
              icon: "📱",
              label: "Layout",
              value: "100% Mobile First & Estetik",
            },
            {
              icon: "🚀",
              label: "Hasil",
              value: "Siap Mengonversi Pengunjung Jadi Pembeli",
            },
          ],
        };

  return (
    <div>
      {/* HERO */}
      <section className="relative pt-24 md:pt-28 pb-12 md:pb-16 overflow-hidden grain">
        {/* Ambient blobs */}
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-primary/20 blur-[140px]"
        />
        <div
          aria-hidden
          className="absolute top-24 -left-40 w-[420px] h-[420px] rounded-full bg-primary/10 blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <Reveal delay={80}>
                <h1 className="font-display text-[42px] sm:text-6xl lg:text-[92px] leading-[0.94] font-semibold tracking-tighter mt-6">
                  {t("Website ", " website.")}
                  <span className="text-gradient-blue">
                    {t("profesional.", "Professional")}
                  </span>
                  <br></br>
                  {t("Bisnis makin ", "Boost bussiness ")}
                  <span className="text-gradient-blue">
                    {t("kredibel.", "credibility.")}
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-8 text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  {t(
                    "Bantu bisnis kamu berkembang lebih pesat lewat website yang cepat, rapi, dan siap ningkatin penjualan. Mulai dari company profile sampai web app, kami siap wujudkan sesuai kebutuhan bisnismu.",
                    "Help your business grow faster with a custom website that’s fast, polished, and designed to boost sales. From company profiles to web apps, we’re ready to bring your vision to life based on your business needs.",
                  )}
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <Link to="/mulai-proyek">
                    <Button className="rounded-full bg-primary hover:bg-primary/90 text-white h-12 px-6 text-sm font-medium group shadow-glow">
                      {t("Mulai Sekarang", "Start Now")}
                      <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Button>
                  </Link>

                  <Link to="/hasil-kerja">
                    <Button
                      variant="outline"
                      className="rounded-full h-12 px-6 text-sm font-medium border-border bg-background/40 backdrop-blur hover:bg-secondary hover:text-foreground"
                    >
                      {t("Lihat Hasil Kerja", "See Our Work")}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-4 lg:mt-1 lg:pt-2">
              <Reveal delay={200}>
                <div className="relative mt-0 lg:mt-0">
                  <div
                    className={`relative overflow-hidden rounded-[24px] border p-3 transition-all duration-300 ease-in-out ${
                      mode === "fraksite"
                        ? "border-blue-500/30 bg-white/90 shadow-[0_25px_60px_rgba(59,130,246,0.18)] backdrop-blur-md"
                        : "border-slate-200 bg-slate-100/90 shadow-[0_20px_40px_rgba(15,23,42,0.08)]"
                    }`}
                  >
                    <div className="mb-3 flex rounded-full border border-slate-200 bg-slate-100 p-1.5">
                      <button
                        type="button"
                        onClick={() => setMode("biasa")}
                        className={`flex-1 rounded-full px-3 py-2 text-[11px] font-medium transition-all duration-300 ease-in-out ${
                          mode === "biasa"
                            ? "bg-slate-900 text-white shadow-sm"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Website Biasa
                      </button>

                      <button
                        type="button"
                        onClick={() => setMode("fraksite")}
                        className={`flex-1 rounded-full px-3 py-2 text-[11px] font-medium transition-all duration-300 ease-in-out ${
                          mode === "fraksite"
                            ? "bg-blue-600 text-white shadow-sm"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Versi Fraksite
                      </button>
                    </div>

                    <div
                      className={`overflow-hidden rounded-[18px] border p-4 transition-all duration-300 ease-in-out ${comparison.panelClass}`}
                    >
                      <div
                        className={`mb-3 inline-flex rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] ${comparison.badgeClass}`}
                      >
                        {comparison.badge}
                      </div>

                      <div className="space-y-3 transition-all duration-300 ease-in-out">
                        <div className="flex items-start justify-between gap-3">
                          <span className="text-lg">
                            {comparison.title}
                          </span>

                          <span className="text-sm text-slate-400">
                            {mode === "biasa" ? "❗" : "✓"}
                          </span>
                        </div>

                        <div className="space-y-2">
                          {comparison.items.map((item) => (
                            <div
                              key={item.label}
                              className={`flex items-start gap-2 rounded-xl border border-current/10 bg-white/20 px-2.5 py-2 text-xs transition-all duration-300 ease-in-out ${comparison.itemClass}`}
                            >
                              <span className={comparison.accentClass}>
                                {item.icon}
                              </span>

                              <div className="leading-snug">
                                <div className="font-medium">
                                  {item.label}: {item.value}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {[
                    { n: "3x", l: "Lebih Cepat" },
                    { n: "100%", l: "Responsive" },
                    { n: "High", l: "Conversion" },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="rounded-xl border border-border bg-white/50 p-3 shadow-sm backdrop-blur-sm"
                    >
                      <p className="font-display text-2xl font-semibold text-primary">
                        {s.n}
                      </p>

                      <p className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">
                        {s.l}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Tech marquee */}
          <div className="mt-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex animate-marquee whitespace-nowrap gap-12 text-sm text-muted-foreground">
              {[...TECH, ...TECH].map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            eyebrow={t("Masalah", "The problem")}
            title={t(
              "Kalau ini terasa familiar,",
              "If this feels familiar,",
            )}
            accent={t("kami paham.", "we get it.")}
            description={t(
              "Banyak bisnis kehilangan pelanggan bukan karena produknya kurang, tapi karena kehadiran online-nya belum meyakinkan.",
              "Many businesses lose customers not because of their product, but because their online presence isn't convincing.",
            )}
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROBLEMS.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="rounded-2xl border border-border p-6 md:p-8 flex items-start gap-4 hover:border-foreground/40 transition-colors">
                  <span className="font-display text-3xl text-primary">
                    0{i + 1}
                  </span>

                  <p className="text-lg md:text-xl leading-snug">
                    {t(p.id, p.en)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* YANG KAMI BUAT — Bento */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeader
              eyebrow={t("Yang Kami Buat", "What We Build")}
              title={t("Satu tim,", "One team,")}
              accent={t("banyak solusi.", "many solutions.")}
              description={t(
                "Pilih kebutuhan bisnis kamu — kami sudah punya framework untuk setiap kategori.",
                "Pick your business need — we already have a framework for each category.",
              )}
            />

            <Link
              to="/yang-kami-buat"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            >
              {t("Lihat semua", "See all")}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5 auto-rows-[minmax(200px,auto)]">
            {CATEGORIES.map((c, i) => {
              const Icon = Icons[c.icon] || Icons.Circle;

              const span =
                i === 0
                  ? "md:col-span-4"
                  : i === 5
                    ? "md:col-span-4 md:row-span-1"
                    : "md:col-span-2";

              return (
                <Reveal
                  key={c.slug}
                  delay={i * 60}
                  className={span}
                >
                  <Link
                    to={`/hasil-kerja?cat=${c.slug}`}
                    className="group relative block h-full rounded-2xl border border-border p-6 md:p-8 overflow-hidden card-hover bg-secondary/30 hover:border-primary/50"
                  >
                    <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-primary/0 group-hover:bg-primary/10 blur-3xl transition-colors duration-500" />

                    <div className="relative flex flex-col h-full">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-background border border-border text-primary group-hover:border-primary/50">
                          <Icon className="w-5 h-5" />
                        </span>

                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                          {t(c.id.tag, c.en.tag)}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl md:text-3xl font-medium mt-6 tracking-tight">
                        {t(c.id.name, c.en.name)}
                      </h3>

                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md">
                        {t(c.desc.id, c.desc.en)}
                      </p>

                      <span className="mt-auto pt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">
                        {t("Pelajari", "Learn more")}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* HASIL KERJA — Featured */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeader
              eyebrow={t("Hasil Kerja", "Our Work")}
              title={t("Bukan pajangan,", "Not a showcase,")}
              accent={t("tapi hasil nyata.", "but real outcomes.")}
            />

            <Link
              to="/hasil-kerja"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            >
              {t("Semua proyek", "All projects")}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link
                  to={`/hasil-kerja/${p.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-border bg-secondary/30 card-hover"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={p.image}
                      alt={t(p.id.title, p.en.title)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-muted-foreground uppercase tracking-widest">
                      <span>
                        {t(p.id.tag, p.en.tag)}
                      </span>

                      <span>{p.year}</span>
                    </div>

                    <h3 className="mt-3 font-display text-xl font-medium tracking-tight">
                      {t(p.id.title, p.en.title)}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            eyebrow={t("Kenapa Fraksite", "Why Fraksite")}
            title={t("Kerja rapi,", "Neat work,")}
            accent={t("hasil serius.", "serious results.")}
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY.map((w, i) => {
              const Icon = Icons[w.icon] || Icons.Circle;

              return (
                <Reveal key={w.icon} delay={i * 60}>
                  <div className="h-full rounded-2xl border border-border p-6 hover:border-primary/40 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />

                    <h3 className="mt-6 font-display text-xl font-medium">
                      {t(w.id.t, w.en.t)}
                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {t(w.id.d, w.en.d)}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS preview */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            eyebrow={t("Cara Kerja", "How We Work")}
            title={t("Dari ide", "From idea")}
            accent={t("sampai live.", "to launch.")}
            description={t(
              "Alur kerja transparan supaya kamu selalu tahu progres proyekmu.",
              "Transparent workflow so you always know your project's progress.",
            )}
          />

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {PROCESS.slice(0, 4).map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <div className="rounded-2xl border border-border p-6 hover:border-primary/40 transition-colors">
                  <span className="font-display text-4xl font-semibold text-primary">
                    {s.n}
                  </span>

                  <h3 className="mt-4 font-display text-lg font-medium">
                    {t(s.id.t, s.en.t)}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {t(s.id.d, s.en.d)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/cara-kerja"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary"
            >
              {t("Lihat semua 8 tahapan", "See all 8 steps")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING preview */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            eyebrow={t("Harga", "Pricing")}
            title={t("Transparan.", "Transparent.")}
            accent={t("Tanpa surprise.", "No surprises.")}
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {PRICING.filter((p) =>
              ["starter", "business", "ecommerce"].includes(p.slug),
            ).map((p) => (
              <div
                key={p.slug}
                className={`relative rounded-2xl border p-8 ${
                  p.highlight
                    ? "border-primary bg-primary/[0.04]"
                    : "border-border"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-8 rounded-full bg-primary text-white text-xs px-3 py-1 font-medium">
                    {t("Paling Populer", "Most Popular")}
                  </span>
                )}

                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {t(p.id.tag, p.en.tag)}
                </p>

                <h3 className="mt-2 font-display text-3xl font-medium">
                  {t(p.id.name, p.en.name)}
                </h3>

                <p className="mt-6 font-display text-5xl font-semibold tracking-tighter">
                  <span className="text-lg align-top text-muted-foreground mr-1">
                    Rp
                  </span>

                  {p.price}

                  <span className="text-base font-normal text-muted-foreground ml-1">
                    {t(p.unit, p.unitEn)}
                  </span>
                </p>

                <ul className="mt-6 space-y-2.5">
                  {t(p.features.id, p.features.en)
                    .slice(0, 5)
                    .map((f, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm"
                      >
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                </ul>

                <Link to="/mulai-proyek">
                  <Button
                    className={`mt-8 w-full rounded-full ${
                      p.highlight
                        ? "bg-primary hover:bg-primary/90 text-white"
                        : "bg-secondary hover:bg-secondary/70 text-foreground"
                    }`}
                  >
                    {t("Pilih Paket", "Choose Package")}
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/harga"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary"
            >
              {t("Lihat semua paket", "See all packages")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="FAQ"
              title={t("Yang sering", "Frequently")}
              accent={t("ditanyakan.", "asked.")}
              description={t(
                "Belum ketemu jawabannya? Chat langsung tim kami di WhatsApp.",
                "Can't find your answer? Chat our team directly on WhatsApp.",
              )}
            />
          </div>

          <div className="lg:col-span-7">
            <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              {FAQ_GROUPS.slice(0, 2)
                .flatMap((g) => g.items)
                .map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-border"
                  >
                    <AccordionTrigger className="text-left font-display text-lg font-medium hover:no-underline hover:text-primary">
                      {t(item.q.id, item.q.en)}
                    </AccordionTrigger>

                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {t(item.a.id, item.a.en)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl border border-border p-10 md:p-16 bg-secondary/40">
            <div
              aria-hidden
              className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-primary/25 blur-[120px]"
            />

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {t("Siap mulai proyekmu?", "Ready to start?")}
                </p>

                <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tighter mt-4">
                  {t("Ceritakan idemu.", "Tell us your idea.")}
                  <br />

                  <span className="text-gradient-blue">
                    {t("Kami eksekusi.", "We'll execute.")}
                  </span>
                </h2>
              </div>

              <div className="flex md:justify-end">
                <Link to="/mulai-proyek">
                  <Button className="rounded-full bg-primary hover:bg-primary/90 text-white h-12 px-7 font-medium shadow-glow-lg">
                    {t("Mulai Sekarang", "Start Now")}
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
