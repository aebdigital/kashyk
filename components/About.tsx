'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content about-content-custom">
          {/* Two photos side by side on the left */}
          <div className="about-images-wrapper">
            <div className="about-image">
              <Image
                src="/moj-pribeh.jpg"
                alt="O mne - Nataliya"
                width={400}
                height={500}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
            <div className="about-image">
              <Image
                src="/preco-prave-my.jpeg"
                alt="Prečo práve my?"
                width={400}
                height={500}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
          </div>

          {/* Combined text on the right */}
          <div className="about-text">
            <h2>O mne</h2>
            <p>
              Vitajte v našom salóne krásy. Volám sa Nataliya, som kozmetička s viac ako
              10 ročnou praxou. Naozaj milujem svoju prácu a komunikáciu s klientmi. Viem,
              ako urobiť Vašu pokožku mladú a zdravú.
            </p>
            <p>
              Rada Vám bezplatne poradím s mojimi službami a stavom Vašej pleti. Teším sa
              na Vás v mojom Salóne, ktorý sa nachádza v úplnom centre Bratislavy.
            </p>
            <p>
              V Beauty Salóne Natalia Kashyk veríme v krásu, ktorá prichádza z prírody a je
              podporená odbornou starostlivosťou. Naše služby sú navrhnuté tak, aby vám
              poskytli to najlepšie z oboch svetov – prírodných produktov a profesionálneho
              prístupu.
            </p>
            <ul className="about-checklist">
              <li>✓ Prírodné produkty</li>
              <li>✓ Profesionalita</li>
              <li>✓ Špeciálne ponuky</li>
              <li>✓ Konzultácie</li>
            </ul>
            <div className="about-buttons">
              <a
                href="https://www.fresha.com/a/natalia-kashyk-kozmeticka-bratislavsky-kraj-hodzovo-namestie-4-tatra-centr-rpegt4ih/booking?menu=true&dppub=true&offerItems=sv%3A6232085"
                className="btn btn-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rezervácia
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
