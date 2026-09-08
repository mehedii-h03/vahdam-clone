export type ProductTab = "best-sellers" | "website-exclusive";

export type Product = {
  id: string;
  name: string;
  format: string;
  price: string;
  compareAtPrice: string;
  sale: string;
  rating: number;
  reviews: number;
  available: boolean;
  /** Reserved for a future local product image. Intentionally null during layout work. */
  image: string | null;
};

export const productTabs: ReadonlyArray<{ id: ProductTab; label: string }> = [
  { id: "best-sellers", label: "Best Sellers" },
  { id: "website-exclusive", label: "Website Exclusive" },
];

export const productsByTab: Record<ProductTab, ReadonlyArray<Product>> = {
  "best-sellers": [
    { id: "misty-garden", name: "Misty Garden Green Tea", format: "Loose leaf | 50 cups", price: "Tk 1,900", compareAtPrice: "Tk 2,200", sale: "14% off", rating: 5, reviews: 86, available: true, image: null },
    { id: "spiced-sunset", name: "Spiced Sunset Chai", format: "Loose leaf | 40 cups", price: "Tk 2,250", compareAtPrice: "Tk 2,550", sale: "12% off", rating: 5, reviews: 142, available: true, image: null },
    { id: "highland-oolong", name: "Highland Oolong Tea", format: "Loose leaf | 45 cups", price: "Tk 2,400", compareAtPrice: "Tk 2,700", sale: "11% off", rating: 5, reviews: 74, available: true, image: null },
    { id: "golden-ginger", name: "Golden Ginger Infusion", format: "Caffeine free | 35 cups", price: "Tk 1,750", compareAtPrice: "Tk 2,050", sale: "15% off", rating: 5, reviews: 109, available: false, image: null },
    { id: "moonlit-earl", name: "Moonlit Earl Grey", format: "Loose leaf | 50 cups", price: "Tk 2,100", compareAtPrice: "Tk 2,350", sale: "10% off", rating: 5, reviews: 63, available: true, image: null },
    { id: "quiet-mint", name: "Quiet Mint Herbal Tea", format: "Caffeine free | 40 cups", price: "Tk 1,650", compareAtPrice: "Tk 1,900", sale: "13% off", rating: 5, reviews: 58, available: true, image: null },
  ],
  "website-exclusive": [
    { id: "first-light", name: "First Light Breakfast Tea", format: "Loose leaf | 45 cups", price: "Tk 2,300", compareAtPrice: "Tk 2,600", sale: "12% off", rating: 5, reviews: 31, available: true, image: null },
    { id: "rose-cardamom", name: "Rose Cardamom Black Tea", format: "Loose leaf | 40 cups", price: "Tk 2,450", compareAtPrice: "Tk 2,800", sale: "13% off", rating: 5, reviews: 47, available: true, image: null },
    { id: "after-rain", name: "After Rain White Tea", format: "Loose leaf | 35 cups", price: "Tk 2,700", compareAtPrice: "Tk 3,050", sale: "11% off", rating: 5, reviews: 26, available: false, image: null },
    { id: "orchard-rest", name: "Orchard Rest Fruit Tea", format: "Caffeine free | 40 cups", price: "Tk 1,800", compareAtPrice: "Tk 2,100", sale: "14% off", rating: 5, reviews: 54, available: true, image: null },
    { id: "calm-focus", name: "Calm Focus Green Tea", format: "Loose leaf | 50 cups", price: "Tk 2,150", compareAtPrice: "Tk 2,400", sale: "10% off", rating: 5, reviews: 39, available: true, image: null },
  ],
};
