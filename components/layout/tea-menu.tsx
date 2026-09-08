"use client";

import { useEffect, useRef } from "react";
import styles from "./tea-menu.module.css";

export function TeaMenu({ hero = false }: { hero?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeForOverlay = () => dialog.current?.close();
    window.addEventListener("morrow:overlay-open", closeForOverlay);
    return () => window.removeEventListener("morrow:overlay-open", closeForOverlay);
  }, []);

  function close() {
    dialog.current?.close();
    trigger.current?.focus();
  }

  return (
    <>
      <button
        ref={trigger}
        type="button"
        className={hero ? styles.heroTrigger : styles.trigger}
        aria-label={hero ? "Explore the tea menu" : "Open navigation menu"}
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
      >
        {hero ? <>Explore our teas <span aria-hidden="true">↗</span></> : <><span className={styles.menuIcon} aria-hidden="true"><i /><i /><i /></span><span className={styles.shopLabel}>Shop</span></>}
      </button>
      <dialog ref={dialog} className={styles.dialog} aria-label="Tea house navigation" onClick={(event) => { if (event.target === event.currentTarget) close(); }} onClose={() => trigger.current?.focus()}>
        <div className={styles.panel}>
          <div className={styles.top}><span className="type-overline">Morrow Tea House</span><button type="button" aria-label="Close navigation menu" onClick={close}>×</button></div>
          <p className={styles.title}>Find your quiet.</p>
          <nav aria-label="Main navigation">
            <a href="/tea-shop" onClick={close}>Home <span aria-hidden="true">↗</span></a>
            <span className={styles.future}>Explore teas <small>Coming soon</small></span>
            <span className={styles.future}>Our story <small>Coming soon</small></span>
            <span className={styles.future}>The tea journal <small>Coming soon</small></span>
          </nav>
          <p className={styles.note}>A little more is brewing.<br />This is a homepage preview. Our collection is still taking shape.</p>
        </div>
      </dialog>
    </>
  );
}
