import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "./testimonial-card";
import styles from "./testimonial-section.module.css";

export function TestimonialSection() {
  return (
    <section id="testimonials" className={styles.section} aria-labelledby="testimonial-heading">
      <div className={styles.intro}>
        <p className="type-overline">Loved by our community</p>
        <h2 id="testimonial-heading">Trusted by Tea Lovers</h2>
      </div>
      <div className={styles.grid}>
        {testimonials.map((testimonial) => <TestimonialCard key={testimonial.name} testimonial={testimonial} />)}
      </div>
      <div className={styles.divider} aria-hidden="true" />
    </section>
  );
}
