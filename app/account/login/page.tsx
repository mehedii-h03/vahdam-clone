import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { LoginForm } from "@/components/layout/login-form";
import { TeaHeader } from "@/components/layout/tea-header";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Login",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return <div className={styles.page}>
    <TeaHeader variant="plain" showAnnouncement={false} />
    <main id="main-content" className={styles.main} tabIndex={-1}>
      <section className={styles.login} aria-labelledby="login-heading">
        <h1 id="login-heading">Login</h1>
        <LoginForm />
      </section>
    </main>
    <Footer />
  </div>;
}
