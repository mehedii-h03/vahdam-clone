"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { TeaMenu } from "./tea-menu";
import headerStyles from "./tea-header.module.css";
import styles from "./header-shop-menu.module.css";

const categories = [
  { title: "The daily edit", children: ["Morning favourites", "Gentle greens", "Evening infusions"] },
  { title: "Explore by flavour", children: ["Bright & citrusy", "Rich & malty", "Soft & floral"] },
  { title: "Ways to steep", children: ["Loose-leaf rituals", "Easy infusions", "Tasting selections"] },
  { title: "Garden collection", children: ["Mountain mornings", "Valley leaves", "Seasonal discoveries"] },
  { title: "Tools for tea", children: ["Cups & ceramics", "Pots & infusers", "Everyday essentials"] },
  { title: "Thoughtful gestures", children: ["Little thank-yous", "Ritual gift sets", "A moment to share"] },
  { title: "Discover everything", children: ["The complete tea edit", "Find your daily ritual"] },
];

export function HeaderShopMenu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    function outside(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); trigger.current?.focus(); }
    }
    const media = window.matchMedia("(min-width: 64rem)");
    const resize = () => { if (!media.matches) setOpen(false); };
    const closeForOverlay = () => setOpen(false);
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    media.addEventListener("change", resize);
    window.addEventListener("morrow:overlay-open", closeForOverlay);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
      media.removeEventListener("change", resize);
      window.removeEventListener("morrow:overlay-open", closeForOverlay);
    };
  }, [open]);

  function close() { setOpen(false); trigger.current?.focus(); }

  return <>
    <div className={styles.mobile}><TeaMenu /></div>
    <div ref={root} className={styles.desktop} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
    }}>
      <button ref={trigger} type="button" className={headerStyles.shop}
        aria-label={open ? "Close shop menu" : "Open shop menu"} aria-expanded={open} aria-controls={`${id}-panel`}
        onClick={() => setOpen(value => !value)}
        onKeyDown={(event) => { if (event.key === "ArrowDown") { event.preventDefault(); setOpen(true); requestAnimationFrame(() => tabs.current[active]?.focus()); } }}>
        <span className={`${headerStyles.menuIcon} ${open ? styles.closeIcon : ""}`} aria-hidden="true"><i /><i /><i /></span>
        <span>Shop</span>
      </button>
      <div id={`${id}-panel`} className={styles.mega} data-open={open} inert={!open} aria-hidden={!open}>
        <div className={styles.inner}>
          <div className={styles.categories} role="tablist" aria-label="Tea collections" aria-orientation="vertical">
            {categories.map((category, index) => <button key={category.title} ref={element => { tabs.current[index] = element; }}
              id={`${id}-tab-${index}`} role="tab" aria-selected={active === index} aria-controls={`${id}-children-${index}`} tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)} onKeyDown={(event) => {
                let next = index;
                if (event.key === "ArrowDown") next = (index + 1) % categories.length;
                else if (event.key === "ArrowUp") next = (index + categories.length - 1) % categories.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = categories.length - 1;
                else return;
                event.preventDefault(); setActive(next); tabs.current[next]?.focus();
              }}>{category.title}</button>)}
          </div>
          <div className={styles.children}>
            {categories.map((category, index) => <div key={category.title} role="tabpanel" id={`${id}-children-${index}`} aria-labelledby={`${id}-tab-${index}`} hidden={index !== active}>
              {category.children.map(label => <a key={label} href="#main-content" onClick={close}>{label}</a>)}
            </div>)}
          </div>
          <a className={styles.promo} href="#main-content" onClick={close}>
            <Image src="/images/garden-menu-placeholder.svg" alt="Illustrated rolling tea gardens in soft morning light" fill sizes="(min-width: 1440px) 360px, 28vw" />
            <span>Find your garden ritual <span aria-hidden="true">↗</span></span>
          </a>
        </div>
      </div>
    </div>
  </>;
}
