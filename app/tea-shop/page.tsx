import type { Metadata } from "next";
import { TeaHeader } from "@/components/layout/tea-header";
import { TeaMenu } from "@/components/layout/tea-menu";
import { Footer } from "@/components/layout/footer";
import { TrustMarquee } from "@/components/layout/trust-marquee";
import { CategoryCard } from "@/components/store/category-card";
import { ProductCarousel } from "@/components/store/product-carousel";
import { ImpactSection } from "@/components/store/impact-section";
import { TestimonialSection } from "@/components/store/testimonial-section";
import { VideoReviewSection } from "@/components/store/video-review-section";
import { categories } from "@/data/categories";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: "Morrow Tea House — A moment for yourself" },
  description: "A tea and wellness homepage concept. Discover a slower daily ritual with Morrow Tea House.",
  alternates: { canonical: "/tea-shop" },
  openGraph: { title: "Morrow Tea House", description: "A moment for yourself. An original tea and wellness concept.", url: "/tea-shop" },
  twitter: { title: "Morrow Tea House", description: "A moment for yourself. An original tea and wellness concept." },
};

export default function TeaShopPage() {
  return <div className={styles.home}>
    <TeaHeader />
    <main id="main-content" tabIndex={-1}>
      <section className={styles.hero} aria-labelledby="hero-title">
        {/* Reserved full-bleed media layer. Replace with next/image when assets are approved. */}
        <div className={styles.mediaPlaceholder} aria-hidden="true" />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>The art of slowing down</p>
          <h1 id="hero-title">A moment<br className={styles.mobileBreak} /> for yourself.</h1>
          <p className={styles.description}>Put the kettle on. Let the everyday wait.<br />Find a little stillness, one cup at a time.</p>
          <TeaMenu hero />
        </div>
        <div className={styles.heroBottom}><span>Made for your daily ritual</span><span className={styles.assetNote}>Steep. Sip. Begin again.</span><span className={styles.chapter}>01 / THE QUIET MOMENT</span></div>
      </section>
      <section id="shop-by-category" className={styles.categoriesSection} aria-labelledby="category-heading">
        <div className={styles.categoryIntro}>
          <p className="type-overline">Something for everyone</p>
          <h2 id="category-heading">Shop by Category</h2>
        </div>
        <div className={styles.categoryGrid}>
          {categories.map((category) => <CategoryCard key={category.name} category={category} />)}
        </div>
      </section>
      <ProductCarousel />
      <TestimonialSection />
      <ImpactSection />
      <VideoReviewSection />
    </main>
    <TrustMarquee />
    <Footer />
  </div>;
}
