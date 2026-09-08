import styles from "./trust-marquee.module.css";

const messages = ["Thoughtfully Sourced", "Crafted for Daily Rituals", "Small-Batch Blends", "Made With Care"];

function MarqueeItems() {
  return <>{messages.map((message) => <span key={message}>{message}<b aria-hidden="true">•</b></span>)}</>;
}

export function TrustMarquee() {
  return <section className={styles.strip} aria-label="Brand values"><div className={styles.track}><div className={styles.group}><MarqueeItems /></div><div className={styles.group} aria-hidden="true"><MarqueeItems /></div></div></section>;
}
