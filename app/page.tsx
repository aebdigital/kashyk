import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimationProvider from '@/components/AnimationProvider';

export default function Home() {
  return (
    <>
      <Navbar />
      <AnimationProvider>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </AnimationProvider>
      <Footer />
    </>
  );
}
