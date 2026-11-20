import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Instagram } from "lucide-react";
import auditions from "@/assets/auditions.jpg.asset.json";
import { pageHead, site } from "@/lib/site";
import { RegisterBand } from "@/components/SiteChrome";

export const Route = createFileRoute("/events")({
  head: () => pageHead("Upcoming Events", "Auditions, showcases and new classes at ACES Dance Academy in Port of Spain."),
  component: Events,
});

const events = [
  { date: "Coming soon", title: "Tap classes", desc: "A brand-new Tap class is joining the schedule. Register your interest today." },
  { date: "Ongoing", title: "Weekly classes", desc: "Modern, ballet, contemporary, hip hop and tumbling — Monday to Saturday." },
];

function Events() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h1 className="text-6xl md:text-8xl">Upcoming <span className="text-gradient">events</span></h1>
        <div className="mt-12 grid items-start gap-8 md:grid-cols-[1fr_1.2fr]">
          <img src={auditions.url} alt="Competition team auditions poster" className="rounded-2xl border border-border shadow-[var(--shadow-glow)]" />
          <div className="space-y-5">
            {events.map((e) => (
              <div key={e.title} className="card-stage p-7">
                <p className="flex items-center gap-2 text-sm font-semibold text-accent"><CalendarDays size={16} /> {e.date}</p>
                <h2 className="mt-2 text-3xl">{e.title}</h2>
                <p className="mt-2 text-muted-foreground">{e.desc}</p>
              </div>
            ))}
            <div className="card-stage p-7">
              <p className="text-sm font-semibold text-muted-foreground">Recent · Saturday 19th September</p>
              <h2 className="mt-2 text-3xl">Competition team auditions</h2>
              <p className="mt-2 text-muted-foreground">Modern/Contemporary 9am–3pm, Hip Hop 3pm–8pm, ages 8 and older. Watch our socials for the next round.</p>
            </div>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-ghost"><Instagram size={18} /> Get event news on Instagram</a>
          </div>
        </div>
      </section>
      <RegisterBand />
    </>
  );
}
