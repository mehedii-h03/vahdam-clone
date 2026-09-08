"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { productsByTab, type Product } from "@/data/products";
import styles from "./search-drawer.module.css";

type SearchTab = "Products" | "Suggestions" | "Collections" | "Pages";
const tabs: SearchTab[] = ["Products", "Suggestions", "Collections", "Pages"];
type SearchProduct = Product & { imageSrc: string | null };
const products: SearchProduct[] = Object.values(productsByTab).flat().map((product) => ({ ...product, imageSrc: product.image }));
const suggestions = ["Green tea", "Herbal blends", "Morning ritual", "Gift tea"];

function SearchIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" aria-hidden="true"><circle cx="10" cy="10" r="6" /><path d="m15 15 5 5" /></svg>; }

function ProductResult({ product }: { product: SearchProduct }) {
  return <a className={styles.result} href="/tea-shop#shop-by-product"><span className={styles.thumbnail} aria-hidden="true">Image<br />coming soon</span><span className={styles.resultCopy}><b>{product.name}</b><span className={styles.priceLine}><strong>{product.price}</strong><s>{product.compareAtPrice}</s><em>{product.sale}</em></span></span></a>;
}

function Skeletons() {
  return <div className={styles.skeletons} aria-label="Searching" aria-live="polite"><div className={styles.tabSkeletons}><i /><i /><i /></div>{Array.from({ length: 4 }, (_, index) => <div className={styles.rowSkeleton} key={index}><i /><span><b /><b /><b /></span></div>)}</div>;
}

export function SearchDrawer() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<SearchTab>("Products");
  const trigger = useRef<HTMLButtonElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const matchingProducts = useMemo(() => products.filter((product) => product.name.toLowerCase().includes(query.trim().toLowerCase())), [query]);

  const clearTimer = useCallback(() => { if (timer.current) { clearTimeout(timer.current); timer.current = null; } }, []);
  const close = useCallback(() => { clearTimer(); setLoading(false); setOpen(false); requestAnimationFrame(() => trigger.current?.focus()); }, [clearTimer]);
  const openDrawer = () => { window.dispatchEvent(new Event("morrow:overlay-open")); setOpen(true); };

  useEffect(() => () => clearTimer(), [clearTimer]);
  useEffect(() => {
    if (!open) return;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    requestAnimationFrame(() => input.current?.focus());
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); close(); return; }
      if (event.key !== "Tab" || !panel.current) return;
      const focusable = Array.from(panel.current.querySelectorAll<HTMLElement>('button:not([disabled]), input, a[href], [tabindex]:not([tabindex="-1"])'));
      const first = focusable.at(0); const last = focusable.at(-1);
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; document.body.style.paddingRight = previousPadding; document.removeEventListener("keydown", onKeyDown); };
  }, [open, close]);
  const updateQuery = (value: string) => {
    clearTimer();
    setQuery(value);
    if (!value.trim()) { setLoading(false); return; }
    setLoading(true);
    timer.current = setTimeout(() => { timer.current = null; setLoading(false); }, 280);
  };
  const clear = () => { updateQuery(""); input.current?.focus(); };
  const hasQuery = Boolean(query.trim());
  const tabContent = () => {
    if (activeTab === "Products") return matchingProducts.length ? <div className={styles.results}>{matchingProducts.map((product) => <ProductResult key={product.id} product={product} />)}</div> : <p className={styles.empty}>No results found.</p>;
    if (activeTab === "Suggestions") { const matches = suggestions.filter((suggestion) => suggestion.toLowerCase().includes(query.toLowerCase())); return matches.length ? <div className={styles.suggestions}>{matches.map((suggestion) => <button type="button" key={suggestion} onClick={() => setQuery(suggestion)}>{suggestion}</button>)}</div> : <p className={styles.empty}>No suggestions found.</p>; }
    if (activeTab === "Pages") return <div className={styles.results}><a className={styles.pageResult} href="/tea-shop">Morrow Tea House homepage <span>Open page ↗</span></a></div>;
    return <p className={styles.empty}>No collections match this search yet.</p>;
  };

  return <>
    <button ref={trigger} type="button" className={styles.trigger} aria-label="Search" aria-haspopup="dialog" aria-expanded={open} onClick={openDrawer}><SearchIcon /></button>
    {open && <div className={styles.backdrop} onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <div ref={panel} className={styles.panel} role="dialog" aria-modal="true" aria-label="Search Morrow Tea House">
        <div className={styles.searchHeader}><input ref={input} value={query} onChange={(event) => updateQuery(event.target.value)} placeholder="Search for..." aria-label="Search products and pages" />{hasQuery && <button className={styles.clear} type="button" onClick={clear}>Clear</button>}<button className={styles.close} type="button" aria-label="Close search" onClick={close}>×</button></div>
        <div className={styles.body}>{hasQuery && (loading ? <Skeletons /> : <><div className={styles.tabs} role="tablist" aria-label="Search result types">{tabs.map((tab) => <button key={tab} type="button" role="tab" aria-selected={activeTab === tab} onClick={() => setActiveTab(tab)}>{tab}</button>)}</div><div className={styles.scrollArea} role="tabpanel">{tabContent()}</div></>)}</div>
      </div>
    </div>}
  </>;
}
