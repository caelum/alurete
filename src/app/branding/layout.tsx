'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import styles from './layout.module.css';

interface BrandingLayoutProps {
  children: ReactNode;
}

export default function BrandingLayout({ children }: BrandingLayoutProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          ← Voltar
        </Link>
        <h1 className={styles.title}>Branding</h1>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
