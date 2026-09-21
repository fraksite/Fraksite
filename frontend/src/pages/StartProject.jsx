import { useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { CATEGORIES, PRICING, CONTACT } from "../data/content";
import { useApp } from "../contexts/AppContext";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { toast } from "sonner";

export default function StartProject() {
  const { t, lang } = useApp();
  const [form, setForm] = useState({
    name: "",
    business: "",
    type: "",
    features: "",
    budget: "",
    launch: "",
    whatsapp: "",
    email: "",
    story: "",
  });

  const set = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target?.value ?? e }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.whatsapp || !form.story) {
      toast.error(t("Mohon lengkapi Nama, WhatsApp, dan Ceritakan kebutuhan.", "Please fill in Name, WhatsApp, and Your Story."));
      return;
    }
    const L = lang === "id";
    const text = `${L ? "Halo Fraksite, saya mau mulai proyek." : "Hi Fraksite, I'd like to start a project."}

*${L ? "Nama" : "Name"}:* ${form.name}
*${L ? "Bisnis" : "Business"}:* ${form.business || "-"}
*${L ? "Jenis Bisnis" : "Business Type"}:* ${form.type || "-"}
*${L ? "Website yang Dibutuhkan" : "Website Needed"}:* ${form.type || "-"}
*${L ? "Fitur yang Dibutuhkan" : "Required Features"}:* ${form.features || "-"}
*${L ? "Budget" : "Budget"}:* ${form.budget || "-"}
*${L ? "Target Launch" : "Target Launch"}:* ${form.launch || "-"}
*Email:* ${form.email || "-"}
*WhatsApp:* ${form.whatsapp}

*${L ? "Cerita" : "Story"}:*
${form.story}`;
    const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    toast.success(t("Membuka WhatsApp… kirim pesannya ya!", "Opening WhatsApp… please send the message!"));
  };

  const budgets = [
    { v: "<5jt", l: t("< Rp 5 juta", "< Rp 5M") },
    { v: "5-10jt", l: "Rp 5–10 juta" },
    { v: "10-20jt", l: "Rp 10–20 juta" },
    { v: "20-50jt", l: "Rp 20–50 juta" },
    { v: ">50jt", l: t("> Rp 50 juta", "> Rp 50M") },
  ];

  const launches = [
    { v: "asap", l: t("Secepatnya", "ASAP") },
    { v: "1m", l: t("Dalam 1 bulan", "Within 1 month") },
    { v: "3m", l: t("Dalam 3 bulan", "Within 3 months") },
    { v: "flex", l: t("Fleksibel", "Flexible") },
  ];

  return (
    <div className="pt-32 md:pt-40 pb-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <SectionHeader
          eyebrow={t("Mulai Sekarang", "Start Now")}
          title={t("Ceritakan idemu.", "Tell us your idea.")}
          accent={t("Kami balas cepat.", "We reply fast.")}
          description={t("Isi form di bawah — data akan kami kirim langsung ke WhatsApp untuk diskusi lanjut.", "Fill in the form below — we'll open a WhatsApp thread for follow-up.")}
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Reveal>
              <form onSubmit={submit} className="rounded-2xl border border-border p-6 md:p-10 bg-secondary/20 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label={t("Nama Lengkap *", "Full Name *")}>
                    <Input value={form.name} onChange={set("name")} placeholder={t("Rangga Wijaya", "Rangga Wijaya")} required />
                  </Field>
                  <Field label={t("Nama Bisnis", "Business Name")}>
                    <Input value={form.business} onChange={set("business")} placeholder="UrbanWear ID" />
                  </Field>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label={t("Jenis Website yang Dibutuhkan", "Website Type Needed")}>
                    <Select value={form.type} onValueChange={set("type")}>
                      <SelectTrigger><SelectValue placeholder={t("Pilih kategori", "Choose category")} /></SelectTrigger>
                      <SelectContent>
                        {CATEGORIES.map((c) => (
                          <SelectItem key={c.slug} value={t(c.id.name, c.en.name)}>{t(c.id.name, c.en.name)}</SelectItem>
                        ))}
                        <SelectItem value={t("Belum yakin", "Not sure yet")}>{t("Belum yakin", "Not sure yet")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label={t("Budget", "Budget")}>
                    <Select value={form.budget} onValueChange={set("budget")}>
                      <SelectTrigger><SelectValue placeholder={t("Pilih range", "Choose range")} /></SelectTrigger>
                      <SelectContent>
                        {budgets.map((b) => <SelectItem key={b.v} value={b.l}>{b.l}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </Field>
                </div>

                <Field label={t("Fitur yang Dibutuhkan", "Required Features")}>
                  <Input value={form.features} onChange={set("features")} placeholder={t("Contoh: katalog, keranjang, payment gateway", "e.g. catalog, cart, payment gateway")} />
                </Field>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label={t("Target Launch", "Target Launch")}>
                    <Select value={form.launch} onValueChange={set("launch")}>
                      <SelectTrigger><SelectValue placeholder={t("Kapan mau launch?", "When to launch?")} /></SelectTrigger>
                      <SelectContent>
                        {launches.map((b) => <SelectItem key={b.v} value={b.l}>{b.l}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label={t("WhatsApp *", "WhatsApp *")}>
                    <Input value={form.whatsapp} onChange={set("whatsapp")} placeholder="0812xxxxxxx" required />
                  </Field>
                </div>

                <Field label={t("Email", "Email")}>
                  <Input type="email" value={form.email} onChange={set("email")} placeholder="you@business.com" />
                </Field>

                <Field label={t("Ceritakan kebutuhan kamu *", "Tell us your needs *")}>
                  <Textarea rows={5} value={form.story} onChange={set("story")} placeholder={t("Bisnis kamu tentang apa, siapa targetnya, dan apa harapan dari websitenya?", "What is your business, who is your target, and what do you expect from the site?")} required />
                </Field>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button
                    type="submit"
                    className="rounded-full bg-primary hover:bg-primary/90 text-white h-12 px-6 font-medium group shadow-glow"
                  >
                    {t("Kirim via WhatsApp", "Send via WhatsApp")}
                    <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    {t("Data hanya dipakai untuk membalas permintaanmu.", "Data used only to reply to your request.")}
                  </p>
                </div>
              </form>
            </Reveal>
          </div>

          <div className="space-y-5">
            <Reveal delay={100}>
              <div className="rounded-2xl border border-border p-6">
                <h3 className="font-display text-lg font-medium">{t("Kontak Langsung", "Direct Contact")}</h3>
                <div className="mt-4 space-y-3">
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-sm hover:text-primary"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                  <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-sm hover:text-primary">
                    <span className="w-4 h-4 inline-flex items-center justify-center">@</span> {CONTACT.email}
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="rounded-2xl border border-border p-6 bg-secondary/40">
                <h3 className="font-display text-lg font-medium">{t("Ringkasan Paket", "Package Recap")}</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {PRICING.slice(0, 4).map((p) => (
                    <li key={p.slug} className="flex items-center justify-between">
                      <span>{t(p.id.name, p.en.name)}</span>
                      <span className="text-muted-foreground">Rp {p.price}{t(p.unit, p.unitEn)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="space-y-2">
      <Label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}
