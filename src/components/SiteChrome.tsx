import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { site } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/media", label: "Media" },
  { to: "/events", label: "Upcoming Events" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="ACES Dance Academy logo" className="h-12 w-12 rounded-full ring-2 ring-primary" />
          <span className="font-display text-base uppercase leading-tight tracking-wide sm:text-xl">ACES <span className="text-gradient">Dance Academy</span></span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-sm font-semibold text-primary" }} activeOptions={{ exact: true }}>{n.label}</Link>
          ))}
          <a href="#register" className="btn-hero !px-5 !py-2 text-sm">Register</a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-border px-5 py-5 md:hidden">
          {nav.map((n) => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-semibold">{n.label}</Link>)}
          <a href="#register" onClick={() => setOpen(false)} className="btn-hero justify-center">Register</a>
        </nav>
      )}
    </header>
  );
}

export function RegisterBand() {
  return (
    <section id="register" className="mx-auto my-20 max-w-6xl px-5">
      <div className="card-stage relative overflow-hidden p-10 text-center md:p-16">
        <div className="absolute inset-0 -z-10 opacity-40" style={{ background: "var(--gradient-primary)" }} />
        <h2 className="text-5xl md:text-7xl">Embrace your <span className="text-accent">inner dancer</span></h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">Classes for kids, teens and adults. Reach out to register or ask about our classes.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`tel:${site.phones[0].replace("-", "")}`} className="btn-hero"><Phone size={18} /> Call {site.phones[0]}</a>
          <a href={`mailto:${site.email}?subject=Registration`} className="btn-ghost"><Mail size={18} /> Email us</a>
          <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-ghost"><Instagram size={18} /> Message on Instagram</a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="h-14 w-14 rounded-full" />
          <p className="text-sm text-muted-foreground">{site.tagline}</p>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> {site.address}</p>
          <p className="flex items-center gap-2"><Phone size={16} className="text-primary" /> {site.phones.join(" / ")}</p>
          <p className="flex items-center gap-2"><Mail size={16} className="text-primary" /> {site.email}</p>
        </div>
        <div className="flex gap-3 md:justify-end">
          <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="btn-ghost !p-3"><Instagram /></a>
          <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="btn-ghost !p-3"><Facebook /></a>
        </div>
      </div>
      <p className="pb-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} ACES Dance Academy · Port of Spain, Trinidad</p>
    </footer>
  );
}
