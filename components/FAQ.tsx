'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Môžem si rezervovať konzultáciu pred procedúrou?',
    answer: 'Áno, konzultácia je u nás samozrejmosťou. Radi Vám poradíme s výberom tej najvhodnejšej procedúry pre Vašu pleť.',
  },
  {
    question: 'Ako funguje rezervácia termínu?',
    answer: 'Termín si môžete rezervovať telefonicky, e-mailom alebo cez náš online rezervačný systém kliknutím na tlačidlo Rezervácia.',
  },
  {
    question: 'Aké produkty používate pri svojich procedúrach?',
    answer: 'Pracujeme výhradne s certifikovanou a overenou kozmetikou najvyššej kvality, ktorá je šetrná k pleti a zabezpečuje viditeľné výsledky.',
  },
  {
    question: 'Čo mám robiť, ak meškám na svoj termín?',
    answer: 'Prosíme Vás, aby ste nás o meškaní informovali telefonicky. Pokúsime sa Vám vyhovieť, no v prípade dlhšieho meškania môže byť potrebné termín preobjednať.',
  },
  {
    question: 'Koľko trvá štandardná procedúra?',
    answer: 'Dĺžka procedúry závisí od typu ošetrenia. Základné ošetrenia trvajú približne 60 minút, komplexnejšie procedúry môžu trvať až 90 minút.',
  },
  {
    question: 'Je potrebné špeciálne sa pripraviť na procedúru?',
    answer: 'Pred väčšinou procedúr nie je potrebná špeciálna príprava. Pri niektorých ošetreniach Vám odporúčania poskytneme pri rezervácii.',
  },
  {
    question: 'Ponúkate darčekové poukazy?',
    answer: 'Áno, ponúkame darčekové poukazy na všetky naše služby. Sú ideálnym darčekom pre Vašich blízkych.',
  },
  {
    question: 'Aké platobné metódy akceptujete?',
    answer: 'Akceptujeme platby v hotovosti aj kartou. Pre Vaše pohodlie prijímame všetky bežné platobné karty.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" style={{ backgroundColor: '#f5f5f5', padding: '80px 0', overflow: 'visible' }}>
      <div className="container">
        <div className="services-header">
          <div className="services-text">
            <h2>Často kladené otázky</h2>
          </div>
        </div>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item-custom"
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <h4>{faq.question}</h4>
                <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="faq-cta faq-cta-dark" style={{ marginTop: '3rem' }}>
          <h3>Rezervácia vopred</h3>
          <p>Odporúčame sa rezervovať čo najskôr, z dôvodu vysokého záujmu</p>
          <a
            href="https://www.fresha.com/a/natalia-kashyk-kozmeticka-bratislavsky-kraj-hodzovo-namestie-4-tatra-centr-rpegt4ih/booking?menu=true&dppub=true&offerItems=sv%3A6232085"
            className="btn btn-white-bg-dark-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rezervácia
          </a>
        </div>
      </div>
    </section>
  );
}
