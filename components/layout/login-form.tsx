"use client";

import { FormEvent, useState } from "react";
import styles from "./login-form.module.css";

type Errors = { email?: string; password?: string };

export function LoginForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "").trim();
    const password = String(form.get("password") ?? "");
    const nextErrors: Errors = {};
    if (!email) nextErrors.email = "Enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!password) nextErrors.password = "Enter your password.";
    setErrors(nextErrors);
    setMessage(Object.keys(nextErrors).length ? "" : "Login is not connected yet.");
  };
  const comingSoon = (kind: string) => { setErrors({}); setMessage(`${kind} is coming soon.`); };
  return <form className={styles.form} noValidate onSubmit={submit}>
    <div className={styles.fields}>
      <div><label className={styles.visuallyHidden} htmlFor="login-email">E-mail</label><input id="login-email" name="email" type="email" autoComplete="email" placeholder="E-mail" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "login-email-error" : undefined} />{errors.email && <p id="login-email-error" className={styles.error}>{errors.email}</p>}</div>
      <div><label className={styles.visuallyHidden} htmlFor="login-password">Password</label><input id="login-password" name="password" type="password" autoComplete="current-password" placeholder="Password" aria-invalid={Boolean(errors.password)} aria-describedby={errors.password ? "login-password-error" : undefined} />{errors.password && <p id="login-password-error" className={styles.error}>{errors.password}</p>}</div>
    </div>
    <button className={styles.textAction} type="button" onClick={() => comingSoon("Password recovery")}>Forgot your password?</button>
    <button className={styles.submit} type="submit">Login</button>
    <button className={styles.textAction} type="button" onClick={() => comingSoon("Sign up")}>Sign up</button>
    <p className={styles.message} aria-live="polite">{message}</p>
  </form>;
}
