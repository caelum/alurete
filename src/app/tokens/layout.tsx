'use client';

import { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/Button';
import styles from '../components/layout.module.css';

interface TokensLayoutProps {
  children: ReactNode;
}

export default function TokensLayout({ children }: TokensLayoutProps) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (!mounted) {
    return null;
  }

  const isActive = (path: string) => pathname === path;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.menuButton} onClick={() => setSidebarOpen(!sidebarOpen)}>
            ☰
          </button>
          <Link href="/" className={styles.title}>
            Design System
          </Link>
        </div>
        <div className={styles.headerRight}>
          <nav className={styles.mainNav}>
            <Link href="/" className={styles.mainNavLink}>
              Home
            </Link>
            <Link href="/components/button" className={styles.mainNavLink}>
              Components
            </Link>
            <Link href="/tokens/colors" className={`${styles.mainNavLink} ${styles.mainNavLinkActive}`}>
              Tokens
            </Link>
          </nav>
          <Button variant="secondary" onClick={toggleTheme} size="small">
            {theme === 'light' ? '🌙' : '☀️'}
          </Button>
        </div>
      </header>

      {sidebarOpen && <div className={styles.overlay} onClick={() => setSidebarOpen(false)} />}

      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
        <nav className={styles.nav}>
          <div className={styles.navSection}>
            <div className={styles.navGroup}>Design Tokens</div>
            <Link
              href="/tokens/colors"
              className={`${styles.navItem} ${isActive('/tokens/colors') ? styles.navItemActive : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              Colors
            </Link>
            <Link
              href="/tokens/typography"
              className={`${styles.navItem} ${isActive('/tokens/typography') ? styles.navItemActive : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              Typography
            </Link>
          </div>
        </nav>
      </aside>

      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}
