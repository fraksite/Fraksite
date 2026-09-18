import { useMemo, useEffect } from "react";
import { Link, useSearchParams, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { PROJECTS, CATEGORIES } from "../data/content";
import { useApp } from "../contexts/AppContext";
import { Button } from "../components/ui/button";

export default function Portfolio() {
  const { t } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();
  const active = searchParams.get("cat") || "all";
  const params = useParams();

  const filters = useMemo(
    () => [{ slug: "all", id: { name: "Semua" }, en: { name: "All" } }, ...CATEGORIES],
    []
  );

  if (params.slug) return <ProjectDetail slug={params.slug} />;

  const filtered = active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <div className="pt-32 md:pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeader
          eyebrow={t("Hasil Kerja", "Our Work")}
          title={t("Solusi nyata,", "Real solutions,")}
          accent={t("bukan mockup.", "not mockups.")}
          description={t("Setiap proyek punya cerita, masalah, dan solusi yang berbeda. Ini beberapa di antaranya.", "Every project has its own story, problem, and solution. Here are some of them.")}
        />

        <div className="mt-14 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.slug}
              onClick={() => setSearchParams(f.slug === "all" ? {} : { cat: f.slug })}
              className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
                active === f.slug
                  ? "bg-primary text-white border-primary"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
              }`}
            >
              {t(f.id.name, f.en?.name || f.id.name)}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link
                to={`/hasil-kerja/${p.slug}`}
                className="group block rounded-2xl overflow-hidden border border-border card-hover bg-secondary/30"
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
                    <span>{t(p.id.tag, p.en.tag)}</span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-medium tracking-tight group-hover:text-primary transition-colors">
                    {t(p.id.title, p.en.title)}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-muted-foreground text-center py-16">
              {t("Belum ada proyek di kategori ini.", "No projects in this category yet.")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectDetail({ slug }) {
  const { t } = useApp();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!project) {
    return (
      <div className="pt-40 pb-24 text-center">
        <p className="text-muted-foreground">{t("Proyek tidak ditemukan.", "Project not found.")}</p>
        <Link to="/hasil-kerja" className="text-primary mt-4 inline-block">
          {t("Kembali", "Back")}
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 md:pt-40 pb-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4" /> {t("Kembali", "Back")}
        </button>
        <div className="mt-8">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {t(project.id.tag, project.en.tag)} · {project.year}
          </p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-semibold tracking-tighter">
            {t(project.id.title, project.en.title)}
          </h1>
        </div>
        <div className="mt-10 rounded-2xl overflow-hidden border border-border">
          <img src={project.image} alt={t(project.id.title, project.en.title)} className="w-full aspect-[16/9] object-cover" />
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{t("Klien", "Client")}</p>
            <p className="mt-2 font-display text-xl">{project.client}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{t("Masalah", "Problem")}</p>
            <p className="mt-2">{t(project.problem.id, project.problem.en)}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{t("Solusi", "Solution")}</p>
            <p className="mt-2">{t(project.solution.id, project.solution.en)}</p>
          </div>
        </div>

        <div className="mt-14">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">{t("Fitur", "Features")}</p>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {project.features.map((f, idx) => (
              <li key={idx} className="rounded-xl border border-border px-4 py-3 text-sm flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" /> {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 rounded-3xl border border-border p-8 md:p-12 bg-secondary/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-4xl font-medium tracking-tight">
              {t("Mau hasil serupa untuk bisnismu?", "Want a similar result for your business?")}
            </h3>
          </div>
          <Link to="/mulai-proyek">
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-white h-12 px-6">
              {t("Mulai Proyek", "Start Project")} <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
