import React from 'react';
import './PortfolioHero.css';

const PortfolioHero = () => {
  return (
    <section className="portfolio-hero">
      <div className="portfolio-hero-content">
        <h1 className="portfolio-hero-title">
          A Look At <br />
          <span className="highlight-gold-text">My Work</span>
        </h1>
        <p className="portfolio-hero-subtitle">
          Packaging built to make the right viewer stop, feel<br />
          something, and choose your video.
        </p>
      </div>

      <div className="portfolio-hero-divider"></div>
    </section>
  );
};

export default PortfolioHero;
