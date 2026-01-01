'use client';

import { useEffect, useRef, useCallback } from 'react';
import Script from 'next/script';
import { useLenis } from './SmoothScroll';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const ripplesInitialized = useRef(false);
  const lenis = useLenis();

  useEffect(() => {
    // Initialize ripples once jQuery and the plugin are loaded
    const initRipples = () => {
      if (ripplesInitialized.current) return;

      const $ = (window as any).jQuery;
      if (!$ || !heroRef.current) return;

      try {
        const $hero = $(heroRef.current);

        // Check if ripples plugin is available
        if (typeof $hero.ripples !== 'function') return;

        $hero.ripples({
          resolution: 512,
          dropRadius: 25,
          perturbance: 0.04,
          interactive: true,
          crossOrigin: '',
        });

        ripplesInitialized.current = true;

        // Trigger automatic drop in the center
        setTimeout(() => {
          const x = $hero.outerWidth() / 2;
          const y = $hero.outerHeight() / 2;
          const dropRadius = 25;
          const strength = 0.05;

          $hero.ripples('drop', x, y, dropRadius, strength);

          // Add a second drop for more effect
          setTimeout(() => {
            $hero.ripples('drop', x, y, dropRadius, strength);
          }, 200);
        }, 100);
      } catch (e) {
        console.log('Ripples effect not supported:', e);
      }
    };

    // Check if jQuery is already loaded
    if ((window as any).jQuery && (window as any).jQuery.fn.ripples) {
      initRipples();
    }

    // Listen for custom event when scripts are loaded
    window.addEventListener('ripplesReady', initRipples);

    return () => {
      window.removeEventListener('ripplesReady', initRipples);
      // Cleanup ripples on unmount
      const $ = (window as any).jQuery;
      if ($ && heroRef.current && ripplesInitialized.current) {
        try {
          $(heroRef.current).ripples('destroy');
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    };
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target && lenis) {
        lenis.scrollTo(target as HTMLElement, {
          offset: 0,
          duration: 1.2,
        });
      } else if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [lenis]);

  return (
    <>
      {/* Load jQuery */}
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Load ripples after jQuery
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/jquery.ripples@0.6.3/dist/jquery.ripples.min.js';
          script.onload = () => {
            window.dispatchEvent(new Event('ripplesReady'));
          };
          document.body.appendChild(script);
        }}
      />

      <section className="hero" id="banner">
        <div
          ref={heroRef}
          className="hero-background"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80')",
          }}
        />
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Kozmetický salón Bratislava – Natalia Kashyk</h1>
            <p className="hero-subtitle">
              Objavte svoje najkrajšie ja v našom špičkovom salóne – profesionálne služby,
              kvalifikovaní odborníci a luxusná starostlivosť na jednom mieste.
            </p>
          </div>
          <div className="hero-buttons">
            <a
              href="https://www.fresha.com/a/natalia-kashyk-kozmeticka-bratislavsky-kraj-hodzovo-namestie-4-tatra-centr-rpegt4ih/booking?menu=true&dppub=true&offerItems=sv%3A6232085"
              className="btn btn-primary cta-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rezervácia
            </a>
            <a href="#services" className="btn btn-reverse cta-btn" onClick={(e) => handleNavClick(e, '#services')}>
              Naše služby
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
