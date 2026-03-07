'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { pages } from '@/data/pages';
import SocialLinks from './SocialLinks';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMob = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMob = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

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
        </div>
      </div>
    </>
  );
}
