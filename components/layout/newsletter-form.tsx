"use client";

import { FormEvent, useState } from "react";
import styles from "./newsletter-form.module.css";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) { setMessage("Enter a valid email address."); return; }
    setMessage("Thank you — you’re on the list.");
    setEmail("");
  };
  return <form className={styles.form} noValidate onSubmit={submit}><label className={styles.label} htmlFor="footer-email">Email address</label><div className={styles.field}><input id="footer-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email address" aria-describedby="newsletter-message" /><button type="submit">Subscribe</button></div><p id="newsletter-message" className={styles.message} aria-live="polite">{message}</p></form>;
}
