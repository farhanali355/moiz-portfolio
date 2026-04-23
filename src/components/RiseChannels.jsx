import React, { useState, useEffect } from 'react';
import { fetchChannelData } from '../utils/youtubeApi';
import './RiseChannels.css';

const channelsData = [
  {
    id: 'matthew',
    channelId: 'UC9HGzFGt7BLmWDqooUbWGBg', // Matthew Hussey
    name: 'Matthew Hussey',
    avatar: '/trusted-by-images/Matthew-Hussey.webp',
    subs: '3.4M subscribers',
    quote: "Moiz is great to work with! Communicative, creative and takes feedback really well. I would strongly recommend him!",
    helpTitle: 'How I helped them?',
    helpDesc: 'Helped Matthew scale his content reach by designing high-CTR thumbnails that capture the curiosity of a global audience.',
    results: [
      { img: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/bzYx2J6VBwU/hqdefault.jpg', title: '7 Signs He’s Not Into You', score: '3.1x' },
      { img: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/dyR_dMMLY6s/hqdefault.jpg', title: 'The Secret To Making Him Chase', score: '2.8x' }
    ]
  },
  {
    id: 'yomi',
    channelId: 'UChgE6R4QauGAJAlYiJOcCGw', // Yomi Denzel (as per user ID)
    name: 'Yomi Denzel',
    avatar: 'https://ui-avatars.com/api/?name=Yomi+Denzel&background=b9975b&color=fff',
    subs: '5.4M subscribers',
    quote: "Professional, skilled, and understands the psychology behind a click. Moiz transformed our packaging strategy.",
    helpTitle: 'How I helped them?',
    helpDesc: 'Collaborated on streamlining the business-focused content strategy, ensuring every thumbnail communicates value instantly.',
    results: [
      { img: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/e8FT3vgUdX4/hqdefault.jpg', title: 'How I Made 6075€ in 46 Days Dropshipping', score: '2.6x' },
      { img: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/fDGRbDt5px0/hqdefault.jpg', title: 'Cette IA va me Rendre Milliardaire', score: '3.4x' }
    ]
  },
  {
    id: 'henry',
    channelId: 'UCWCQQJqj0YFlKecTibshBcw', // Henry Hoops
    name: 'Henry Hoops',
    avatar: '/trusted-by-images/henry-hoops.webp',
    subs: '1.2M subscribers',
    quote: "Moiz is my go-to Thumbnail Designer. He re-creates the vision perfectly and has increased his skills to stay up to date. Highly Recommend!",
    helpTitle: 'How I helped them?',
    helpDesc: 'Modernized the visual identity for Henry Hoops, using AI-enhanced design techniques to stay ahead of YouTube trends.',
    results: [
      { img: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/ZbgsfeOW3Vo/hqdefault.jpg', title: 'The Ultimate Guide to Henry Hoops', score: '2.9x' },
      { img: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/2pIqo-jgPEg/hqdefault.jpg', title: 'How We Scaled to 1M Subs', score: '3.2x' }
    ]
  }
];

const RiseChannelCard = ({ channel }) => {
  const [clientInfo, setClientInfo] = useState({
    subscriberCount: channel.subs,
    avatar: channel.avatar
  });

  useEffect(() => {
    const getChannel = async () => {
      const data = await fetchChannelData(channel.channelId);
      if (data) {
        setClientInfo({
          subscriberCount: data.subscriberCount + ' subscribers',
          avatar: data.avatar
        });
      }
    };
    getChannel();
  }, [channel.channelId]);

  const channelUrl = `https://www.youtube.com/channel/${channel.channelId}`;

  const extractVideoId = (url) => {
    const match = url.match(/vi\/([^\/\?\&]+)/);
    return match ? match[1] : null;
  };

  return (
    <div className="rise-case-card">
      {/* Left Side: Testimonial */}
      <div className="rise-card-left">
        <div 
          className="rise-client-header"
          onClick={() => window.open(channelUrl, '_blank')}
          style={{ cursor: 'pointer' }}
          title="Visit Channel"
        >
          <img src={clientInfo.avatar} alt={channel.name} className="rise-client-avatar" loading="lazy" referrerPolicy="no-referrer" />
          <div className="rise-client-meta">
            <h4 className="rise-client-name">{channel.name}</h4>
            <p className="rise-client-subs">{clientInfo.subscriberCount}</p>
          </div>
        </div>
        <blockquote className="rise-testimonial-text">
          "{channel.quote}"
        </blockquote>
      </div>

      {/* Middle Divider */}
      <div className="rise-card-divider-vertical"></div>

      {/* Right Side: Case Study */}
      <div className="rise-card-right">
        <h3 className="rise-help-title">{channel.helpTitle}</h3>
        <p className="rise-help-desc">{channel.helpDesc}</p>
        
        <div className="rise-results-gallery">
          {channel.results.map((res, idx) => {
            const videoId = extractVideoId(res.img);
            const videoUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : '#';

            return (
              <div className="rise-result-item" key={idx}>
                <div 
                  className="rise-result-thumb-wrapper"
                  onClick={() => videoId && window.open(videoUrl, '_blank')}
                  style={{ cursor: videoId ? 'pointer' : 'default' }}
                  title={videoId ? "Watch Video" : ""}
                >
                  <img src={res.img} alt="Result" className="rise-result-img" loading="lazy" referrerPolicy="no-referrer" />
                </div>
                <p className="rise-result-title">{res.title}</p>
                <span className="rise-result-score-badge">{res.score}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const RiseChannels = () => {
  const [activeId, setActiveId] = useState('matthew');
  const [fetchedAvatars, setFetchedAvatars] = useState({});
  const activeChannel = channelsData.find(c => c.id === activeId);

  useEffect(() => {
    // Fetch avatars for all channels to show in pills
    channelsData.forEach(async (channel) => {
      try {
        const data = await fetchChannelData(channel.channelId);
        if (data && data.avatar) {
          setFetchedAvatars(prev => ({
            ...prev,
            [channel.id]: data.avatar
          }));
        }
      } catch (err) {
        console.error("Error fetching avatar for pill:", channel.id, err);
      }
    });
  }, []);

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
              <img 
                src={fetchedAvatars[channel.id] || channel.avatar} 
                alt={channel.name} 
                className="pill-avatar" 
                loading="lazy" 
                referrerPolicy="no-referrer"
              />
              <span className="pill-name">{channel.name}</span>
            </button>
          ))}
        </div>

        <RiseChannelCard channel={activeChannel} />
      </div>
    </section>
  );
};

export default RiseChannels;
