import { impactPoints, partnerMarks, type ImpactIcon } from "@/data/impact-points";
import styles from "./impact-section.module.css";

function ImpactIconGraphic({ icon }: { icon: ImpactIcon }) {
  if (icon === "community") return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M11 37V19l13-7 13 7v18l-13 5-13-5Z" /><path d="M18 21h12M18 27h12M24 17v15" /></svg>;
  if (icon === "packaging") return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M14 16h20v21H14zM18 12h12v4M18 23h12M19 30h10" /><path d="m31 35 4 4 5-6" /></svg>;
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="m24 8 5 10 11 1-8 8 2 11-10-5-10 5 2-11-8-8 11-1 5-10Z" /><path d="M24 18v10M19 23h10" /></svg>;
}

export function ImpactSection() {
  return (
    <section id="impact" className={styles.section} aria-labelledby="impact-heading">
      <div className={styles.divider} aria-hidden="true" />
      <div className={styles.layout}>
        <div className={styles.visual} aria-label="Impact image placeholder"><span>Image coming soon</span></div>
        <div className={styles.content}>
          <p className="type-overline">We care for</p>
          <h2 id="impact-heading">People, Planet<br />&amp; Every Cup</h2>
          <div className={styles.points}>
            {impactPoints.map((point) => <article className={styles.point} key={point.title}>
              <span className={styles.icon}><ImpactIconGraphic icon={point.icon} /></span>
              <div><h3>{point.title}</h3><p>{point.description}</p></div>
            </article>)}
          </div>
          <div className={styles.marks} aria-label="Future partner certification marks">
            {partnerMarks.map((mark) => <span key={mark}>{mark}</span>)}
          </div>
        </div>
      </div>
      <div className={styles.divider} aria-hidden="true" />
    </section>
  );
}
