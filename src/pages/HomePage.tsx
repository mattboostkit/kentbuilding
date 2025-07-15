import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import StatsSection from '../components/home/StatsSection';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import ContactCTA from '../components/home/ContactCTA';
import AccreditationsBanner from '../components/home/AccreditationsBanner';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Update document title and meta description
    document.title = 'Kent Building & Construction | Building Excellence Since 2008';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Kent Building & Construction - Specialist building services across Kent with over 20 years of experience. Period property restoration, home renovations, extensions, and oak framed buildings.');
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <StatsSection />
      <Services />
      <Testimonials />
      <About />
      <AccreditationsBanner />
      <ContactCTA />
    </>
  );
};

export default HomePage;