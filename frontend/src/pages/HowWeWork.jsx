import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { PROCESS } from "../data/content";
import { useApp } from "../contexts/AppContext";

export default function HowWeWork() {
  const { t } = useApp();
  return (
    <div className="pt-32 md:pt-40 pb-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <SectionHeader
          eyebrow={t("Cara Kerja", "How We Work")}
          title={t("Delapan tahap,", "Eight stages,")}
          accent={t("nol drama.", "zero drama.")}
          description={t("Kami rangkum proses jadi 8 tahap yang bisa kamu lihat progresnya kapan aja.", "We break the process into 8 stages so you can track progress anytime.")}
        />

        <div className="mt-16 relative">
          <div aria-hidden className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-border" />
          <ul className="space-y-6">
            {PROCESS.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <li className="relative pl-14 md:pl-20 group">
                  <span className="absolute left-1.5 md:left-3.5 top-1 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center node-glow" />
                  <div className="rounded-2xl border border-border p-6 md:p-8 group-hover:border-primary/40 transition-colors">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-3xl md:text-4xl font-semibold text-primary">{s.n}</span>
                      <h3 className="font-display text-xl md:text-2xl font-medium tracking-tight">{t(s.id.t, s.en.t)}</h3>
                    </div>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{t(s.id.d, s.en.d)}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
