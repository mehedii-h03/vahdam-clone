"use client";

import { useEffect, useState } from "react";
import { HeaderShopMenu } from "./header-shop-menu";
import { SearchDrawer } from "./search-drawer";
import styles from "./tea-header.module.css";
import pageStyles from "@/app/tea-shop/page.module.css";

function UtilityIcon({ name }: { name: "search" | "account" | "bag" }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === "search" ? <><circle cx="10" cy="10" r="6" /><path d="m15 15 5 5" /></> : name === "account" ? <><circle cx="12" cy="7" r="3.5" /><path d="M6 21v-3a6 6 0 0 1 12 0v3" /></> : <><path d="M5 7h14v14H5zM9 9V5a3 3 0 0 1 6 0v4" /></>}
  </svg>;
}

export function TeaHeader({ variant = "sky", showAnnouncement = false }: { variant?: "sky" | "plain"; showAnnouncement?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (variant !== "sky") return;
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [variant]);

  return <>
    <a className={pageStyles.skip} href="#main-content">Skip to content</a>
    {showAnnouncement && <div className={pageStyles.announcement}><span>A slower moment. A better everyday.</span><span className={pageStyles.announcementDetail}>Welcome to Morrow Tea House</span></div>}
    <header className={`${styles.header} ${variant === "plain" ? styles.plain : ""} ${scrolled ? styles.scrolled : ""}`}>
      <nav aria-label="Shop navigation" className={styles.left}>
        <HeaderShopMenu />
      </nav>
      <a href="/tea-shop" className={styles.wordmark} aria-label="Morrow Tea House home"><span>MORROW</span><span className={styles.tagline}>Tea House</span></a>
      <div className={styles.utilities}>
        <button type="button" className={styles.currency} aria-label="Bangladesh, BDT currency — preview only" title="Country and currency — preview only">
          <svg className={styles.flag} width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="9" fill="var(--header-flag-green)"/><circle cx="8.5" cy="10" r="5.4" fill="var(--header-flag-red)"/></svg>
          <span className={styles.currencyText}>BDT ৳</span>
          <svg className={styles.chevron} width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="m3 4.5 3 3 3-3" /></svg>
        </button>
        <div className={styles.search}><SearchDrawer /></div>
        <a href="/account/login" className={styles.account} aria-label="Login"><UtilityIcon name="account" /></a>
        <button type="button" aria-label="Shopping bag — preview only" title="Shopping bag — coming soon"><UtilityIcon name="bag" /></button>
      </div>
    </header>
  </>;
}
