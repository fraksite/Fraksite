import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { PRICING } from "../data/content";
import { useApp } from "../contexts/AppContext";
import { Button } from "../components/ui/button";

export default function Pricing() {
  const { t } = useApp();
  return (
    <div className="pt-32 md:pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeader
          eyebrow={t("Harga", "Pricing")}
          title={t("Paket yang", "Packages that")}
          accent={t("bisa disesuaikan.", "flex to you.")}
          description={t("Semua paket termasuk desain custom, development, dan launch ke domain kamu. Butuh yang lebih spesifik? Ambil Custom.", "Every package includes custom design, development, and launch to your domain. Need something specific? Choose Custom.")}
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {PRICING.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <div
                className={`relative h-full flex flex-col rounded-2xl border p-6 ${
                  p.highlight
                    ? "border-primary bg-primary/[0.05] shadow-glow-lg"
                    : "border-border bg-secondary/20"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-6 rounded-full bg-primary text-white text-[11px] px-3 py-1 font-medium">
                    {t("Paling Populer", "Most Popular")}
                  </span>
                )}
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {t(p.id.tag, p.en.tag)}
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium">{t(p.id.name, p.en.name)}</h3>
                <p className="mt-5 font-display text-4xl font-semibold tracking-tighter">
                  <span className="text-sm align-top text-muted-foreground mr-1">Rp</span>
                  {p.price}
                  <span className="text-sm font-normal text-muted-foreground ml-1">{t(p.unit, p.unitEn)}</span>
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
                  <div className="rounded-lg border border-border px-2 py-1.5">
                    <p className="text-muted-foreground uppercase tracking-widest">{t("Waktu", "Time")}</p>
                    <p className="mt-0.5 font-medium">{t(p.timeline.id, p.timeline.en)}</p>
                  </div>
                  <div className="rounded-lg border border-border px-2 py-1.5">
                    <p className="text-muted-foreground uppercase tracking-widest">{t("Maintenance", "Maintenance")}</p>
                    <p className="mt-0.5 font-medium">{t(p.maintenance.id, p.maintenance.en)}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-2 flex-1">
                  {t(p.features.id, p.features.en).map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/mulai-proyek" className="mt-6">
                  <Button
                    className={`w-full rounded-full ${
                      p.highlight
                        ? "bg-primary hover:bg-primary/90 text-white"
                        : "bg-secondary hover:bg-secondary/70 text-foreground"
                    }`}
                  >
                    {t("Pilih", "Choose")} <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          {t("Butuh diskusi khusus? ", "Need a custom scope? ")}
          <Link to="/mulai-proyek" className="text-primary hover:underline">
            {t("Ceritakan proyekmu →", "Tell us about your project →")}
          </Link>
        </p>
      </div>
    </div>
  );
}
