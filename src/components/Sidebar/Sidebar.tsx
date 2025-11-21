'use client';

<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Brand } from '@/components/Brand';
import styles from './Sidebar.module.css';

export interface MenuItem {
  title: string;
  href?: string;
  items?: MenuItem[];
}

export interface SidebarProps {
  menuItems: MenuItem[];
  isOpen?: boolean;
  onClose?: () => void;
  themeButton?: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ menuItems, isOpen = false, onClose, themeButton }) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    // Se tem subitens, é um grupo
    if (item.items && item.items.length > 0) {
      return (
        <div key={item.title} className={styles.menuGroup}>
          <div className={styles.menuGroupTitle}>{item.title}</div>
          <div className={styles.menuGroupItems}>
            {item.items.map((subItem) => renderMenuItem(subItem, level + 1))}
          </div>
        </div>
      );
    }

    // Se não tem href, é só um título
    if (!item.href) {
      return (
        <div key={item.title} className={styles.menuGroupTitle}>
          {item.title}
        </div>
      );
    }

    // É um item clicável
    return (
      <Link
        key={item.href}
        href={item.href}
        className={`${styles.menuItem} ${isActive(item.href) ? styles.menuItemActive : ''}`}
        onClick={onClose}
      >
        {item.title}
      </Link>
    );
  };

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}
      
      <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <Link href="/" className={styles.logoLink} onClick={onClose}>
            <Brand product="alura" width={120} height={56} />
          </Link>
          {themeButton && (
            <div className={styles.themeButtonWrapper}>
              {themeButton}
            </div>
          )}
        </div>

        <nav className={styles.menuList}>
          {menuItems.map((item) => renderMenuItem(item))}
        </nav>

        <div className={styles.sidebarFooter}>
          <p className={styles.footerText}>Design System v1.0</p>
          <p className={styles.footerCopyright}>© 2024 Alura</p>
        </div>
      </aside>
    </>
  );
};
=======
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';

interface MenuItem {
  title: string;
  href?: string;
  items?: { title: string; href: string }[];
}

interface SidebarProps {
  items: MenuItem[];
}

export function Sidebar({ items }: SidebarProps) {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['Branding', 'Components', 'Tokens'])
  );

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  };

  const isActive = (href: string) => pathname === href;

  return (
    <nav className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <Link href="/" className={styles.logoLink}>
          <h2 className={styles.logo}>Design System</h2>
        </Link>
      </div>

      <div className={styles.menuList}>
        {items.map((item) => (
          <div key={item.title} className={styles.menuSection}>
            {item.items ? (
              <>
                <button
                  className={`${styles.sectionTitle} ${
                    expandedSections.has(item.title) ? styles.expanded : ''
                  }`}
                  onClick={() => toggleSection(item.title)}
                >
                  <span>{item.title}</span>
                  <svg
                    className={styles.chevron}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {expandedSections.has(item.title) && (
                  <div className={styles.submenu}>
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`${styles.menuItem} ${
                          isActive(subItem.href) ? styles.active : ''
                        }`}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              item.href && (
                <Link
                  href={item.href}
                  className={`${styles.menuItem} ${styles.topLevel} ${
                    isActive(item.href) ? styles.active : ''
                  }`}
                >
                  {item.title}
                </Link>
              )
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
>>>>>>> a128a0a3e50a7f5889715be730c8e0457c114468
