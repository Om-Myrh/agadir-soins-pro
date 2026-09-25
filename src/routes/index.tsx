import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Syringe,
  Bandage,
  TestTube,
  Droplets,
  Stethoscope,
  HeartHandshake,
  HeartPulse,
  Activity,
  ShieldPlus,
  CircleDot,
  Plus,
  Award,
  CalendarCheck,
  Siren,
  Home,
  Banknote,
  FileText,
  Menu,
  X,
  Languages,
} from "lucide-react";

import { LanguageProvider, useLanguage } from "@/lib/language";
import {
  EMAIL,
  PHONE_DISPLAY_INTL,
  PHONE_TEL,
  WHATSAPP,
  content,
} from "@/lib/content";
import logo from "@/assets/logo-hanane-alaoui.svg";
import heroImage from "@/assets/hanane-portrait.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: content.fr.seo.title },
      { name: "description", content: content.fr.seo.description },
      { property: "og:title", content: content.fr.seo.title },
      { property: "og:description", content: content.fr.seo.description },
      { name: "twitter:title", content: content.fr.seo.title },
      { name: "twitter:description", content: content.fr.seo.description },
    ],
  }),
  component: () => (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  ),
});

const whyIcons = [Award, CalendarCheck, Siren, Home, ShieldCheck];

const serviceIcons = [
  Syringe,
  Bandage,
  TestTube,
  Droplets,
  Stethoscope,
  HeartPulse,
  HeartHandshake,
  ShieldPlus,
  ShieldCheck,
  Activity,
  CircleDot,
  Plus,
];

function CallButton({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a
      href={PHONE_TEL}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-urgent px-6 py-3.5 text-base font-semibold text-urgent-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110 ${className}`}
    >
      <Phone className="size-5 shrink-0" aria-hidden />
      <span>{label}</span>
    </a>
  );
}

function WhatsAppButton({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-whatsapp-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110 ${className}`}
    >
      <MessageCircle className="size-5 shrink-0" aria-hidden />
      <span>{label}</span>
    </a>
  );
}

