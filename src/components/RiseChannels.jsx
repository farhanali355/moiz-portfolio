import React, { useState } from 'react';
import './RiseChannels.css';

const channelsData = [
  {
    id: 'matthew',
    name: 'Matthew Hussey',
    avatar: 'https://i.pravatar.cc/150?img=33',
    subs: '3.4M subscribers',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    helpTitle: 'How I helped them?',
    helpDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    results: [
      { img: '/1st-row-images/img-1.jpg', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', score: '2.6x' },
      { img: '/1st-row-images/img-2.jpg', title: 'Lorem ipsum dolor sit amet, consectetur.', score: '2.6x' }
    ]
  },
  {
    id: 'yomi',
    name: 'Yomi Denzel',
    avatar: 'https://i.pravatar.cc/150?img=68',
    subs: '1.45M subscribers',
    quote: 'Working on these thumbnails changed the game. The attention to detail and psychology behind every pixel is unmatched.',
    helpTitle: 'How I helped them?',
    helpDesc: 'We focused on high-contrast storytelling that stops the scroll immediately in a competitive finance niche.',
    results: [
      { img: '/1st-row-images/img-3.jpg', title: 'Finance niche optimization', score: '3.1x' },
      { img: '/1st-row-images/img-4.jpg', title: 'CTR improvement analysis.', score: '2.8x' }
    ]
  },
  {
    id: 'henry',
    name: 'Henry Hoops',
    avatar: 'https://ui-avatars.com/api/?name=HH&background=111&color=fff',
    subs: '354K subscribers',
    quote: 'The growth was immediate. Finally, my thumbnails reflect the quality of my basketball analysis.',
    helpTitle: 'How I helped them?',
    helpDesc: 'Sports commentary requires fast-paced visual hooks. We delivered exactly that.',
    results: [
      { img: '/1st-row-images/img-5.jpg', title: 'Basketball niche growth', score: '2.2x' },
      { img: '/1st-row-images/img-6.png', title: 'Viewer retention visuals.', score: '2.5x' }
    ]
  }
];

const RiseChannels = () => {
  const [activeId, setActiveId] = useState('matthew');
  const activeChannel = channelsData.find(c => c.id === activeId);

  return (
    <section className="rise-channels-section">
      <div className="rise-channels-container">
        
        <h2 className="rise-section-title">
          Let's hear from some newer <br /> channels that are on the rise.
        </h2>

        {/* Navigation Pills */}
        <div className="channel-pills">
          {channelsData.map((channel) => (
            <button 
              key={channel.id}
              className={`channel-pill ${activeId === channel.id ? 'active' : ''}`}
              onClick={() => setActiveId(channel.id)}
            >
              <img src={channel.avatar} alt={channel.name} className="pill-avatar" />
              <span className="pill-name">{channel.name}</span>
            </button>
          ))}
        </div>

        {/* Display Card (reusing split-card style) */}
        <div className="rise-case-card">
              
              {/* Left Side: Testimonial */}
              <div className="rise-card-left">
                <div className="rise-client-header">
                  <img src={activeChannel.avatar} alt={activeChannel.name} className="rise-client-avatar" />
                  <div className="rise-client-meta">
                    <h4 className="rise-client-name">{activeChannel.name}</h4>
                    <p className="rise-client-subs">{activeChannel.subs}</p>
                  </div>
                </div>
                <blockquote className="rise-testimonial-text">
                  "{activeChannel.quote}"
                </blockquote>
              </div>

              {/* Middle Divider */}
              <div className="rise-card-divider-vertical"></div>

              {/* Right Side: Case Study */}
              <div className="rise-card-right">
                <h3 className="rise-help-title">{activeChannel.helpTitle}</h3>
                <p className="rise-help-desc">{activeChannel.helpDesc}</p>
                
                <div className="rise-results-gallery">
                  {activeChannel.results.map((res, idx) => (
                    <div className="rise-result-item" key={idx}>
                      <div className="rise-result-thumb-wrapper">
                        <img src={res.img} alt="Result" className="rise-result-img" />
                      </div>
                      <p className="rise-result-title">{res.title}</p>
                      <span className="rise-result-score-badge">{res.score}</span>
                    </div>
                  ))}
                </div>
              </div>

        </div>

      </div>
    </section>
  );
};

export default RiseChannels;
