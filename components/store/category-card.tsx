import type { Category } from "@/data/categories";
import styles from "./category-card.module.css";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <a className={styles.card} href="/tea-shop#shop-by-category" aria-label={`${category.name} — category preview`}>
      <div className={`${styles.arch} ${styles[category.tone]}`} aria-hidden="true">
        <span>Image coming soon</span>
      </div>
      <span className={styles.label}>{category.name}</span>
    </a>
  );
}
