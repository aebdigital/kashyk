import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-main">
            <h3>Salón Natalia Kashyk</h3>
            <p>Váš priestor pre krásu a relax</p>
          </div>
          <div className="footer-contact">
            <h5>
              <a href="tel:0940235635">0940 235 635</a>
            </h5>
            <p>
              <a href="mailto:kashyknatalya@gmail.com">kashyknatalya@gmail.com</a>
            </p>
            <p style={{ marginTop: '10px' }}>
              <a
                href="https://www.facebook.com/natakosmeticka/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright-left">
            <p>Copyright Natalia Kashyk 2026</p>
          </div>
          <div className="footer-links-right">
            <p>
              <Link href="/ochrana-osobnych-udajov">Ochrana osobných údajov</Link> |{' '}
              <a href="https://aebdigital.sk" target="_blank" rel="noopener noreferrer">
                Tvorba stránky – AEB Digital
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
