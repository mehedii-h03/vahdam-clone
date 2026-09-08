"use client";

import { useRef, useState } from "react";
import { ProductCard } from "@/components/store/product-card";
import { productsByTab, productTabs, type ProductTab } from "@/data/products";
import styles from "./product-carousel.module.css";

export function ProductCarousel() {
  const [activeTab, setActiveTab] = useState<ProductTab>("best-sellers");
  const [cartCount, setCartCount] = useState(0);
  const scroller = useRef<HTMLDivElement>(null);
  const products = productsByTab[activeTab];

  const move = (direction: -1 | 1) => {
    scroller.current?.scrollBy({ left: scroller.current.clientWidth * direction * 0.76, behavior: "smooth" });
  };
  const selectTab = (tab: ProductTab) => { setActiveTab(tab); requestAnimationFrame(() => scroller.current?.scrollTo({ left: 0, behavior: "auto" })); };
  const addToCart = () => setCartCount((count) => count + 1);

  return (
    <section id="shop-by-product" className={styles.section} aria-labelledby="product-heading">
      <div className={styles.intro}>
        <p className="type-overline">Discover your favorite</p>
        <h2 id="product-heading">Shop by Product</h2>
        <div className={styles.tabList} role="tablist" aria-label="Product collections">
          {productTabs.map((tab) => <button key={tab.id} id={`${tab.id}-tab`} className={styles.tab} type="button" role="tab" aria-selected={activeTab === tab.id} aria-controls={`${tab.id}-panel`} onClick={() => selectTab(tab.id)}>{tab.label}</button>)}
        </div>
      </div>
      <div className={styles.carousel}>
        <button className={`${styles.arrow} ${styles.previous}`} type="button" aria-label="Previous products" onClick={() => move(-1)}><span aria-hidden="true">‹</span></button>
        <div ref={scroller} id={`${activeTab}-panel`} className={styles.scroller} role="tabpanel" aria-labelledby={`${activeTab}-tab`} tabIndex={0}>
          {products.map((product) => <ProductCard key={product.id} product={product} onAddToCart={addToCart} />)}
        </div>
        <button className={`${styles.arrow} ${styles.next}`} type="button" aria-label="Next products" onClick={() => move(1)}><span aria-hidden="true">›</span></button>
      </div>
      <div className={styles.bottom}><a href="#shop-by-product">View All</a><p className={styles.cartCount} aria-live="polite">Cart preview: {cartCount} {cartCount === 1 ? "item" : "items"}</p></div>
    </section>
  );
}
