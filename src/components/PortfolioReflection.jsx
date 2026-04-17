import React from 'react';
import './PortfolioReflection.css';

const row1Images = [
  '/1st-row-images/img-1.webp',
  '/1st-row-images/img-2.webp',
  '/1st-row-images/img-3.webp',
  '/1st-row-images/img-4.webp',
  '/1st-row-images/img-5.webp',
  '/1st-row-images/img-6.webp',
  '/1st-row-images/img-7.webp',
  '/1st-row-images/img-8.webp',
  '/1st-row-images/img-9.webp',
  '/1st-row-images/img-10.webp'
];

const row2Images = [
  '/2nd-row-images/img-1.webp',
  '/2nd-row-images/img-2.webp',
  '/2nd-row-images/img-3.webp',
  '/2nd-row-images/img-4.webp',
  '/2nd-row-images/img-5.webp',
  '/2nd-row-images/img-6.webp',
  '/2nd-row-images/img-7.webp',
  '/2nd-row-images/img-8.webp',
  '/2nd-row-images/img-9.webp',
  '/2nd-row-images/img-10.webp'
];

const row3Images = [
  '/3rd-row-images/img-1.webp',
  '/3rd-row-images/img-2.webp',
  '/3rd-row-images/img-3.webp',
  '/3rd-row-images/img-4.webp',
  '/3rd-row-images/img-5.webp',
  '/3rd-row-images/img-6.webp',
  '/3rd-row-images/img-7.webp',
  '/3rd-row-images/img-8.webp',
  '/3rd-row-images/img-9.webp',
  '/3rd-row-images/img-10.webp'
];

const MarqueeRow = ({ images, direction }) => (
  <div className={`p-reflection-marquee ${direction}`}>
    <div className="p-reflection-track">
      <div className="p-reflection-group">
        {images.map((src, idx) => (
          <div className="p-thumbnail-card" key={`pg1-${idx}`}>
            <img src={src} alt="Work showcase" loading="lazy" />
          </div>
        ))}
      </div>
      <div className="p-reflection-group" aria-hidden="true">
        {images.map((src, idx) => (
          <div className="p-thumbnail-card" key={`pg2-${idx}`}>
            <img src={src} alt="Work showcase" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PortfolioReflection = () => {
  return (
    <section className="p-work-reflection-section">
      
      {/* Background Layer: Full-Width Marquee Rows */}
      <div className="p-reflection-rows-container">
        <MarqueeRow images={row1Images} direction="left" />
        <MarqueeRow images={row2Images} direction="right" />
        <MarqueeRow images={row3Images} direction="left" />
      </div>

      {/* Global Vignette Overlay */}
      <div className="p-reflection-vignette-overlay"></div>

      {/* ForeGround Layer: Centered Decorative Frame & Header */}
      <div className="p-reflection-framed-overlay">
        <div className="p-reflection-header">
           <h2 className="p-reflection-title">A Reflection of the Work</h2>
           <a href="#contact" className="p-hire-btn">Hire me</a>
        </div>
      </div>

    </section>
  );
};

export default PortfolioReflection;
