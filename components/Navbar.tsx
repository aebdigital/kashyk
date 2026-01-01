'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useLenis } from './SmoothScroll';

interface NavbarProps {
  noScrollEffect?: boolean;
}

export default function Navbar({ noScrollEffect = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (noScrollEffect) return;

    // Use Lenis scroll event instead of native window scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    // Initial check
    handleScroll();

    // Listen to scroll using requestAnimationFrame for better performance with Lenis
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [noScrollEffect]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.classList.toggle('mobile-menu-open');
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.classList.remove('mobile-menu-open');
  };

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target && lenis) {
        // Use Lenis scrollTo instead of native scrollIntoView
        lenis.scrollTo(target as HTMLElement, {
          offset: 0,
          duration: 1.2,
        });
      } else if (target) {
        // Fallback if Lenis not available
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      closeMobileMenu();
    }
  }, [lenis]);

  return (
    <>
      <nav
        className={`navbar ${scrolled ? 'scrolled' : ''} ${noScrollEffect ? 'no-scroll-effect' : ''}`}
        style={noScrollEffect ? { backgroundColor: 'var(--burgundy)' } : undefined}
      >
        <div className="nav-container">
          <div className="logo">
            <Link href="/" style={{ textDecoration: 'none' }}>
              <h3>Natalia Kashyk</h3>
            </Link>
          </div>
          <div className="nav-menu">
            <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>O nás</a>
            <a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, '#services')}>Služby</a>
            <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>Kontakt</a>
            <a
              href="https://www.fresha.com/a/natalia-kashyk-kozmeticka-bratislavsky-kraj-hodzovo-namestie-4-tatra-centr-rpegt4ih/booking?menu=true&dppub=true&offerItems=sv%3A6232085"
              className="nav-link btn-nav"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rezervácia
            </a>
          </div>
          <div
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>O nás</a>
        <a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, '#services')}>Služby</a>
        <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>Kontakt</a>
        <a
          href="https://www.fresha.com/a/natalia-kashyk-kozmeticka-bratislavsky-kraj-hodzovo-namestie-4-tatra-centr-rpegt4ih/booking?menu=true&dppub=true&offerItems=sv%3A6232085"
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMobileMenu}
        >
          Rezervácia
        </a>
      </div>
    </>
  );
}
