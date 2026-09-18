import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { CATEGORIES } from "../data/content";
import { useApp } from "../contexts/AppContext";
import { Button } from "../components/ui/button";

export default function WhatWeBuild() {
  const { t } = useApp();
  return (
    <div className="pt-32 md:pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeader
          eyebrow={t("Yang Kami Buat", "What We Build")}
          title={t("Enam jenis website,", "Six website types,")}
          accent={t("satu standar.", "one standard.")}
          description={t("Setiap kategori kami rancang dari pengalaman menangani puluhan brand. Pilih yang paling dekat dengan kebutuhanmu.", "Every category is designed from hands-on work with dozens of brands. Pick the one closest to your needs.")}
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
          {CATEGORIES.map((c, i) => {
            const Icon = Icons[c.icon] || Icons.Circle;
            return (
              <Reveal key={c.slug} delay={i * 60}>
                <div className="group h-full rounded-2xl border border-border p-8 md:p-10 hover:border-primary/50 transition-colors bg-secondary/20">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-background border border-border text-primary">
                      <Icon className="w-6 h-6" />
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {t(c.id.tag, c.en.tag)}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-3xl md:text-4xl font-medium tracking-tight">
                    {t(c.id.name, c.en.name)}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {t(c.desc.id, c.desc.en)}
                  </p>
                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {t(c.features.id, c.features.en).map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Link to={`/hasil-kerja?cat=${c.slug}`}>
                      <Button variant="outline" className="rounded-full border-border hover:bg-secondary">
                        {t("Lihat contoh", "See examples")} <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                    <Link to="/mulai-proyek">
                      <Button className="rounded-full bg-primary hover:bg-primary/90 text-white">
                        {t("Mulai", "Start")}
                      </Button>
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
