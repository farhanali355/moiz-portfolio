import React from 'react';
import './TrustedBy.css';

const creators = [
  { name: 'Matthew Hussey', subs: '3.4M subscribers', img: '/trusted-by-images/Matthew-Hussey.webp' },
  { name: 'idea soup', subs: '104k subscribers', img: '/trusted-by-images/idea-soup.webp' },
  { name: 'spain revealed', subs: '310k subscribers', img: '/trusted-by-images/spain-revealed.webp' },
  { name: 'yomi denzel', subs: '1.45M subscribers', img: '/trusted-by-images/yumi-denzel.webp' },
  { name: 'henry hoops', subs: '354k subscribers', img: '/trusted-by-images/henry-hoops.webp' },
  { name: 'lewis jackson', subs: '157k subscribers', img: '/trusted-by-images/lewis-jackson.webp' },
  { name: 'dropping in podcast', subs: '123k subscribers', img: '/trusted-by-images/dropping-in-podcast.webp' },
  { name: 'lead gen jay', subs: '77.3k subscribers', img: '/trusted-by-images/lead-gen-jay.webp' },
  { name: 'mr bespecial', subs: '13.6k subscribers', img: '/trusted-by-images/mr-bespecial.webp' },
  { name: 'josh lyons sales', subs: '11.8k subscribers', img: '/trusted-by-images/josh-lyons-sales.webp' },
  { name: 'ole strand', subs: '7.07k subscribers', img: '/trusted-by-images/ole-strand.webp' },
];

const TrustedBy = () => {
  return (
    <section className="trusted-section">
      <div className="trusted-header">
        <h2>Trusted By</h2>
      </div>
      
      <div className="marquee-container">
        <div className="marquee-track">
          <div className="marquee-group">
            {[...creators, ...creators].map((creator, idx) => (
              <div className="creator-card" key={`group1-${idx}`}>
                <img src={creator.img} alt={creator.name} className="creator-avatar" />
                <div className="creator-info">
                  <h3>{creator.name}</h3>
                  <p>{creator.subs}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="marquee-group" aria-hidden="true">
            {[...creators, ...creators].map((creator, idx) => (
              <div className="creator-card" key={`group2-${idx}`}>
                <img src={creator.img} alt={creator.name} className="creator-avatar" />
                <div className="creator-info">
                  <h3>{creator.name}</h3>
                  <p>{creator.subs}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="divider-line"></div>

      <div className="problem-statement">
        <h2 className="main-heading">You can make better content every<br/>week and still feel stuck.</h2>
        <h3 className="sub-heading">Not because the video is bad.</h3>
        <p className="description">Because the packaging is not doing its job.</p>
        
        <div className="bullet-container">
          <ul className="bullet-points">
            <li><span className="dot"></span> No attention.</li>
            <li><span className="dot"></span> No curiosity.</li>
            <li><span className="dot"></span> No reason to click.</li>
          </ul>
        </div>
        
        <p className="conclusion">That is the gap I help close.</p>
      </div>
    </section>
  );
};

export default TrustedBy;
