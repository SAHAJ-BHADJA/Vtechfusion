import React from 'react';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/About';
import ServicesOverview from '../components/home/ServicesOverview';
import CaseStudiesPreview from '../components/home/CaseStudiesPreview';
import TestimonialsPreview from '../components/home/TestimonialsPreview';
import ContactCTA from '../components/home/ContactCTA';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesOverview />
      <CaseStudiesPreview />
      <TestimonialsPreview />
      <ContactCTA />
    </>
  );
};

export default Home;