import type { VideoReview } from "@/data/video-reviews";
import styles from "./video-review-card.module.css";

type VideoReviewCardProps = { review: VideoReview };

export function VideoReviewCard({ review }: VideoReviewCardProps) {
  return (
    <article className={styles.card}>
      <button className={`${styles.video} ${styles[review.tone]}`} type="button" aria-label={`Play placeholder for ${review.title}`}>
        <span className={styles.placeholder}>Video coming soon</span>
        <span className={styles.play} aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m9 7 8 5-8 5V7Z" /></svg></span>
      </button>
      <div className={styles.copy}>
        <h3>{review.title}</h3>
        <p className={styles.name}>{review.name}</p>
        <blockquote>“{review.quote}”</blockquote>
      </div>
    </article>
  );
}
