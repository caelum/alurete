<<<<<<< HEAD
import { ReactNode } from 'react';
=======
'use client';

import { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/Button';
>>>>>>> a128a0a3e50a7f5889715be730c8e0457c114468

interface ComponentsLayoutProps {
  children: ReactNode;
}

<<<<<<< HEAD
export default function TokensLayout({ children }: TokensLayoutProps) {
  return <>{children}</>;
=======
export default function ComponentsLayout({ children }: ComponentsLayoutProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

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

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
>>>>>>> a128a0a3e50a7f5889715be730c8e0457c114468
}

