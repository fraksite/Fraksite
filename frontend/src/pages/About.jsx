import { Link } from "react-router-dom";
import { Heart, Compass, Users, Rocket, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { TECH } from "../data/content";
import { useApp } from "../contexts/AppContext";
import { Button } from "../components/ui/button";

export default function About() {
  const { t } = useApp();
  const values = [
    { icon: Heart, id: { t: "Kerja jujur", d: "Kalau realistis 3 minggu, ya 3 minggu. Tidak menjanjikan yang tidak bisa ditepati." }, en: { t: "Honest work", d: "If it takes 3 weeks, we say 3 weeks. No overpromising." } },
    { icon: Compass, id: { t: "Detail berorientasi bisnis", d: "Setiap desain berangkat dari tujuan konversi, bukan sekadar estetika." }, en: { t: "Business-driven detail", d: "Every design starts from conversion goals, not just aesthetics." } },
    { icon: Users, id: { t: "Kolaborasi terbuka", d: "Kamu bagian dari proses. Tidak ada surprise besar di akhir." }, en: { t: "Open collaboration", d: "You're part of the process. No surprises at the end." } },
    { icon: Rocket, id: { t: "Kirim, iterasi, tumbuh", d: "Launch cepat, lalu improve terus berdasarkan data." }, en: { t: "Ship, iterate, grow", d: "Launch fast, then keep improving with data." } },
  ];

  return (
    <div className="pt-32 md:pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeader
          eyebrow={t("Tentang Kami", "About Us")}
          title={t("Studio kecil,", "Small studio,")}
          accent={t("output serius.", "serious output.")}
          description={t("Fraksite adalah studio web development yang membantu bisnis Indonesia bangun kehadiran digital yang tidak generik. Kami percaya website yang baik adalah aset — bukan biaya.", "Fraksite is a web development studio helping Indonesian businesses build non-generic digital presence. We believe great sites are assets — not costs.")}
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="rounded-2xl overflow-hidden border border-border">
              <img
                src="https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg"
                alt="Team working"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight">
                {t("Yang kami percaya", "What we believe")}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t(
                  "Bisnis kecil Indonesia berhak dapat website selevel brand global. Kami menggabungkan desain custom, kode yang kencang, dan kolaborasi transparan untuk menghasilkan website yang benar-benar bekerja.",
                  "Small Indonesian businesses deserve global-brand-quality websites. We combine custom design, fast code, and transparent collaboration to build sites that actually work."
                )}
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((v, i) => (
                  <div key={i} className="rounded-xl border border-border p-4">
                    <v.icon className="w-5 h-5 text-primary" />
                    <p className="mt-3 font-display font-medium">{t(v.id.t, v.en.t)}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{t(v.id.d, v.en.d)}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-24">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {t("Teknologi yang kami pakai", "Tech we use")}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {TECH.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-4 py-2 text-sm text-foreground/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-24 rounded-3xl border border-border p-8 md:p-12 bg-secondary/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h3 className="font-display text-2xl md:text-4xl font-medium tracking-tight">
            {t("Kerja bareng kami?", "Work with us?")}
          </h3>
          <Link to="/mulai-proyek">
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-white h-12 px-6">
              {t("Mulai Sekarang", "Start Now")} <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
