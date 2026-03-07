'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { pages } from '@/data/pages';
import SocialLinks from './SocialLinks';
import { IconSun, IconMoon, IconMonitor } from './Icons';

export default function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleMob = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMob = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const cycleTheme = useCallback(() => {
    if (theme === 'dark') setTheme('light');
    else if (theme === 'light') setTheme('system');
    else setTheme('dark');
  }, [theme, setTheme]);

  const themeIcon = theme === 'light' ? IconSun : theme === 'dark' ? IconMoon : IconMonitor;
  const themeLabel = theme === 'light' ? 'Light' : theme === 'dark' ? 'Dark' : 'System';

  return (
    <>
      <header className="header">
        <div className="header-brand">
          <Link href="/" className="logo" onClick={closeMob}>
            Anthony Volk
          </Link>
        </div>
        <nav className="nav">
          {pages.map((p) => (
            <Link
              key={p.slug}
              href={p.href}
              className={`nav-link${pathname === p.href ? ' active' : ''}`}
              style={{ '--accent': p.color } as React.CSSProperties}
            >
              {p.name}
            </Link>
          ))}
        </nav>
        <div className="nav-social">
          <SocialLinks />
        </div>
        <button
          className="theme-toggle"
          onClick={cycleTheme}
          aria-label={`Theme: ${themeLabel}. Click to change.`}
          title={themeLabel}
        >
          {mounted ? themeIcon : IconMoon}
        </button>
        <button
          className={`hamburger${mobileMenuOpen ? ' open' : ''}`}
          onClick={toggleMob}
          aria-label="Toggle menu"
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
      </header>

      <div className={`mobile-menu${mobileMenuOpen ? ' open' : ''}`}>
        {pages.map((p) => (
          <Link
            key={p.slug}
            href={p.href}
            className={`nav-link${pathname === p.href ? ' active' : ''}`}
            onClick={closeMob}
          >
            {p.name}
          </Link>
        ))}
        <div className="mobile-social">
          <SocialLinks />
          <button
            className="theme-toggle"
            onClick={cycleTheme}
            aria-label={`Theme: ${themeLabel}. Click to change.`}
          >
            {mounted ? themeIcon : IconMoon}
            <span className="theme-label">{mounted ? themeLabel : 'Dark'}</span>
          </button>
        </div>
      </div>
    </>
  );
}
