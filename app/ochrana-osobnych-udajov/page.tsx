import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ochrana osobných údajov | Salón Natalia Kashyk',
  description: 'Zásady ochrany osobných údajov kozmetického salónu Natalia Kashyk v Bratislave. Informácie o spracovaní cookies, kontaktného formulára a právach dotknutej osoby.',
  alternates: {
    canonical: 'https://www.nataliyakashyk.sk/ochrana-osobnych-udajov',
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar noScrollEffect />

      {/* Mobile Menu placeholder */}
      <div className="mobile-menu">
        <Link href="/" className="nav-link">Domov</Link>
        <Link href="/#about" className="nav-link">O nás</Link>
        <Link href="/#services" className="nav-link">Služby</Link>
        <Link href="/#contact" className="nav-link">Kontakt</Link>
        <Link href="/#contact" className="nav-link">Rezervácia</Link>
      </div>

      {/* Content Section */}
      <section style={{ paddingTop: '150px', minHeight: '80vh', padding: '150px 0 80px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem', color: 'var(--burgundy)' }}>Ochrana osobných údajov</h1>

            <div style={{ marginBottom: '2rem', fontFamily: "'Nunito Sans', sans-serif" }}>
              <p>
                <strong>Nataliya Kashyk</strong>
                <br />
                Bajkalská 18831/45G
                <br />
                82105 Bratislava-Ružinov
                <br />
                IČO: 51161541
                <br />
                DIČ: 3120192086
                <br />
                E-mail: kashyknatalya@gmail.com
                <br />
                Tel.: 0940 235 635
              </p>
              <p>
                Tieto Zásady ochrany osobných údajov (ďalej len „Zásady") popisujú, aké osobné
                údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných
                formulárov.
              </p>
            </div>

            <hr style={{ border: 0, borderTop: '1px solid var(--peach)', margin: '2rem 0' }} />

            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--burgundy)' }}>I. Kontaktný formulár</h2>
              <p>Na stránke www.nataliyakashyk.sk prevádzkujeme kontaktný formulár, ktorého účelom je umožniť vám:</p>
              <ul
                style={{
                  listStyleType: 'disc',
                  marginLeft: '20px',
                  color: 'var(--teal)',
                  fontFamily: "'Nunito Sans', sans-serif",
                  marginBottom: '1rem',
                }}
              >
                <li style={{ marginBottom: '0.5rem' }}>Položiť otázku k našim službám</li>
                <li style={{ marginBottom: '0.5rem' }}>Požiadať o rezerváciu termínu</li>
              </ul>

              <p><strong>Rozsah spracúvaných údajov:</strong></p>
              <ul
                style={{
                  listStyleType: 'disc',
                  marginLeft: '20px',
                  color: 'var(--teal)',
                  fontFamily: "'Nunito Sans', sans-serif",
                  marginBottom: '1rem',
                }}
              >
                <li style={{ marginBottom: '0.5rem' }}>Meno a priezvisko</li>
                <li style={{ marginBottom: '0.5rem' }}>E-mailová adresa</li>
                <li style={{ marginBottom: '0.5rem' }}>Telefónne číslo</li>
              </ul>

              <p>
                <strong>Účel spracovania:</strong>
                <br />
                Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.
              </p>

              <p>
                <strong>Právny základ:</strong>
                <br />
                Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.
              </p>

              <p>
                <strong>Doba uchovávania:</strong>
                <br />
                Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.
              </p>
            </div>

            <hr style={{ border: 0, borderTop: '1px solid var(--peach)', margin: '2rem 0' }} />

            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--burgundy)' }}>II. Súbory cookies</h2>
              <p>Na našej webovej stránke používame cookies výlučne na nasledujúce účely:</p>
              <ul
                style={{
                  listStyleType: 'disc',
                  marginLeft: '20px',
                  color: 'var(--teal)',
                  fontFamily: "'Nunito Sans', sans-serif",
                  marginBottom: '1rem',
                }}
              >
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Nevyhnutné cookies</strong> – zabezpečujú základnú funkčnosť stránky
                  (napr. ukladanie relácie, nastavení prehliadača).
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Štatistické (analytické) cookies</strong> – pomáhajú nám pochopiť, ako
                  návštevníci stránku používajú (nasadzujeme ich len so súhlasom používateľa).
                </li>
              </ul>
              <p>
                <strong>Správa súhlasov:</strong>
                <br />
                Používateľ môže kedykoľvek odvolať súhlas s využívaním štatistických cookies
                prostredníctvom nastavení cookie lišty alebo priamo v prehliadači.
              </p>
            </div>

            <hr style={{ border: 0, borderTop: '1px solid var(--peach)', margin: '2rem 0' }} />

            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--burgundy)' }}>III. Práva dotknutej osoby</h2>
              <p>Podľa nariadenia GDPR máte nasledujúce práva:</p>
              <ul
                style={{
                  listStyleType: 'disc',
                  marginLeft: '20px',
                  color: 'var(--teal)',
                  fontFamily: "'Nunito Sans', sans-serif",
                  marginBottom: '1rem',
                }}
              >
                <li style={{ marginBottom: '0.5rem' }}>
                  Prístup k osobným údajom, ktoré spracúvame
                </li>
                <li style={{ marginBottom: '0.5rem' }}>Oprava nepresných alebo neúplných údajov</li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Vymazanie („právo zabudnutia"), ak na spracovanie už nie je právny základ
                </li>
                <li style={{ marginBottom: '0.5rem' }}>Obmedzenie spracovania</li>
                <li style={{ marginBottom: '0.5rem' }}>Prenosnosť údajov</li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Odvolanie súhlasu – stane sa účinným dňom odvolania
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Podanie sťažnosti u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07
                  Bratislava, www.dataprotection.gov.sk)
                </li>
              </ul>
              <p>
                V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na{' '}
                <a href="mailto:kashyknatalya@gmail.com" style={{ color: 'var(--burgundy)' }}>
                  kashyknatalya@gmail.com
                </a>{' '}
                alebo telefónnom čísle{' '}
                <a href="tel:0940235635" style={{ color: 'var(--burgundy)' }}>
                  0940 235 635
                </a>
                .
              </p>
            </div>

            <hr style={{ border: 0, borderTop: '1px solid var(--peach)', margin: '2rem 0' }} />

            <p>Tieto Zásady nadobúdajú účinnosť dňom 16. 6. 2025.</p>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <Link href="/" className="btn btn-primary">
                Späť na úvod
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
