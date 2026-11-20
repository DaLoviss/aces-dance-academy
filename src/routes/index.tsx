import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import hero from "@/assets/stage-blue.jpg.asset.json";
import adult from "@/assets/adult-modern.jpg.asset.json";
import showcase from "@/assets/showcase.jpg.asset.json";
import blue from "@/assets/stage-group.jpg.asset.json";
import { pageHead, schedule } from "@/lib/site";
import { RegisterBand } from "@/components/SiteChrome";

export const Route = createFileRoute("/")({
  head: () => pageHead("Dance Classes in Port of Spain", "ACES Dance Academy offers modern, ballet, contemporary, hip hop and tumbling classes for kids, teens and adults in Port of Spain."),
  component: Index,
});

const styles = ["Modern", "Ballet", "Contemporary", "Hip Hop", "Flexibility & Tumbling", "Tap (coming soon)"];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img src={hero.url} alt="ACES dancers performing on stage" className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative mx-auto flex min-h-[640px] max-w-6xl flex-col justify-end px-5 pb-20">
          <p className="animate-rise mb-4 flex items-center gap-2 font-semibold text-accent"><Sparkles size={18} /> Port of Spain · All ages</p>
          <h1 className="animate-rise text-6xl md:text-9xl">You <span className="text-gradient">can</span> dance.</h1>
          <p className="animate-rise mt-6 max-w-xl text-lg text-muted-foreground">At ACES we help persons realize they can dance… and help our dancers realize their potential.</p>
          <div className="animate-rise mt-8 flex flex-wrap gap-3">
            <a href="#register" className="btn-hero">Register now <ArrowRight size={18} /></a>
            <Link to="/media" className="btn-ghost">See our dancers</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-wrap gap-3">
          {styles.map((s) => <span key={s} className="rounded-full border border-border px-5 py-2 font-display text-lg uppercase">{s}</span>)}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-3">
        {[[showcase.url, "Showcase talent", "Our dancers take the stage in productions and showcases."], [adult.url, "Adults welcome", "It's never too late — join our Adult Modern class."], [blue.url, "Competition team", "Ambitious dancers train and compete together."]].map(([img, t, d]) => (
          <div key={t} className="card-stage overflow-hidden">
            <img src={img} alt={t} className="h-56 w-full object-cover" loading="lazy" />
            <div className="p-6"><h3 className="text-2xl">{t}</h3><p className="mt-2 text-muted-foreground">{d}</p></div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-5xl md:text-6xl">Class <span className="text-gradient">schedule</span></h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {schedule.map((d) => (
            <div key={d.day} className="card-stage p-6">
              <h3 className="text-2xl text-accent">{d.day}</h3>
              <ul className="mt-3 space-y-2">
                {d.classes.map(([time, name]) => <li key={name} className="flex justify-between gap-4 border-b border-border pb-2 last:border-0"><span className="font-semibold">{name}</span><span className="text-sm text-muted-foreground">{time}</span></li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <RegisterBand />
    </>
  );
}
