import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { FAQ_GROUPS, CONTACT } from "../data/content";
import { useApp } from "../contexts/AppContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { MessageCircle } from "lucide-react";

export default function FAQPage() {
  const { t } = useApp();
  return (
    <div className="pt-32 md:pt-40 pb-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <SectionHeader
          eyebrow="FAQ"
          title={t("Semua pertanyaan,", "Every question,")}
          accent={t("satu halaman.", "one page.")}
        />

        <div className="mt-14 space-y-14">
          {FAQ_GROUPS.map((g, gi) => (
            <Reveal key={gi} delay={gi * 60}>
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-6">
                  {t(g.group.id, g.group.en)}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {g.items.map((item, i) => (
                    <AccordionItem key={i} value={`${gi}-${i}`} className="border-border">
                      <AccordionTrigger className="text-left font-display text-lg font-medium hover:no-underline hover:text-primary">
                        {t(item.q.id, item.q.en)}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {t(item.a.id, item.a.en)}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-medium">{t("Masih ada pertanyaan?", "Still have questions?")}</h3>
            <p className="text-sm text-muted-foreground mt-1">{t("Chat langsung tim kami — respon di bawah 24 jam.", "Chat our team — reply within 24 hours.")}</p>
          </div>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(t("Halo Fraksite, saya mau tanya-tanya soal website.", "Hi Fraksite, I'd like to ask about a website."))}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary/90 text-white px-5 py-3 text-sm font-medium"
          >
            <MessageCircle className="w-4 h-4" /> {t("Chat WhatsApp", "Chat WhatsApp")}
          </a>
        </div>
      </div>
    </div>
  );
}
