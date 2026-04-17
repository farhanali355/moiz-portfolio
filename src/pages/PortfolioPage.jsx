import React from 'react';
import PortfolioHero from '../components/PortfolioHero';
import PortfolioGrid from '../components/PortfolioGrid';
import CaseStudies from '../components/CaseStudies';
import RiseChannels from '../components/RiseChannels';
import PortfolioFAQ from '../components/PortfolioFAQ';
import PortfolioReflection from '../components/PortfolioReflection';

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <PortfolioHero />
      <PortfolioGrid />
      <CaseStudies />
      <RiseChannels />
      <PortfolioFAQ />
      <PortfolioReflection />
    </div>
  );
};

export default PortfolioPage;
