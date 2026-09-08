export type VideoReview = {
  title: string;
  name: string;
  quote: string;
  /** Reserved for a future local review video. Intentionally null during layout work. */
  videoSrc: string | null;
  tone: "sky" | "oat" | "sage";
};

export const videoReviews: ReadonlyArray<VideoReview> = [
  {
    title: "A Bright Morning Ritual",
    name: "Maya S.",
    quote: "A calm start with a blend that makes even ordinary mornings feel a little more intentional.",
    videoSrc: null,
    tone: "sky",
  },
  {
    title: "Tea Time Made Special",
    name: "Emma R.",
    quote: "The simple ritual of steeping a cup has become my favorite way to pause between busy moments.",
    videoSrc: null,
    tone: "oat",
  },
  {
    title: "My Daily Cup",
    name: "Olivia M.",
    quote: "Comforting, considered, and easy to return to every day. It is the cup I keep reaching for.",
    videoSrc: null,
    tone: "sage",
  },
];
