'use client';

import { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 40);
      
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setScrollProgress((window.scrollY / total) * 100);
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      id="navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background-color 0.45s ease, border-color 0.45s ease, padding 0.35s ease',
        backgroundColor: scrolled ? 'rgba(26, 23, 20, 0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(184, 121, 65, 0.12)'
          : '1px solid transparent',
        paddingTop: scrolled ? '1rem' : '1.75rem',
        paddingBottom: scrolled ? '1rem' : '1.75rem',
        paddingLeft: '2rem',
        paddingRight: '2rem',
      }}
    >
      {/* Scroll Progress Bar */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '2px',
          backgroundColor: '#b87941',
          width: `${scrollProgress}%`,
          transition: 'width 0.1s ease-out',
        }}
      />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* ── Logo ── */}
        <a href="/" aria-label="Ruddha Architects — Home" style={{ textDecoration: 'none' }}>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '1.5rem',
                fontWeight: 500,
                letterSpacing: '0.24em',
                color: '#f5f2ed',
                lineHeight: 1,
                textTransform: 'uppercase',
              }}
            >
              Ruddha
            </div>
            <div
              style={{
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: '0.475rem',
                fontWeight: 400,
                letterSpacing: '0.3em',
                color: '#b87941',
                textTransform: 'uppercase',
                lineHeight: 1,
                marginTop: '8px',
              }}
            >
              Architects &amp; Interiors
            </div>
          </div>
        </a>

        {/* ── Desktop Nav ── */}
        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.75rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link"
                  style={{
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: '0.62rem',
                    fontWeight: 400,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                id="nav-cta-btn"
                className="btn-primary"
                style={{
                  padding: '0.625rem 1.375rem',
                  fontSize: '0.58rem',
                }}
              >
                Let&apos;s Talk
              </a>
            </li>
          </ul>
        </nav>

        {/* ── Mobile Hamburger ── */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '5px',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '1px',
              backgroundColor: '#f5f2ed',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '1px',
              backgroundColor: '#f5f2ed',
              transition: 'opacity 0.3s ease',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '1px',
              backgroundColor: '#f5f2ed',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* ── Mobile Menu Drawer ── */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        style={{
          maxHeight: menuOpen ? '480px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          backgroundColor: 'rgba(26, 23, 20, 0.98)',
        }}
        className="md:hidden"
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '1.25rem 2rem 2rem',
          }}
        >
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {NAV_LINKS.map((link) => (
              <li
                key={link.href}
                style={{ borderBottom: '1px solid rgba(184, 121, 65, 0.1)' }}
              >
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: '0.68rem',
                    fontWeight: 400,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#f5f2ed',
                    textDecoration: 'none',
                    display: 'block',
                    padding: '1.125rem 0',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li style={{ marginTop: '1.5rem' }}>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary"
                style={{
                  padding: '0.875rem 1.75rem',
                  fontSize: '0.62rem',
                }}
              >
                Let&apos;s Talk
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
