import Image from 'next/image';

const services = [
  {
    title: 'Čistenie tváre',
    description: 'Hĺbkové čistenie tváre odstráni nečistoty a zanechá pleť sviežu a žiarivú.',
    image: '/cistenietvare.jpg',
  },
  {
    title: 'Chemický peeling',
    description: 'Chemický peeling obnovuje pleť odstránením odumretých buniek a podporuje regeneráciu pokožky.',
    image: '/chemickypealing.jpg',
  },
  {
    title: 'Masáž tváre',
    description: 'Relaxačná masáž tváre uvoľňuje napätie a zlepšuje krvný obeh v pokožke.',
    image: '/masaztvare.jpg',
  },
  {
    title: 'Procedúra PRX-T33',
    description: 'Inovatívna procedúra PRX-T33 zlepšuje textúru a pevnosť pleti bez použitia ihiel.',
    image: '/prx33.jpg',
  },
  {
    title: 'Karboxyterapia',
    description: 'Karboxyterapia zlepšuje vzhľad pokožky pomocou aplikácie oxidu uhličitého.',
    image: '/karboxyterapia.jpg',
  },
  {
    title: 'Mikroprúdová terapia',
    description: 'Mikroprúdová terapia využíva jemné elektrické impulzy na spevnenie a omladenie pleti.',
    image: '/mikropudrova-terapia.jpeg',
  },
  {
    title: 'Depilácia voskom',
    description: 'Depilácia voskom je účinná metóda odstránenia nežiaducich chĺpkov, ktorá zanecháva pokožku hladkú a jemnú až na niekoľko týždňov.',
    image: '/depilacia-voskom.jpg',
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <div className="services-text">
            <h2>Naše služby</h2>
            <p>
              Ponúkam všetky druhy ošetrovacích procedúr: čistenie tváre, chemický peeling,
              masáž tváre, krku, dekoltu, procedúru PRX-T33, mikroprúdovú terapiu,
              karboxyterapiu, farbenie obočia a mihalníc, laminovanie mihalníc, ako aj
              depiláciu celého tela voskom.
            </p>
          </div>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-background">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="service-overlay" />
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
