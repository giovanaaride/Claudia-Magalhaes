import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import About from './components/About';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/*<SocialProof />*/}
        <About />
        <Services />
        <WhyChoose />
        <CTA />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
