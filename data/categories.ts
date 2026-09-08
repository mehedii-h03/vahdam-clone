export type Category = {
  name: string;
  tone: "forest" | "warm";
};

export const categories: readonly Category[] = [
  { name: "Tea & Infusions", tone: "forest" },
  { name: "Wellness Coffee", tone: "warm" },
  { name: "Gift Sets", tone: "forest" },
];
