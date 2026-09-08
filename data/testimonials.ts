export type Testimonial = {
  name: string;
  quote: string;
  rating: number;
  /** Reserved for a future local portrait. Intentionally null during layout work. */
  image: string | null;
  tone: "sage" | "oat" | "mist";
};

export const testimonials: ReadonlyArray<Testimonial> = [
  {
    name: "Amelia R.",
    quote: "My evening cup has become the gentlest way to close out a busy day.",
    rating: 5,
    image: null,
    tone: "sage",
  },
  {
    name: "Noah K.",
    quote: "Thoughtful blends, beautiful ritual, and a little pause I look forward to every morning.",
    rating: 5,
    image: null,
    tone: "oat",
  },
  {
    name: "Sophia M.",
    quote: "Every cup feels warm, balanced, and made for slowing the whole day down.",
    rating: 5,
    image: null,
    tone: "mist",
  },
];
