import Reveal from "./Reveal";

export default function SectionHeader({ eyebrow, title, description, align = "left", accent }) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignCls} gap-4 max-w-3xl ${align === "center" ? "mx-auto" : ""}`}>
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">
            <span className="inline-block w-6 h-px bg-primary" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-[1.02]">
          {title}
          {accent && <span className="text-gradient-blue"> {accent}</span>}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
