import type { Testimonial } from "@/data/testimonials";
import styles from "./testimonial-card.module.css";

type TestimonialCardProps = { testimonial: Testimonial };

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className={styles.card}>
      <div className={`${styles.portrait} ${styles[testimonial.tone]}`} aria-label={`${testimonial.name} portrait placeholder`}>
        <span>Portrait<br />coming soon</span>
      </div>
      <p className={styles.rating} aria-label={`${testimonial.rating} out of 5 stars`}>
        <span aria-hidden="true">★★★★★</span>
      </p>
      <blockquote>“{testimonial.quote}”</blockquote>
      <p className={styles.name}>{testimonial.name}</p>
    </article>
  );
}
