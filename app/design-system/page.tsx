import type { Metadata } from "next";
import type { CSSProperties } from "react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Design system — internal QA",
  description: "Internal visual token and accessibility specimens.",
  robots: { index: false, follow: false },
};

// Token names only: all visual values remain in app/tokens.css.
const colors = ["background","surface","foreground","muted","primary","secondary","neutral","border","border-strong","hover","focus","success","error","on-primary","on-secondary","success-surface","error-surface"] as const;
const typography = ["display","h1","h2","h3","body-large","body","small","label","button","overline"] as const;
const spaces = [0, 1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 32] as const;

export default function DesignSystemPage() {
  return (
    <main id="main-content" className={`page-container font-body ${styles.page}`}>
      <header className={styles.intro}>
        <p className="type-overline text-secondary">Internal reference · Phase 2</p>
        <h1>Room for a daily ritual.</h1>
        <p className="text-body-large text-muted max-w-reading">A visual vocabulary for a tea and wellness store. Editorial typography, botanical greens, warm paper tones, and quiet detail.</p>
        <nav aria-label="Design system sections" className={styles.links}>
          <a href="#colors">Colors</a><a href="#type">Typography</a><a href="#controls">Controls</a><a href="#surfaces">Surfaces</a><a href="#spacing">Spacing</a>
        </nav>
      </header>

      <section id="colors" aria-labelledby="colors-title" className={styles.section}>
        <p className="type-overline text-secondary">01 / Palette</p><h2 id="colors-title">Botanical & grounded</h2>
        <p className="text-muted">Light surfaces support dark text. White labels belong on primary, hover, and secondary fills. Subtle borders are decorative; controls use border-strong.</p>
        <div className={styles.swatches}>
          {colors.map(name => <figure key={name} className={styles.swatch}>
            <div aria-hidden="true" className={styles.paint} style={{ backgroundColor: `var(--color-${name})` }} />
            <figcaption>--color-{name}</figcaption>
          </figure>)}
        </div>
      </section>

      <section id="type" aria-labelledby="type-title" className={styles.section}>
        <p className="type-overline text-secondary">02 / Typography</p><h2 id="type-title">An editorial voice</h2>
        <p className="text-muted">Lora for display and headings. Montserrat for body and UI. Resize the viewport to inspect fluid sizes.</p>
        {typography.map(name => <div key={name} className={styles.typeRow}>
          <span className="text-small text-muted">{name}</span>
          <p style={{
            fontFamily: ["display", "h1", "h2", "h3"].includes(name) ? "var(--font-heading)" : "var(--font-body)",
            fontSize: `var(--text-${name})`,
            lineHeight: `var(--text-${name}--line-height)`,
            fontWeight: `var(--text-${name}--font-weight)`,
            letterSpacing: `var(--text-${name}--letter-spacing)`,
            textTransform: name === "overline" ? "uppercase" : "none",
          } as CSSProperties}>{["display", "h1", "h2", "h3"].includes(name) ? "A moment, made slowly." : "Find a little stillness in the everyday."}</p>
        </div>)}
      </section>

      <section id="controls" aria-labelledby="controls-title" className={styles.section}>
        <p className="type-overline text-secondary">03 / Interaction specimens</p><h2 id="controls-title">Clear, calm controls</h2>
        <p className="text-muted">Appearance-only specimens, with native input behavior. Tab through to inspect focus; no data is sent.</p>
        <div className={styles.controls}>
          <button type="button" className={styles.button}>Primary sample</button>
          <button type="button" className={`${styles.button} ${styles.secondary}`}>Secondary sample</button>
          <button type="button" className={`${styles.button} ${styles.outline}`}>Outline sample</button>
          <button type="button" className={styles.button} disabled>Disabled sample</button>
        </div>
        <div className={styles.grid}>
          <div className={styles.field}><label htmlFor="sample-name">Text input</label><input id="sample-name" placeholder="Write a sample note" /><p className="text-small text-muted">Label remains visible while typing.</p></div>
          <div className={styles.field}><label htmlFor="sample-error">Error state</label><input id="sample-error" defaultValue="Example" aria-invalid="true" aria-describedby="error-note" /><p id="error-note" className="text-small text-error">Sample error: please check this value.</p></div>
          <div className={styles.field}><label htmlFor="sample-select">Select input</label><select id="sample-select" defaultValue="first"><option value="first">First sample</option><option value="second">Second sample</option></select></div>
          <div className={styles.field}><label htmlFor="sample-disabled">Disabled input</label><input id="sample-disabled" placeholder="Unavailable sample" disabled /></div>
        </div>
        <p className="bg-success-surface text-success p-4 rounded-sm">Success specimen: a clear text confirmation.</p>
        <p className="bg-error-surface text-error p-4 rounded-sm">Error specimen: explain the issue in words.</p>
      </section>

      <section id="surfaces" aria-labelledby="surfaces-title" className={styles.section}>
        <p className="type-overline text-secondary">04 / Surfaces & edges</p><h2 id="surfaces-title">Restraint in the details</h2>
        <div className={styles.grid}>
          <article className={styles.card}><h3>Flat surface</h3><p>White, a fine border, and a small radius. Default card direction; no product UI.</p></article>
          <article className={`${styles.card} shadow-soft`}><h3>Soft elevation</h3><p>Subtle separation for supporting content.</p></article>
          <article className={`${styles.card} shadow-raised`}><h3>Raised surface</h3><p>Reserved for interactive elevation.</p></article>
          <article className={`${styles.card} shadow-overlay`}><h3>Overlay elevation</h3><p>Reserved for future drawers and popovers.</p></article>
        </div>
        <div className={styles.controls}>{["none", "sm", "md", "lg", "full"].map(radius => <span className={styles.radius} key={radius} style={{borderRadius: `var(--radius-${radius})`}}>radius-{radius}</span>)}</div>
        <div className={styles.borderSample}>Hairline / 1px / border</div>
        <div className={styles.borderStrong}>Emphasis / 2px / border-strong</div>
      </section>

      <section id="spacing" aria-labelledby="spacing-title" className={styles.section}>
        <p className="type-overline text-secondary">05 / Rhythm & layout</p><h2 id="spacing-title">Space to breathe</h2>
        <p className="text-muted">4px base. Gutters 16–48px; section space 48–96px. Containers: reading 672px, content 1200px, wide 1440px.</p>
        <div className={styles.spacing}>{spaces.map(space => <div key={space}><span className="text-small">{space} / {space * 4}px</span><div aria-hidden="true" className={styles.bar} style={{width: `calc(var(--spacing) * ${space})`}} /></div>)}</div>
        <p className="text-small text-muted">Breakpoints: sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1536px. Mobile first; content may wrap before a breakpoint.</p>
        <p className="text-small text-muted">Motion: fast 150ms · normal 250ms · slow 400ms. Standard, enter, and exit easing. Reduced-motion preference removes token-driven transitions.</p>
      </section>
    </main>
  );
}
