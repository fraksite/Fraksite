import { Link } from "react-router-dom";
import { Heart, Compass, Users, Rocket, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { useApp } from "../contexts/AppContext";
import { Button } from "../components/ui/button";

/* -------------------------------------------------------------------------- */
/* Hero visual: browser window with a fictional small business website        */
/* -------------------------------------------------------------------------- */
function HeroVisual() {
  const { t } = useApp();

  return (
    <div
      className="group relative w-full aspect-[4/3] rounded-[20px] border border-border bg-gradient-to-br from-card via-background to-primary/5"
      style={{ containerType: "inline-size" }}
    >
      <style>{`
        @keyframes fk-float-a { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-1.4cqw) } }
        @keyframes fk-float-b { 0%,100% { transform: translateY(0) } 50% { transform: translateY(1.1cqw) } }
        @keyframes fk-tap { 0%,100% { transform: translate(0,0) } 50% { transform: translate(-0.6cqw,-0.5cqw) } }
        .fk-float-a { animation: fk-float-a 6s ease-in-out infinite }
        .fk-float-b { animation: fk-float-b 7s ease-in-out infinite }
        .fk-tap { animation: fk-tap 4s ease-in-out infinite }
        @media (prefers-reduced-motion: reduce) {
          .fk-float-a, .fk-float-b, .fk-tap { animation: none }
        }
      `}</style>

      {/* soft background glow */}
      <div className="absolute rounded-full bg-primary/10 blur-3xl" style={{ width: "50%", height: "50%", left: "25%", top: "25%" }} />

      {/* BROWSER WINDOW */}
      <div
        className="absolute flex flex-col overflow-hidden border border-border bg-card shadow-[0_20px_50px_-20px_rgba(15,23,42,0.35)] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_28px_60px_-20px_rgba(37,99,235,0.35)]"
        style={{ left: "13%", top: "12%", width: "74%", height: "70%", borderRadius: "2.6cqw" }}
      >
        {/* header */}
        <div className="flex shrink-0 items-center border-b border-border bg-muted/50" style={{ height: "6.5cqw", padding: "0 2.2cqw", gap: "0.9cqw" }}>
          <span className="rounded-full bg-foreground/20" style={{ width: "1.3cqw", height: "1.3cqw" }} />
          <span className="rounded-full bg-foreground/20" style={{ width: "1.3cqw", height: "1.3cqw" }} />
          <span className="rounded-full bg-foreground/20" style={{ width: "1.3cqw", height: "1.3cqw" }} />
          <div className="mx-auto flex items-center rounded-full border border-border bg-background text-muted-foreground" style={{ height: "3.4cqw", width: "34%", padding: "0 1.6cqw", fontSize: "1.5cqw", lineHeight: 1 }}>
            {t("tokokamu.id", "yourshop.id")}
          </div>
          <span style={{ width: "5cqw" }} />
        </div>

        {/* page: flex column so the product row always fits */}
        <div className="flex min-h-0 flex-1 flex-col" style={{ padding: "2.4cqw 3.4cqw 3cqw" }}>
          {/* nav */}
          <div className="flex shrink-0 items-center justify-between" style={{ marginBottom: "2.2cqw" }}>
            <span className="font-bold tracking-tight text-foreground" style={{ fontSize: "1.9cqw", lineHeight: 1.2 }}>
              {t("tokokamu", "yourshop")}<span className="text-primary">.</span>
            </span>
            <div className="flex" style={{ gap: "1.8cqw" }}>
              <span className="rounded-full bg-foreground/10" style={{ width: "4cqw", height: "0.8cqw" }} />
              <span className="rounded-full bg-foreground/10" style={{ width: "4cqw", height: "0.8cqw" }} />
              <span className="rounded-full bg-foreground/10" style={{ width: "4cqw", height: "0.8cqw" }} />
            </div>
          </div>

          {/* hero */}
          <div className="flex shrink-0 items-center justify-between" style={{ gap: "3cqw" }}>
            <div style={{ width: "58%" }}>
              <p className="font-semibold uppercase text-primary" style={{ fontSize: "1.3cqw", letterSpacing: "0.18em", marginBottom: "0.8cqw", lineHeight: 1.2 }}>
                {t("Usaha Lokal", "Local Business")}
              </p>
              <h3 className="font-extrabold uppercase leading-none tracking-tight text-foreground" style={{ fontSize: "5.2cqw" }}>
                {t("Toko Kamu", "Your Shop")}
              </h3>
              <p className="text-muted-foreground" style={{ fontSize: "1.9cqw", marginTop: "1.2cqw", lineHeight: 1.35 }}>
                {t("Produk terbaik untuk kebutuhanmu.", "The best products for your needs.")}
              </p>

              {/* CTA button with the cursor attached to its edge */}
              <div className="relative inline-flex" style={{ marginTop: "1.8cqw" }}>
                <div
                  className="inline-flex items-center bg-primary font-semibold text-white shadow-[0_8px_18px_-8px_rgba(37,99,235,0.7)]"
                  style={{ height: "4.4cqw", padding: "0 2.4cqw", borderRadius: "1.3cqw", fontSize: "1.7cqw", lineHeight: 1 }}
                >
                  {t("Belanja Sekarang", "Shop Now")}
                </div>
                <div className="fk-tap absolute" style={{ left: "calc(100% - 1.2cqw)", top: "55%" }}>
                  <div
                    className="bg-foreground drop-shadow-md"
                    style={{ width: "3cqw", height: "4cqw", clipPath: "polygon(0 0, 0 82%, 26% 64%, 46% 100%, 64% 91%, 44% 56%, 82% 52%)" }}
                  />
                </div>
              </div>
            </div>

            <div
              className="relative overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/10 to-card"
              style={{ width: "36%", height: "15.5cqw", borderRadius: "2cqw" }}
            >
              <div className="absolute rounded-full bg-primary/15" style={{ width: "10cqw", height: "10cqw", right: "-2cqw", top: "-2cqw" }} />
              <div className="absolute border border-border bg-card shadow-sm" style={{ left: "16%", bottom: "14%", width: "46%", height: "46%", borderRadius: "1.4cqw" }} />
              <div className="absolute bg-primary" style={{ left: "26%", bottom: "26%", width: "26%", height: "22%", borderRadius: "0.9cqw" }} />
            </div>
          </div>

          {/* product cards: take the remaining height, never overflow */}
          <div className="grid min-h-0 flex-1 grid-cols-3" style={{ gap: "1.8cqw", marginTop: "2.2cqw" }}>
            {["A", "B", "C"].map((letter, i) => (
              <div key={letter} className="flex min-h-0 flex-col overflow-hidden border border-border bg-background/60" style={{ borderRadius: "1.6cqw", padding: "1.2cqw" }}>
                <div
                  className="min-h-0 w-full flex-1 bg-gradient-to-br from-primary/10 to-muted"
                  style={{ borderRadius: "1.1cqw" }}
                />
                <p className="shrink-0 font-semibold text-foreground" style={{ fontSize: "1.5cqw", marginTop: "0.8cqw", lineHeight: 1.3 }}>
                  {t("Produk", "Product")} {letter}
                </p>
                <div className="flex shrink-0 items-center justify-between" style={{ marginTop: "0.5cqw" }}>
                  <span className="rounded-full bg-foreground/10" style={{ width: `${5 + i}cqw`, height: "0.8cqw" }} />
                  <span className="rounded-full bg-primary/10 font-semibold text-primary" style={{ fontSize: "1.2cqw", padding: "0.3cqw 1cqw", lineHeight: 1.3 }}>
                    {t("Beli", "Buy")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WIREFRAME CARD: only touches the window's left edge, not its dots */}
      <div
        className="fk-float-a absolute border border-dashed border-primary/40 bg-card/90 shadow-[0_10px_24px_-12px_rgba(15,23,42,0.35)] backdrop-blur"
        style={{ left: "1%", top: "22%", width: "14%", padding: "1.2cqw", borderRadius: "1.8cqw" }}
      >
        <div className="border border-dashed border-primary/30 bg-primary/10" style={{ height: "3.6cqw", borderRadius: "1cqw" }} />
        <div className="rounded-full bg-foreground/10" style={{ height: "0.8cqw", width: "80%", marginTop: "1cqw" }} />
        <div className="rounded-full bg-foreground/10" style={{ height: "0.8cqw", width: "55%", marginTop: "0.7cqw" }} />
      </div>

      {/* BADGE (top-right) */}
      <div
        className="fk-float-b absolute flex items-center border border-border bg-card font-semibold text-foreground shadow-[0_10px_24px_-12px_rgba(15,23,42,0.35)]"
        style={{ right: "4%", top: "7%", gap: "1cqw", padding: "1cqw 1.8cqw", borderRadius: "999px", fontSize: "1.6cqw", lineHeight: 1.2 }}
      >
        <span className="relative flex" style={{ width: "1.4cqw", height: "1.4cqw" }}>
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-full w-full rounded-full bg-emerald-500" />
        </span>
        {t("Website Siap", "Website Ready")}
      </div>

      {/* CODE CARD: only touches the window's bottom edge */}
      <div
        className="absolute border border-border bg-card shadow-[0_12px_28px_-14px_rgba(15,23,42,0.4)]"
        style={{ right: "2.5%", bottom: "3%", width: "27%", padding: "1.6cqw", borderRadius: "1.8cqw" }}
      >
        <div className="flex" style={{ gap: "0.6cqw", marginBottom: "1.1cqw" }}>
          <span className="rounded-full bg-primary" style={{ width: "0.9cqw", height: "0.9cqw" }} />
          <span className="rounded-full bg-foreground/15" style={{ width: "0.9cqw", height: "0.9cqw" }} />
          <span className="rounded-full bg-foreground/15" style={{ width: "0.9cqw", height: "0.9cqw" }} />
        </div>
        <pre className="font-mono text-muted-foreground" style={{ fontSize: "1.35cqw", lineHeight: 1.6 }}>
          <span className="text-primary">{"<Hero"}</span>
          {"\n  "}
          <span className="text-muted-foreground">{t("nama=", "name=")}</span>
          <span className="text-foreground">{t('"Toko Kamu"', '"Your Shop"')}</span>
          {"\n"}
          <span className="text-primary">{"/>"}</span>
        </pre>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Values: 4 floating cards side by side (no overlap)                         */
/* -------------------------------------------------------------------------- */
const valuesFloat = [
  { rot: "-3deg", amp: "4px", dur: "7s",    offset: "lg:mt-0" },
  { rot: "2deg",  amp: "6px", dur: "9s",    offset: "lg:mt-8" },
  { rot: "-1deg", amp: "5px", dur: "8s",    offset: "lg:mt-3" },
  { rot: "3deg",  amp: "7px", dur: "10.5s", offset: "lg:mt-10" },
];

function ValuesRow({ values }) {
  const { t } = useApp();

  return (
    <div className="relative">
      <style>{`
        .fk-fl { animation: fk-fl var(--dur) ease-in-out infinite; }
        @keyframes fk-fl {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(calc(var(--amp) * -1)); }
        }
        .fk-card { --r: 0deg; transform: rotate(var(--r)); transition: transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s, border-color .5s; }
        @media (min-width: 640px)  { .fk-card { --r: calc(var(--rd) * 0.35); } }
        @media (min-width: 1024px) { .fk-card { --r: var(--rd); } }
        .fk-card:hover { transform: translateY(-6px) rotate(0deg); }
        @media (prefers-reduced-motion: reduce) {
          .fk-fl { animation: none; }
          .fk-card { transition: none; }
        }
      `}</style>

      {/* soft blue glow behind the row */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[10%] top-1/2 h-[60%] -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative grid grid-cols-1 items-start gap-6 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => {
          const Icon = v.icon;
          const f = valuesFloat[i];
          return (
            <div
              key={i}
              className={`fk-fl ${f.offset}`}
              style={{ "--amp": f.amp, "--dur": f.dur, animationDelay: `${i * -1.7}s` }}
            >
              <div
                className="fk-card rounded-[22px] border border-border bg-card p-6 shadow-[0_18px_40px_-18px_rgba(15,23,42,0.3),0_2px_6px_rgba(15,23,42,0.05)] hover:border-primary/40 hover:shadow-[0_28px_56px_-20px_rgba(37,99,235,0.4),0_2px_8px_rgba(15,23,42,0.08)]"
                style={{ "--rd": f.rot }}
              >
                <div aria-hidden className="mb-5 h-1 w-8 rounded-full bg-primary/50" />

                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>

                <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                  {t(v.id.t, v.en.t)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(v.id.d, v.en.d)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */
export default function About() {
  const { t } = useApp();

  const BENEFITS = [
    t("Tampil rapi di HP", "Looks great on mobile"),
    t("Cepat dibuka", "Fast loading"),
    t("Mudah ditemukan di Google", "Easy to find on Google"),
    t("Bisa dikembangkan nanti", "Ready to grow later"),
  ];

  const values = [
    {
      icon: Heart,
      id: {
        t: "Kerja jujur",
        d: "Kalau memang butuh 2 minggu, kami bilang 2 minggu. Kami tidak menjanjikan sesuatu yang tidak bisa kami tepati.",
      },
      en: {
        t: "Honest work",
        d: "If it takes 2 weeks, we say 2 weeks. We don't promise something we can't deliver.",
      },
    },
    {
      icon: Compass,
      id: {
        t: "Proses yang jelas",
        d: "Dari awal sampai website siap online, kamu tahu apa yang sedang dikerjakan dan apa yang perlu disiapkan.",
      },
      en: {
        t: "A clear process",
        d: "From start to launch, you know what's being worked on and what needs to be prepared.",
      },
    },
    {
      icon: Users,
      id: {
        t: "Komunikasi bersama",
        d: "Kamu bagian dari proses, memberi masukan, dan tahu ke mana website ini berjalan.",
      },
      en: {
        t: "Working together",
        d: "You're part of the process, sharing your input and knowing where the website is headed.",
      },
    },
    {
      icon: Rocket,
      id: {
        t: "Tidak perlu rumit",
        d: "Website yang baik bukan tentang banyaknya fitur, tapi tentang membuat hal yang dibutuhkan.",
      },
      en: {
        t: "No need to overcomplicate it",
        d: "A good website isn't about having lots of features, but about making what you need work well.",
      },
    },
  ];

  return (
    <div className="pt-32 md:pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        {/* ROW 1: "Punya bisnis?" (left)  |  Toko Kamu browser (right) */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow={t("Tentang Kami", "About Us")}
              title={t("Punya bisnis?", "Have a business")}
              accent={t("tapi belum punya website.", "but no website yet?")}
              description={t(
                `Banyak bisnis mengandalkan Instagram, marketplace, atau WhatsApp untuk memperkenalkan diri.

Hal tersebut tidak salah.

Tapi ketika pembeli mencari bisnis kamu di Google, ingin melihat layanan, membaca informasi, atau sekadar memastikan bahwa bisnis kamu benar-benar terpercaya, website sendiri adalah tempatnya.

Fraksite hadir untuk membantu membuat tempat itu.`,
                `Many businesses rely on Instagram, marketplaces, or WhatsApp to introduce themselves.

There's nothing wrong with that.

But when customers search for your business on Google, want to learn about your services, read more information, or simply make sure your business is trustworthy, having your own website gives them a place to find it all.

That's where Fraksite comes in.`
              )}
            />
          </div>
          <Reveal>
            <HeroVisual />
          </Reveal>
        </div>

        {/* ROW 2: "Yang kami percaya" (centered) */}
        <Reveal delay={80}>
          <div className="mx-auto mt-24 max-w-2xl text-center">
            <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight">
              {t("Yang kami percaya", "What we believe")}
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {t(
                "Setiap bisnis, termasuk UMKM dan bisnis lokal, akan lebih baik jika memiliki website.",
                "Every business, including small and local businesses, can benefit from having a website."
              )}
            </p>
          </div>
        </Reveal>

        {/* ROW 3: 4 cards side by side */}
        <div className="mt-10">
          <Reveal>
            <ValuesRow values={values} />
          </Reveal>
        </div>

        {/* what you get */}
        <div className="mt-24">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {t("Yang kamu dapatkan", "What you get")}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {BENEFITS.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* floating CTA */}
        <div className="mt-24">
          <style>{`
            .fk-cta { animation: fk-cta-float 8s ease-in-out infinite; }
            @keyframes fk-cta-float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-6px); }
            }
            .fk-cta-inner { transition: transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s, border-color .5s; }
            .fk-cta-inner:hover { transform: translateY(-4px); }
            @media (prefers-reduced-motion: reduce) {
              .fk-cta { animation: none; }
              .fk-cta-inner { transition: none; }
              .fk-cta-inner:hover { transform: none; }
            }
          `}</style>

          <div className="fk-cta relative">
            {/* blue glow behind the card */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-8 -bottom-4 top-8 rounded-full bg-primary/20 blur-3xl"
            />

            <div className="fk-cta-inner relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[0_24px_50px_-20px_rgba(15,23,42,0.3),0_2px_6px_rgba(15,23,42,0.05)] hover:border-primary/40 hover:shadow-[0_32px_64px_-20px_rgba(37,99,235,0.45),0_2px_8px_rgba(15,23,42,0.08)] md:flex-row md:items-center md:p-12">
              <h3 className="relative font-display text-2xl font-medium tracking-tight text-foreground md:text-4xl">
                {t("Kerja bareng kami?", "Work with us?")}
              </h3>

              <Link to="/mulai-proyek" className="relative">
                <Button className="h-12 rounded-full bg-primary px-6 text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,0.7)] hover:bg-primary/90">
                  {t("Mulai Sekarang", "Start Now")} <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}