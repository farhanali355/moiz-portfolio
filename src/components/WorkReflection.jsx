import React from 'react';
import './WorkReflection.css';

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
  <div className={`reflection-marquee ${direction}`}>
    <div className="reflection-track">
      <div className="reflection-group">
        {images.map((src, idx) => (
          <div className="thumbnail-card" key={`g1-${idx}`}>
            <img src={src} alt="Thumbnail work" loading="lazy" />
          </div>
        ))}
      </div>
      <div className="reflection-group" aria-hidden="true">
        {images.map((src, idx) => (
          <div className="thumbnail-card" key={`g2-${idx}`}>
            <img src={src} alt="Thumbnail work" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const WorkReflection = () => {
  return (
    <section className="work-reflection-section">
      <div className="reflection-container">
        <div className="reflection-header">
          <h2>A Reflection of the Work</h2>
        </div>
        
        <div className="reflection-rows">
          <MarqueeRow images={row1Images} direction="left" />
          <MarqueeRow images={row2Images} direction="right" />
          <MarqueeRow images={row3Images} direction="left" />
        </div>
      </div>
    </section>
  );
};

export default WorkReflection;
