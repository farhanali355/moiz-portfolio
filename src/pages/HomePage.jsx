import React from 'react';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import WorkReflection from '../components/WorkReflection';
import ProcessSection from '../components/ProcessSection';
import QuotesSection from '../components/QuotesSection';
import PortfolioFAQ from '../components/PortfolioFAQ';
import TestimonialsSection from '../components/TestimonialsSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <WorkReflection />
      <ProcessSection />
      <QuotesSection />
      <TestimonialsSection />
      <PortfolioFAQ />
    </>
  );
};

export default HomePage;
