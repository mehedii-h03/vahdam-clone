import { videoReviews } from "@/data/video-reviews";
import { VideoReviewCard } from "./video-review-card";
import styles from "./video-review-section.module.css";

export function VideoReviewSection() {
  return (
    <section id="video-reviews" className={styles.section} aria-labelledby="video-review-heading">
      <div className={styles.intro}>
        <p className="type-overline">Loved by our community</p>
        <h2 id="video-review-heading">Thousands of Happy Tea Lovers</h2>
      </div>
      <div className={styles.grid}>
        {videoReviews.map((review) => <VideoReviewCard key={review.title} review={review} />)}
      </div>
    </section>
  );
}
