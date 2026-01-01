import Image from 'next/image';

export default function WhyUs() {
  return (
    <section className="why-us" style={{ backgroundColor: '#f9f9f9', padding: '10rem 0' }}>
      <div className="container">
        <div className="about-content" style={{ flexDirection: 'row-reverse' }}>
          <div className="about-image">
            <Image
              src="/preco-prave-my.jpeg"
              alt="Prečo práve my?"
              width={400}
              height={500}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="about-text">
            <h2>Prečo práve my?</h2>
            <p>
              V Beauty Salóne Natalia Kashyk veríme v krásu, ktorá prichádza z prírody a je
              podporená odbornou starostlivosťou. Naše služby sú navrhnuté tak, aby vám
              poskytli to najlepšie z oboch svetov – prírodných produktov a profesionálneho
              prístupu.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
              <li style={{ marginBottom: '10px' }}>✓ Prírodné produkty</li>
              <li style={{ marginBottom: '10px' }}>✓ Profesionalita</li>
              <li style={{ marginBottom: '10px' }}>✓ Špeciálne ponuky</li>
              <li style={{ marginBottom: '10px' }}>✓ Konzultácie</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
