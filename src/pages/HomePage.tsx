import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Portfolio from '../components/home/Portfolio';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import ContactCTA from '../components/home/ContactCTA';
import AccreditationsBanner from '../components/home/AccreditationsBanner';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Kent Building & Construction | Building Excellence Since 2008';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <AccreditationsBanner />
      <ContactCTA />
    </>
  );
};

export default HomePage;