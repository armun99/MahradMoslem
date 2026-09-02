import { ArrowRight, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/content/portfolio";
import { usePortfolio } from "@/context/locale-context";

export function ContactSection() {
  const { t, arrowClass } = usePortfolio();

  return (
    <section className="border-t border-border bg-background py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.24em] text-primary">{t.contact.eyebrow}</p>
          <h2 className="mt-4 font-display text-5xl font-bold uppercase leading-[.88] text-foreground sm:text-7xl">
            {t.contact.title}
          </h2>
          <p className="mt-7 max-w-lg leading-7 text-muted-foreground">{t.contact.intro}</p>
          <div className="mt-10 space-y-3 text-sm text-muted-foreground">
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 transition-colors hover:text-primary">
              <Mail className="size-4" /> {contactInfo.email}
            </a>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 transition-colors hover:text-primary">
              <Phone className="size-4" /> {contactInfo.phone}
            </a>
            <a href={contactInfo.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-primary">
              <Instagram className="size-4" /> {contactInfo.instagramHandle}
            </a>
          </div>
        </div>
        <form className="grid gap-5 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
          <label className="text-xs uppercase tracking-widest text-foreground">
            {t.contact.form.name}
            <input className="mt-2 h-12 min-h-12 w-full border-b border-border bg-transparent px-0 text-base text-foreground outline-none transition-colors focus:border-primary" required />
          </label>
          <label className="text-xs uppercase tracking-widest text-foreground">
            {t.contact.form.email}
            <input type="email" className="mt-2 h-12 w-full border-b border-border bg-transparent px-0 text-base text-foreground outline-none focus:border-primary" required />
          </label>
          <label className="text-xs uppercase tracking-widest text-foreground">
            {t.contact.form.phone}
            <input type="tel" className="mt-2 h-12 w-full border-b border-border bg-transparent px-0 text-base text-foreground outline-none focus:border-primary" />
          </label>
          <label className="text-xs uppercase tracking-widest text-foreground">
            {t.contact.form.experience}
            <select className="mt-2 h-12 w-full border-b border-border bg-transparent px-0 text-base text-foreground outline-none focus:border-primary">
              {t.contact.form.experienceOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </label>
          <label className="text-xs uppercase tracking-widest text-foreground sm:col-span-2">
            {t.contact.form.message}
            <textarea rows={4} className="mt-3 w-full resize-none border-b border-border bg-transparent py-3 text-base text-foreground outline-none focus:border-primary" required />
          </label>
          <Button variant="ember" size="lg" className="mt-3 sm:col-span-2 sm:justify-self-start">
            {t.cta.getInTouch} <ArrowRight className={arrowClass} />
          </Button>
        </form>
      </div>
    </section>
  );
}
