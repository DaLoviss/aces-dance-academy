import { createFileRoute } from "@tanstack/react-router";
import solo from "@/assets/solo.jpg.asset.json";
import logo from "@/assets/logo.png";
import { pageHead, site } from "@/lib/site";
import { RegisterBand } from "@/components/SiteChrome";

export const Route = createFileRoute("/about")({
  head: () => pageHead("About Us", "Learn about ACES Dance Academy, a dance school in Port of Spain helping people of all ages discover dance and reach their potential."),
  component: About,
});

function About() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
        <div>
          <img src={logo} alt="ACES Dance Academy logo" className="mb-6 h-24 w-24 rounded-full ring-4 ring-primary" />
          <h1 className="text-6xl md:text-8xl">About <span className="text-gradient">ACES</span></h1>
          <p className="mt-6 text-xl">{site.tagline}</p>
          <p className="mt-4 text-muted-foreground">Based at {site.address}, ACES Dance Academy is a home for first-timers and seasoned performers alike. From little ones in their first ballet class to adults rediscovering movement, and a competition team chasing the big stage — everyone has a place here.</p>
        </div>
        <img src={solo.url} alt="A dancer performing on stage" className="card-stage h-96 w-full object-cover" />
      </section>
      <section className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-3">
        {[["Believe", "Everyone can dance. We create a welcoming space to start."], ["Grow", "Structured classes in modern, ballet, contemporary, hip hop and more."], ["Shine", "Showcases and competitions let our dancers share their talent."]].map(([t, d]) => (
          <div key={t} className="card-stage p-8"><h2 className="text-4xl text-accent">{t}</h2><p className="mt-3 text-muted-foreground">{d}</p></div>
        ))}
      </section>
      <RegisterBand />
    </>
  );
}
