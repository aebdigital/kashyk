'use client';

import { useState } from 'react';

export default function Contact() {
  const [mapOverlayVisible, setMapOverlayVisible] = useState(true);

  const handleOverlayClick = () => {
    setMapOverlayVisible(false);
  };

  return (
    <section className="location" id="contact">
      <div className="container">
        <div className="location-content">
          <div className="location-info">
            <div className="location-item">
              <h4>Kontakt</h4>
              <p>
                <a href="tel:0940235635">0940 235 635</a>
              </p>
              <p>
                <a href="mailto:kashyknatalya@gmail.com">kashyknatalya@gmail.com</a>
              </p>
            </div>
            <div className="location-item">
              <h4>Adresa</h4>
              <p>
                Podchod Hodžovo námestie 4,
                <br />
                Bratislava
              </p>
            </div>
            <div className="location-item">
              <h4>Otváracie hodiny</h4>
              <p>Po - Pia: 9:00 - 19:00</p>
              <p>So: 9:00 - 15:00</p>
              <p>Ne: Zatvorené</p>
            </div>
          </div>
          <div className="map" style={{ position: 'relative' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.0000000000005!2d17.100000000000005!3d48.150000000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c890000000000%3A0x0!2sHod%C5%BEovo%20n%C3%A1mestie!5e0!3m2!1sen!2ssk!4v1600000000000!5m2!1sen!2ssk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {mapOverlayVisible && (
              <div
                onClick={handleOverlayClick}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  paddingBottom: '10%',
                }}
              >
                <span
                  style={{
                    backgroundColor: 'rgba(87, 35, 55, 0.85)',
                    color: '#fff',
                    padding: '12px 24px',
                    borderRadius: '4px',
                    fontSize: '0.95rem',
                    fontFamily: "'Nunito Sans', sans-serif",
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  }}
                >
                  Pre interakciu s mapou kliknite
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
