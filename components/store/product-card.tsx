import type { Product } from "@/data/products";
import styles from "./product-card.module.css";

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imagePlaceholder} aria-label={`${product.name} product image placeholder`}>
        <div className={styles.pouchShape} aria-hidden="true"><span>Product image<br />coming soon</span></div>
      </div>
      <div className={styles.rating} aria-label={`${product.rating} out of 5 stars from ${product.reviews} reviews`}>
        <span aria-hidden="true">★★★★★</span><span>{product.reviews} reviews</span>
      </div>
      <h3>{product.name}</h3>
      <p className={styles.format}>{product.format}</p>
      <p className={styles.pricing}>
        <span className={styles.price}>{product.price}</span>
        <s>{product.compareAtPrice}</s>
        <span className={styles.sale}>{product.sale}</span>
      </p>
      <button className={styles.addButton} type="button" disabled={!product.available} onClick={() => onAddToCart(product)}>
        {product.available ? "Add to Cart" : "Unavailable"}
      </button>
    </article>
  );
}
