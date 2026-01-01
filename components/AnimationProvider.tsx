'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Hero parallax using ScrollTrigger
    const heroBg = document.querySelector('.hero-background') as HTMLElement;
    if (heroBg) {
      gsap.to(heroBg, {
        y: '50%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    // Hero title animation
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      gsap.fromTo(
        heroTitle,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', delay: 0.2 }
      );
    }

    // Hero subtitle animation
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
      gsap.fromTo(
        heroSubtitle,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 0.6 }
      );
    }

    // Section animations using ScrollTrigger batch for better performance
    const sections = gsap.utils.toArray('section:not(.hero)') as HTMLElement[];
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Batch animate cards for better performance - subtle animation
    const cards = gsap.utils.toArray('.service-card, .testimonial-card, .faq-item') as HTMLElement[];
    ScrollTrigger.batch(cards, {
      onEnter: (batch) => {
        gsap.fromTo(
          batch,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power1.out' }
        );
      },
      start: 'top 90%',
      once: true,
    });

    // About sections animation
    const aboutElements = gsap.utils.toArray('.about-text, .about-image, .services-header, .location-content') as HTMLElement[];
    aboutElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // CTA button hover animations
    const ctaButtons = document.querySelectorAll('.cta-btn');
    const buttonHandlers: Array<{ el: Element; enter: () => void; leave: () => void }> = [];

    ctaButtons.forEach((button) => {
      const tl = gsap.timeline({ paused: true });
      tl.to(button, { scale: 1.05, duration: 0.3, ease: 'power2.out' });

      const enter = () => tl.play();
      const leave = () => tl.reverse();

      button.addEventListener('mouseenter', enter);
      button.addEventListener('mouseleave', leave);
      buttonHandlers.push({ el: button, enter, leave });
    });

    // Refresh ScrollTrigger on window resize (debounced)
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);

      // Clean up button handlers
      buttonHandlers.forEach(({ el, enter, leave }) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}
