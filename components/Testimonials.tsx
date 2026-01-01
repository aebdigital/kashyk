'use client';

import { useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'Marta S.',
    text: 'Ako vždy to je výborne! Veľmi pekne ďakujem!',
  },
  {
    name: 'Shir G.',
    text: 'Natalia was amazing! Didn\'t feel a thing, and she made it all super comfortable.',
  },
  {
    name: 'Deanna P.',
    text: 'Fantastic as always!',
  },
  {
    name: 'Daria G.',
    text: 'Great as usual!',
  },
  {
    name: 'Ютта К.',
    text: 'Ďakujem, Natalia. PRX je úžasná procedúra. Som veľmi spokojná.',
  },
  {
    name: 'Janet H.',
    text: 'Super! Excellent beautician. I don\'t speak Slovak but Natalia could speak to me in English. She was very kind and friendly.',
  },
  {
    name: 'Zuzana N.',
    text: 'Great job!',
  },
  {
    name: 'Katja B.',
    text: 'As usual, everything was fine!',
  },
  {
    name: 'Viktoriia K.',
    text: 'Все супер, як завжди!',
  },
  {
    name: 'Alexandra D.',
    text: 'Super!',
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;

      // Get the width of one set of testimonials
      const firstSet = scrollContainer.querySelector('.testimonials-track');
      if (firstSet) {
        const trackWidth = firstSet.scrollWidth / 2;

        // Reset position when we've scrolled through one full set
        if (scrollPosition >= trackWidth) {
          scrollPosition = 0;
        }
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="testimonials" style={{ backgroundColor: '#fff', padding: '80px 0' }}>
      <div className="container">
        <div className="services-header">
          <div className="services-text">
            <h2>Čo hovoria naši klienti?</h2>
          </div>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="testimonials-scroll-container"
        style={{
          overflow: 'hidden',
          width: '100%',
          cursor: 'grab',
        }}
      >
        <div
          className="testimonials-track"
          style={{
            display: 'flex',
            gap: '2rem',
            padding: '0 1rem',
            width: 'max-content',
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card"
              style={{
                minWidth: '280px',
                maxWidth: '350px',
                flexShrink: 0,
              }}
            >
              <div className="stars" style={{ color: '#FFD700' }}>★★★★★</div>
              <h4>{testimonial.name}</h4>
              <p>"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container" style={{ marginTop: '2rem', textAlign: 'center' }}>
        <a
          href="https://www.fresha.com/fi/a/natalia-kashyk-kozmeticka-bratislavsky-kraj-hodzovo-namestie-4-tatra-centr-rpegt4ih?reviews=true"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Všetky recenzie
        </a>
      </div>
    </section>
  );
}
