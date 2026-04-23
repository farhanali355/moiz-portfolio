import React, { useState, useEffect } from 'react';
import { fetchChannelData } from '../utils/youtubeApi';
import './CaseStudies.css';

const caseStudiesData = [
  {
    id: 1,
    channelId: 'UC9HGzFGt7BLmWDqooUbWGBg', // Matthew Hussey
    client: {
      name: 'Matthew Hussey',
      subs: '3.4M subscribers',
      avatar: '/trusted-by-images/Matthew-Hussey.webp'
    },
    quote: "Moiz is great to work with! Communicative, creative and takes feedback really well. I would strongly recommend him!",
    helpTitle: 'How I helped them?',
    helpDesc: 'Helped Matthew scale his content reach by designing high-CTR thumbnails that capture the curiosity of a global audience.',
    results: [
      { img: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/bzYx2J6VBwU/hqdefault.jpg', title: '7 Signs He’s Not Into You', score: '3.1x' },
      { img: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/dyR_dMMLY6s/hqdefault.jpg', title: 'The Secret To Making Him Chase', score: '2.8x' }
    ]
  },
  {
    id: 2,
    channelId: 'UChgE6R4QauGAJAlYiJOcCGw', // Ali Abdaal
    client: {
      name: 'Yomi Denzel',
      subs: '5.4M subscribers',
      avatar: 'https://ui-avatars.com/api/?name=Yomi+Denzel&background=b9975b&color=fff'
    },
    quote: "Professional, skilled, and understands the psychology behind a click. Moiz transformed our packaging strategy.",
    helpTitle: 'How I helped them?',
    helpDesc: 'Collaborated on streamlining the study-focused content strategy, ensuring every thumbnail communicates value instantly.',
    results: [
      { img: 'https://img.youtube.com/vi/e8FT3vgUdX4/maxresdefault.jpg', title: 'How I Made 6075€ in 46 Days Dropshipping', score: '2.6x' },
      { img: 'https://img.youtube.com/vi/fDGRbDt5px0/maxresdefault.jpg', title: 'Cette IA va me Rendre Milliardaire', score: '3.4x' }
    ]
  }
];

const CaseStudyCard = ({ study }) => {
  const [clientInfo, setClientInfo] = useState({
    subscriberCount: study.client.subs,
    avatar: study.client.avatar
  });

  useEffect(() => {
    const getChannel = async () => {
      const data = await fetchChannelData(study.channelId);
      if (data) {
        setClientInfo({
          subscriberCount: data.subscriberCount + ' subscribers',
          avatar: data.avatar
        });
      }
    };
    getChannel();
  }, [study.channelId]);

  const channelUrl = `https://www.youtube.com/channel/${study.channelId}`;

  const extractVideoId = (url) => {
    const match = url.match(/vi\/([^\/\?\&]+)/);
    return match ? match[1] : null;
  };

  return (
    <div className="case-study-card">
      {/* Left Side: Testimonial */}
      <div className="card-left">
        <div
          className="client-header"
          onClick={() => window.open(channelUrl, '_blank')}
          style={{ cursor: 'pointer' }}
          title="Visit Channel"
        >
          <img src={clientInfo.avatar} alt={study.client.name} className="client-avatar" loading="lazy" referrerPolicy="no-referrer" />
          <div className="client-meta">
            <h4 className="client-name">{study.client.name}</h4>
            <p className="client-subs">{clientInfo.subscriberCount}</p>
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
          {study.results.map((res, idx) => {
            const videoId = extractVideoId(res.img);
            const videoUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : '#';

            return (
              <div className="result-item" key={idx}>
                <div
                  className="result-thumb-wrapper"
                  onClick={() => videoId && window.open(videoUrl, '_blank')}
                  style={{ cursor: videoId ? 'pointer' : 'default' }}
                  title={videoId ? "Watch Video" : ""}
                >
                  <img src={res.img} alt="Result" className="result-img" loading="lazy" referrerPolicy="no-referrer" />
                </div>
                <p className="result-title">{res.title}</p>
                <span className="result-score-badge">{res.score}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  return (
    <section className="case-studies-section">
      <div className="case-studies-container">
        <h2 className="section-main-title">Testimonials & Case Studies</h2>

        <div className="case-studies-list">
          {caseStudiesData.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
