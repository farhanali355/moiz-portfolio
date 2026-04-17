import React from 'react';
import './WorkReflection.css';

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
