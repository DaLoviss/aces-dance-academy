export const site = {
  name: "ACES Dance Academy",
  tagline: "We help persons realize they can dance… and dancers realize their potential.",
  address: "#1 Longden Street, Port of Spain",
  phones: ["276-3422", "292-0912"] as const,
  email: "acesdanceacademy@gmail.com",
  instagram: "https://www.instagram.com/acesdanceacademy",
  facebook: "https://www.facebook.com/acesdanceacademy",
};

export const schedule = [
  { day: "Monday", classes: [["3:45 – 4:30 pm", "Primary Modern"], ["4:30 – 5:30 pm", "Junior Modern"], ["5:30 – 7:00 pm", "Senior Modern"]] },
  { day: "Tuesday", classes: [["5:00 – 6:30 pm", "Flexibility & Tumbling"]] },
  { day: "Wednesday", classes: [["3:30 – 4:30 pm", "Kids Beginners Ballet"], ["4:30 – 5:30 pm", "Upper Primary Modern"], ["5:30 – 6:30 pm", "Senior / Junior Ballet"]] },
  { day: "Thursday", classes: [["5:30 – 6:30 pm", "Adult Modern"]] },
  { day: "Friday", classes: [["5:00 – 6:00 pm", "Senior Contemporary"]] },
  { day: "Saturday", classes: [["1:00 – 2:00 pm", "Kids & Teens Hip Hop"]] },
] as const;

export function pageHead(title: string, description: string) {
  const t = `${title} | ACES Dance Academy`;
  return {
    meta: [
      { title: t },
      { name: "description", content: description },
      { property: "og:title", content: t },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
