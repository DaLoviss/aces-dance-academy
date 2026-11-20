import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";
import a from "@/assets/stage-group.jpg.asset.json";
import b from "@/assets/showcase.jpg.asset.json";
import c from "@/assets/stage-blue.jpg.asset.json";
import d from "@/assets/solo.jpg.asset.json";
import e from "@/assets/ensemble.jpg.asset.json";
import f from "@/assets/adult-modern.jpg.asset.json";
import g from "@/assets/schedule.jpg.asset.json";
import { pageHead, site } from "@/lib/site";

export const Route = createFileRoute("/media")({
  head: () => pageHead("Media Gallery", "Photos of ACES Dance Academy dancers on stage, in class and at showcases. Follow us on Instagram and Facebook for more."),
  component: Media,
});

const photos = [[a, "Group performance"], [f, "Adult modern class"], [b, "Showcase"], [c, "Under the lights"], [e, "Ensemble on stage"], [d, "Solo moment"], [g, "Our class schedule"]] as const;

function Media() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <h1 className="text-6xl md:text-8xl">Our <span className="text-gradient">dancers</span></h1>
      <p className="mt-4 max-w-xl text-muted-foreground">Moments from the studio and the stage. See the latest videos and reels on our social pages.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-hero"><Instagram size={18} /> @acesdanceacademy</a>
        <a href={site.facebook} target="_blank" rel="noreferrer" className="btn-ghost"><Facebook size={18} /> Facebook</a>
      </div>
      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map(([p, alt]) => (
          <figure key={alt} className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-border">
            <img src={p.url} alt={alt} loading="lazy" className="w-full transition-transform duration-500 group-hover:scale-105" />
          </figure>
        ))}
      </div>
    </section>
  );
}