function Header() {
  const { t, toggle, rtl } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#zone", label: t.nav.zone },
    { href: "#apropos", label: t.nav.about },
    { href: "#tarifs", label: t.nav.pricing },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt=""
            width={48}
            height={48}
            className="size-11 shrink-0 rounded-full object-cover object-top"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-bold text-primary-deep sm:text-lg">
              {t.brand}
            </span>
            <span className="block truncate text-xs text-muted-foreground sm:text-sm">
              {t.brandRole}
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition hover:bg-primary-soft hover:text-primary-deep"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={toggle}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-primary/30 px-3 py-2 text-sm font-semibold text-primary-deep transition hover:bg-primary-soft"
            aria-label={rtl ? "Passer en français" : "التبديل إلى العربية"}
          >
            <Languages className="size-4" aria-hidden />
            {t.langLabel}
          </button>

          <a
            href={PHONE_TEL}
            className="hidden shrink-0 items-center gap-2 rounded-full bg-urgent px-4 py-2.5 text-sm font-semibold text-urgent-foreground transition hover:brightness-110 sm:inline-flex"
          >
            <Phone className="size-4" aria-hidden />
            {t.callNow}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-primary-deep lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 text-base font-medium text-foreground/85 hover:bg-primary-soft"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className="soft-panel border-b border-border/60">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-sm font-semibold text-primary-deep">
            <Clock className="size-4" aria-hidden />
            {t.hero.badge}
          </span>
          <h1 className="mt-5 font-display text-3xl leading-tight font-bold text-primary-deep sm:text-4xl lg:text-5xl">
            {t.hero.h1}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            {t.hero.tagline}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CallButton label={t.hero.call} />
            <WhatsAppButton label={t.hero.whatsapp} />
          </div>
          <dl className="mt-9 grid grid-cols-3 gap-3 border-t border-border/70 pt-6">
            {t.hero.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-bold text-primary sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <img
            src={heroImage.url}
            alt={t.hero.imageAlt}
            width={1280}
            height={1600}
            className="aspect-4/5 w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
          />
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="font-display text-2xl font-bold text-primary-deep sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function Why() {
  const { t } = useLanguage();
  return (
    <section className="bg-background py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle title={t.why.title} subtitle={t.why.subtitle} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item, i) => {
            const Icon = whyIcons[i] ?? ShieldCheck;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-primary-deep">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { t } = useLanguage();
  return (
    <section id="services" className="scroll-mt-24 bg-primary-soft/50 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle title={t.services.title} subtitle={t.services.subtitle} />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, i) => {
            const Icon = serviceIcons[i] ?? Plus;
            return (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-border/80 bg-card p-4 shadow-[var(--shadow-card)]"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="min-w-0 pt-1.5 text-sm leading-snug font-medium text-foreground/90">
                  {item}
                </span>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 text-center text-sm text-muted-foreground">{t.services.note}</p>
      </div>
    </section>
  );
}

function Zone() {
  const { t } = useLanguage();
  return (
    <section id="zone" className="scroll-mt-24 bg-background py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle title={t.zone.title} subtitle={t.zone.subtitle} />
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-base leading-relaxed text-foreground/80">{t.zone.text}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {t.zone.areas.map((a) => (
                <li
                  key={a}
                  className="rounded-full border border-primary/25 bg-primary-soft px-3.5 py-1.5 text-sm font-medium text-primary-deep"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="zone-visual relative mx-auto w-full max-w-md">
            <div className="zone-orbit zone-orbit-1" />
            <div className="zone-orbit zone-orbit-2" />
            <div className="zone-orbit zone-orbit-3" />
            <div className="zone-center">
              <div className="zone-core">
                <div className="text-center">
                  <MapPin className="mx-auto size-6" aria-hidden />
                  <p className="mt-1 font-display text-lg font-bold">{t.zone.center}</p>
                </div>
              </div>
            </div>
            <span className="zone-badge">{t.zone.radius}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Availability() {
  const { t } = useLanguage();
  const icons = [CalendarCheck, Siren, Clock];
  return (
    <section className="bg-primary-deep py-14 text-primary-foreground sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">
          {t.availability.title}
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {t.availability.items.map((item, i) => {
            const Icon = icons[i] ?? Clock;
            return (
              <article key={item.title} className="rounded-2xl bg-primary-foreground/10 p-6">
                <Icon className="size-6" aria-hidden />
                <h3 className="mt-4 font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/85">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <CallButton label={t.hero.call} />
          <WhatsAppButton label={t.hero.whatsapp} />
        </div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useLanguage();
  return (
    <section id="apropos" className="scroll-mt-24 bg-background py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle title={t.about.title} />
        <div className="mt-8 space-y-5">
          {t.about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-base leading-relaxed text-foreground/80">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const { t } = useLanguage();
  const cards = [
    { icon: Banknote, title: t.pricing.cash, text: t.pricing.cashText },
    { icon: ShieldCheck, title: t.pricing.noInsurance, text: t.pricing.noInsuranceText },
    { icon: FileText, title: t.pricing.quote, text: t.pricing.quoteText },
  ];
  return (
    <section id="tarifs" className="scroll-mt-24 bg-primary-soft/50 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle title={t.pricing.title} />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <c.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-primary-deep">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useLanguage();
  const rows = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: PHONE_DISPLAY_INTL,
      href: PHONE_TEL,
    },
    { icon: MessageCircle, label: t.contact.whatsapp, value: PHONE_DISPLAY_INTL, href: WHATSAPP },
    { icon: Mail, label: t.contact.email, value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MapPin, label: t.contact.zone, value: t.contact.zoneValue },
    { icon: Clock, label: t.contact.availability, value: t.contact.availabilityValue },
  ];
  return (
    <section id="contact" className="scroll-mt-24 bg-background py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle title={t.contact.title} subtitle={t.contact.subtitle} />
        <ul className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
          {rows.map((r) => (
            <li key={r.label}>
              {r.href ? (
                <a
                  href={r.href}
                  target={r.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 transition hover:bg-primary-soft/60 sm:p-5"
                >
                  <r.icon className="size-5 shrink-0 text-primary" aria-hidden />
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">{r.label}</span>
                    <span className="block truncate font-semibold text-primary-deep">
                      {r.value}
                    </span>
                  </span>
                </a>
              ) : (
                <div className="flex items-center gap-4 p-4 sm:p-5">
                  <r.icon className="size-5 shrink-0 text-primary" aria-hidden />
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">{r.label}</span>
                    <span className="block font-semibold text-primary-deep">{r.value}</span>
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <CallButton label={t.hero.call} />
          <WhatsAppButton label={t.hero.whatsapp} />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border bg-primary-soft/60 pb-28 lg:pb-10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6">
        <img
          src={logo}
          alt=""
          width={56}
          height={56}
          className="mx-auto size-14 rounded-full object-cover object-top"
        />
        <p className="mt-4 font-display font-bold text-primary-deep">{t.footer.rights}</p>
        <p className="mt-2 text-sm text-muted-foreground">{t.footer.disclaimer}</p>
        <p className="mt-4 text-sm text-muted-foreground">
          {PHONE_DISPLAY_INTL} · {EMAIL}
        </p>
      </div>
    </footer>
  );
}

function MobileBar() {
  const { t } = useLanguage();
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
      <CallButton label={t.callNow} className="w-full px-3 py-3 text-sm" />
      <WhatsAppButton label={t.whatsapp} className="w-full px-3 py-3 text-sm" />
    </div>
  );
}

function Page() {
  const { t } = useLanguage();
  return (
    <div dir={t.dir} lang={t.htmlLang} className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Why />
        <Services />
        <Zone />
        <Availability />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
