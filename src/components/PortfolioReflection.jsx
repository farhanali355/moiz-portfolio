import React from 'react';
import './PortfolioReflection.css';

const row1Images = [
  '/1st-row-images/img-1.jpg',
  '/1st-row-images/img-2.jpg',
  '/1st-row-images/img-3.jpg',
  '/1st-row-images/img-4.jpg',
  '/1st-row-images/img-5.jpg',
  '/1st-row-images/img-6.png',
  '/1st-row-images/img-7.jpg',
  '/1st-row-images/img-8.jpg',
  '/1st-row-images/img-9.jpg',
  '/1st-row-images/img-10.jpg'
];

const row2Images = [
  '/2nd-row-images/img-1.jpg',
  '/2nd-row-images/img-2.jpg',
  '/2nd-row-images/img-3.jpg',
  '/2nd-row-images/img-4.jpg',
  '/2nd-row-images/img-5.jpg',
  '/2nd-row-images/img-6.jpg',
  '/2nd-row-images/img-7.jpg',
  '/2nd-row-images/img-8.jpg',
  '/2nd-row-images/img-9.jpg',
  '/2nd-row-images/img-10.jpg'
];

const row3Images = [
  '/3rd-row-images/img-1.jpg',
  '/3rd-row-images/img-2.jpg',
  '/3rd-row-images/img-3.jpg',
  '/3rd-row-images/img-4.jpg',
  '/3rd-row-images/img-5.jpg',
  '/3rd-row-images/img-6.jpg',
  '/3rd-row-images/img-7.jpg',
  '/3rd-row-images/img-8.jpg',
  '/3rd-row-images/img-9.jpg',
  '/3rd-row-images/img-10.jpg'
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
