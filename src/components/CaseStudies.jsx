import React from 'react';
import './CaseStudies.css';

const caseStudiesData = [
  {
    id: 1,
    client: {
      name: 'Matthew Hussey',
      subs: '3.4M subscribers',
      avatar: 'https://i.pravatar.cc/150?img=33'
    },
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    helpTitle: 'How I helped them?',
    helpDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    results: [
      { img: '/1st-row-images/img-1.webp', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', score: '2.6x' },
      { img: '/1st-row-images/img-2.webp', title: 'Lorem ipsum dolor sit amet, consectetur.', score: '2.6x' }
    ]
  },
  {
    id: 2,
    client: {
      name: 'Matthew Hussey',
      subs: '3.4M subscribers',
      avatar: 'https://i.pravatar.cc/150?img=33'
    },
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    helpTitle: 'How I helped them?',
    helpDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    results: [
      { img: '/1st-row-images/img-1.webp', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', score: '2.6x' },
      { img: '/1st-row-images/img-2.webp', title: 'Lorem ipsum dolor sit amet, consectetur.', score: '2.6x' }
    ]
  }
];

const CaseStudies = () => {
  return (
    <section className="case-studies-section">
      <div className="case-studies-container">
        <h2 className="section-main-title">Testimonials & Case Studies</h2>
        
        <div className="case-studies-list">
          {caseStudiesData.map((study) => (
            <div className="case-study-card" key={study.id}>
              
              {/* Left Side: Testimonial */}
              <div className="card-left">
                <div className="client-header">
                  <img src={study.client.avatar} alt={study.client.name} className="client-avatar" />
                  <div className="client-meta">
                    <h4 className="client-name">{study.client.name}</h4>
                    <p className="client-subs">{study.client.subs}</p>
                  </div>
                </div>
                <blockquote className="testimonial-text">
                  "{study.quote}"
                </blockquote>
              </div>

              {/* Middle Divider */}
              <div className="card-divider-vertical"></div>

              {/* Right Side: Case Study */}
              <div className="card-right">
                <h3 className="help-title">{study.helpTitle}</h3>
                <p className="help-desc">{study.helpDesc}</p>
                
                <div className="results-gallery">
                  {study.results.map((res, idx) => (
                    <div className="result-item" key={idx}>
                      <div className="result-thumb-wrapper">
                        <img src={res.img} alt="Result" className="result-img" />
                      </div>
                      <p className="result-title">{res.title}</p>
                      <span className="result-score-badge">{res.score}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
