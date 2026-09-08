import { NewsletterForm } from "./newsletter-form";
import styles from "./footer.module.css";

const navigation = [
  { title: "Learn", links: ["Our Ritual", "Tea Journal", "Sourcing Notes"] },
  { title: "Shop", links: ["Tea Blends", "Wellness Favourites", "Gift Rituals", "Tea Tools"] },
  { title: "Support", links: ["Delivery", "Returns", "Help Centre", "Contact"] },
  { title: "My Account", links: ["Sign in", "Orders"] },
];

function SocialIcon({ name }: { name: "Instagram" | "Facebook" | "X" | "YouTube" | "LinkedIn" }) {
  const paths = {
    Instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" /></>,
    Facebook: <path d="M14 21v-8h3l.5-3H14V8.1c0-.9.3-1.6 1.7-1.6H18V3.8c-.4-.1-1.4-.2-2.4-.2-2.4 0-4.1 1.5-4.1 4.2V10H9v3h2.5v8H14Z" fill="currentColor" stroke="none" />,
    X: <path d="M5 4l14 16M19 4 5 20" />,
    YouTube: <><path d="M21 12s0-3.2-.4-4.3c-.2-.6-.7-1.1-1.3-1.3C18.2 6 12 6 12 6s-6.2 0-7.3.4c-.6.2-1.1.7-1.3 1.3C3 8.8 3 12 3 12s0 3.2.4 4.3c.2.6.7 1.1 1.3 1.3C5.8 18 12 18 12 18s6.2 0 7.3-.4c.6-.2 1.1-.7 1.3-1.3.4-1.1.4-4.3.4-4.3Z" /><path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" /></>,
    LinkedIn: <><rect x="4" y="9" width="3" height="11" /><circle cx="5.5" cy="5" r="1.5" fill="currentColor" stroke="none" /><path d="M10 20v-6.2c0-3.6 6-3.9 6 0V20M16 14v6" /></>,
  };
  return <a href="#footer" aria-label={name}><svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg></a>;
}

export function Footer() {
  return <footer id="footer" className={styles.footer}>
    <div className={styles.top}>
      <nav className={styles.navigation} aria-label="Footer navigation">{navigation.map((column) => <section key={column.title}><h2>{column.title}</h2><ul>{column.links.map((link) => <li key={link}><a href="#footer">{link}</a></li>)}</ul></section>)}</nav>
      <div className={styles.newsletter}><NewsletterForm /></div>
    </div>
    <div className={styles.artPlaceholder} aria-hidden="true"><span>Decorative art coming soon</span><i /><i /><i /></div>
    <div className={styles.bottom}>
      <p className={styles.legal}><a href="#footer">Privacy Policy</a><span aria-hidden="true">|</span><a href="#footer">Terms</a></p>
      <div className={styles.social}><p>Share a little tea love</p><div><SocialIcon name="Instagram" /><SocialIcon name="Facebook" /><SocialIcon name="X" /><SocialIcon name="YouTube" /><SocialIcon name="LinkedIn" /></div></div>
    </div>
  </footer>;
}
