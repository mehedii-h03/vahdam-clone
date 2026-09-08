export type ImpactIcon = "community" | "packaging" | "purpose";

export type ImpactPoint = {
  icon: ImpactIcon;
  title: string;
  description: string;
};

export const impactPoints: ReadonlyArray<ImpactPoint> = [
  {
    icon: "community",
    title: "Supporting Tea Communities",
    description: "We are designing each future partnership to support the people and places behind every harvest.",
  },
  {
    icon: "packaging",
    title: "Lower-Impact Packaging",
    description: "Our packaging choices will prioritize thoughtful materials and less unnecessary waste wherever possible.",
  },
  {
    icon: "purpose",
    title: "Made With Purpose",
    description: "From sourcing to steeping, each detail is being shaped around a more considered daily ritual.",
  },
];

export const partnerMarks = ["Partner mark", "Climate mark", "Packaging mark", "Impact mark"] as const;
