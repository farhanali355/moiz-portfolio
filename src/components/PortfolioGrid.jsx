import React, { useState, useEffect } from 'react';
import { fetchChannelData, fetchVideosData } from '../utils/youtubeApi';
import './PortfolioGrid.css';

const portfolioData = [
  { 
    id: 1, 
    category: 'Entrepreneurship',
    channelId: 'UCF6GGB7BLlWrH9kqVlfavJw', // Mr. BeSpecial
    videoIds: ['883tc309pY4', 'SALAnjuZgOQ', '0FBixMOkGX8'], 
    score: '3.1x',
    fallbackSubs: '14.4K',
    fallbackAvatar: 'https://ui-avatars.com/api/?name=Mr+BeSpecial&background=b9975b&color=fff',
    fallbackVideos: [
      { title: 'Starting a Clothing Brand 2026', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/R9U0X8Zz9o0/hqdefault.jpg' },
      { title: 'Full Course 2025', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/52-u12D55sM/hqdefault.jpg' },
      { title: 'How To Start a Clothing Brand', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/l7n6vV2Wv7k/hqdefault.jpg' }
    ]
  },
  { 
    id: 2, 
    category: 'Productivity',
    channelId: 'UC5TQ0_ORokxOHLcybp1QlNA', // Ali Abdaal
    videoIds: ['lz5hZPShRfk', 'PLFrC2QfnZA', 'DDGcd1JoJV0'], 
    score: '2.6x',
    fallbackSubs: '5.4M',
    fallbackAvatar: 'https://ui-avatars.com/api/?name=Ali+Abdaal&background=b9975b&color=fff',
    fallbackVideos: [
      { title: 'How To Study', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/yN0m8G6vH4c/hqdefault.jpg' },
      { title: 'How To Get Rich', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/4vI7P_tS7G8/hqdefault.jpg' },
      { title: 'Productivity Hacks', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/Hwybp38GnZw/hqdefault.jpg' }
    ]
  },
  { 
    id: 3, 
    category: 'Business',
    channelId: 'UCWIq0cNgdvQFHvKPx-EOj7w', // Iman Gadzhi
    videoIds: ['diwyxqgCVa4', 'm1a-yXjJE84', 'vP-Z5mxdFKU'], 
    score: '2.8x',
    fallbackSubs: '4.2M',
    fallbackAvatar: 'https://ui-avatars.com/api/?name=Iman+Gadzhi&background=b9975b&color=fff',
    fallbackVideos: [
      { title: 'The 7 Steps to $10,000/Month', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/zVfV_YhGf5Y/hqdefault.jpg' },
      { title: 'The Truth About Success', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/r6_9fK6f9r4/hqdefault.jpg' },
      { title: 'Dashboard Sales Guide', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/S8hR0mG0m0w/hqdefault.jpg' }
    ]
  },
  { 
    id: 4, 
    category: 'Finance',
    channelId: 'UCo1HWB7bmrjpscWdZ5Xx3Xw', // Lewis Jackson
    videoIds: ['hmgF5q2om4s', 'PM8Iiuwl1_0', 'MZBRs_nYc2A'], 
    score: '2.4x',
    fallbackSubs: '191K',
    fallbackAvatar: 'https://ui-avatars.com/api/?name=Lewis+Jackson&background=b9975b&color=fff',
    fallbackVideos: [
      { title: 'Does Ripple Owe Us An Explanation?', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/n4_2KjP-p0s/hqdefault.jpg' },
      { title: 'Control How Much You Make', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/X6h_pG7p_9Y/hqdefault.jpg' },
      { title: 'Portfolio Explode', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg' }
    ]
  },
  { 
    id: 5, 
    category: 'Education',
    channelId: 'UC9HGzFGt7BLmWDqooUbWGBg', 
    videoIds: ['dVmiI61HPoo', 'nE3LTuUVkO0', 'iLtZH9VhJ1A'], 
    score: '2.6x',
    fallbackSubs: '5.4M',
    fallbackAvatar: 'https://ui-avatars.com/api/?name=Ali+Abdaal&background=b9975b&color=fff',
    fallbackVideos: [
      { title: 'How To Study', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/yN0m8G6vH4c/hqdefault.jpg' },
      { title: 'How To Get Rich', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/4vI7P_tS7G8/hqdefault.jpg' },
      { title: 'Productivity Hacks', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/Hwybp38GnZw/hqdefault.jpg' }
    ]
  },
  { 
    id: 6, 
    category: 'Lifestyle',
    channelId: 'UCWCQQJqj0YFlKecTibshBcw', 
    videoIds: ['95eywuKOx_8', 'c8S1eVHEXIk', '8Zx2JGZ-Zkc'], 
    score: '2.6x',
    fallbackSubs: '5.4M',
    fallbackAvatar: 'https://ui-avatars.com/api/?name=Ali+Abdaal&background=b9975b&color=fff',
    fallbackVideos: [
      { title: 'How To Study', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/yN0m8G6vH4c/hqdefault.jpg' },
      { title: 'How To Get Rich', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/4vI7P_tS7G8/hqdefault.jpg' },
      { title: 'Productivity Hacks', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/Hwybp38GnZw/hqdefault.jpg' }
    ]
  },
  { 
    id: 7, 
    category: 'Productivity',
    channelId: 'UCmrU1HFPpy5DfUySK6okqEA', 
    videoIds: ['vnPyJKzmouw', 'Rd_paE2g3vI', 'i3c5jTRAD7M'], 
    score: '2.6x',
    fallbackSubs: '5.4M',
    fallbackAvatar: 'https://ui-avatars.com/api/?name=Ali+Abdaal&background=b9975b&color=fff',
    fallbackVideos: [
      { title: 'How To Study', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/yN0m8G6vH4c/hqdefault.jpg' },
      { title: 'How To Get Rich', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/4vI7P_tS7G8/hqdefault.jpg' },
      { title: 'Productivity Hacks', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/Hwybp38GnZw/hqdefault.jpg' }
    ]
  },
  { 
    id: 8, 
    category: 'Business',
    channelId: 'UCbKLRsBRSYDQwq8yd8C3ZYA', 
    videoIds: ['M2R8JnJRQsk', 'f3zVQLyNK-8', 'CR0jpbX3hjM'], 
    score: '2.6x',
    fallbackSubs: '5.4M',
    fallbackAvatar: 'https://ui-avatars.com/api/?name=Ali+Abdaal&background=b9975b&color=fff',
    fallbackVideos: [
      { title: 'How To Study', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/yN0m8G6vH4c/hqdefault.jpg' },
      { title: 'How To Get Rich', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/4vI7P_tS7G8/hqdefault.jpg' },
      { title: 'Productivity Hacks', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/Hwybp38GnZw/hqdefault.jpg' }
    ]
  },
  { 
    id: 9, 
    category: 'Education',
    channelId: 'UC5w7PvDYBl_c4Gb0KKNv_Hg', 
    videoIds: ['gTpfB_cJIi0', 'Dh5tJYMBsj4', '2yArlEBkU2E'], 
    score: '2.6x',
    fallbackSubs: '177K',
    fallbackAvatar: 'https://ui-avatars.com/api/?name=Ali+Abdaal&background=b9975b&color=fff',
    fallbackVideos: [
      { title: 'How To Study', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/yN0m8G6vH4c/hqdefault.jpg' },
      { title: 'How To Get Rich', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/4vI7P_tS7G8/hqdefault.jpg' },
      { title: 'Productivity Hacks', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/Hwybp38GnZw/hqdefault.jpg' }
    ]
  },
  { 
    id: 10, 
    category: 'Productivity',
    channelId: 'UChgE6R4QauGAJAlYiJOcCGw', 
    videoIds: ['8ar41FY08Cg', 'bxplJNS6RrE', 'MsKRKgt9EsQ'], 
    score: '2.6x',
    fallbackSubs: '5.4M',
    fallbackAvatar: 'https://ui-avatars.com/api/?name=Ali+Abdaal&background=b9975b&color=fff',
    fallbackVideos: [
      { title: 'How To Study', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/yN0m8G6vH4c/hqdefault.jpg' },
      { title: 'How To Get Rich', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/4vI7P_tS7G8/hqdefault.jpg' },
      { title: 'Productivity Hacks', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/Hwybp38GnZw/hqdefault.jpg' }
    ]
  },
  { 
    id: 11, 
    category: 'Education',
    channelId: 'UC7YNOkrvxfNxBUNemYy0CXQ', 
    videoIds: ['_teRs0Ym_R4', '4s9ylEq6dGU', 'kIyqbhKMz7I'], 
    score: '2.6x',
    fallbackSubs: '5.4M',
    fallbackAvatar: 'https://ui-avatars.com/api/?name=Ali+Abdaal&background=b9975b&color=fff',
    fallbackVideos: [
      { title: 'How To Study', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/yN0m8G6vH4c/hqdefault.jpg' },
      { title: 'How To Get Rich', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/4vI7P_tS7G8/hqdefault.jpg' },
      { title: 'Productivity Hacks', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/Hwybp38GnZw/hqdefault.jpg' }
    ]
  },
  { 
    id: 12, 
    category: 'Lifestyle',
    channelId: 'UCStI0_7liq3uTLz6ffh5Cow', 
    videoIds: ['6o5me-NqlN4', 'qkoQjz1jn2Q', 'm79EZXRhU9s'], 
    score: '2.6x',
    fallbackSubs: '5.4M',
    fallbackAvatar: 'https://ui-avatars.com/api/?name=Ali+Abdaal&background=b9975b&color=fff',
    fallbackVideos: [
      { title: 'How To Study', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/yN0m8G6vH4c/hqdefault.jpg' },
      { title: 'How To Get Rich', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/4vI7P_tS7G8/hqdefault.jpg' },
      { title: 'Productivity Hacks', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/Hwybp38GnZw/hqdefault.jpg' }
    ]
  },
  { 
    id: 13, 
    category: 'Productivity',
    channelId: 'UC7jcgE4Z23j4S4VeZeSy00Q', 
    videoIds: ['4tCubqoDfzk', 'Cr0zuchZ7_I', 'pASEuwNsU08'], 
    score: '2.6x',
    fallbackSubs: '5.4M',
    fallbackAvatar: 'https://ui-avatars.com/api/?name=Ali+Abdaal&background=b9975b&color=fff',
    fallbackVideos: [
      { title: 'How To Study', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/yN0m8G6vH4c/hqdefault.jpg' },
      { title: 'How To Get Rich', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/4vI7P_tS7G8/hqdefault.jpg' },
      { title: 'Productivity Hacks', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/Hwybp38GnZw/hqdefault.jpg' }
    ]
  },
  { 
    id: 14, 
    category: 'Education',
    channelId: 'UCwGIOXJKrVbXQG7GAxjHOVg', 
    videoIds: ['fB7TVuSrlAo', 'wfdySH-JuP4', 'mYTqap5LH90'], 
    score: '2.6x',
    fallbackSubs: '5.4M',
    fallbackAvatar: 'https://ui-avatars.com/api/?name=Ali+Abdaal&background=b9975b&color=fff',
    fallbackVideos: [
      { title: 'How To Study', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/yN0m8G6vH4c/hqdefault.jpg' },
      { title: 'How To Get Rich', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/4vI7P_tS7G8/hqdefault.jpg' },
      { title: 'Productivity Hacks', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/Hwybp38GnZw/hqdefault.jpg' }
    ]
  },
  { 
    id: 15, 
    category: 'Business',
    channelId: 'UCfms5wKq5s-l4lVQSqpJWGA', 
    videoIds: ['o4gWJdy3gss', 'JLIkTsBbj5A', 'byhex9yeQh8'], 
    score: '2.6x',
    fallbackSubs: '5.4M',
    fallbackAvatar: 'https://ui-avatars.com/api/?name=Ali+Abdaal&background=b9975b&color=fff',
    fallbackVideos: [
      { title: 'How To Study', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/yN0m8G6vH4c/hqdefault.jpg' },
      { title: 'How To Get Rich', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/4vI7P_tS7G8/hqdefault.jpg' },
      { title: 'Productivity Hacks', thumbnail: 'https://images.weserv.nl/?url=https://i.ytimg.com/vi/Hwybp38GnZw/hqdefault.jpg' }
    ]
  }
];

const PortfolioCard = ({ item }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [channelInfo, setChannelInfo] = useState({
    subscriberCount: item.fallbackSubs,
    avatar: item.fallbackAvatar
  });
  const [videosInfo, setVideosInfo] = useState(item.fallbackVideos);

  useEffect(() => {
    const getData = async () => {
      try {
        const channel = await fetchChannelData(item.channelId);
        const videos = await fetchVideosData(item.videoIds);
        
        if (channel) setChannelInfo(channel);
        if (videos && videos.length > 0) {
          const orderedVideos = item.videoIds.map((id, idx) => {
            const found = videos.find(v => v.id === id);
            return found ? {
              ...found,
              thumbnail: `https://images.weserv.nl/?url=${found.thumbnail.replace('https://', '')}`
            } : item.fallbackVideos[idx];
          });
          setVideosInfo(orderedVideos);
        }
      } catch (err) {
        console.error("API Error:", err);
      }
    };
    getData();
  }, [item]);

  const currentVideo = videosInfo[activeIdx] || item.fallbackVideos[activeIdx] || {};
  const youtubeUrl = `https://www.youtube.com/watch?v=${item.videoIds[activeIdx]}`;

  return (
    <>
      <div className="package-card">
        <div className="card-thumb-area" onClick={() => setIsModalOpen(true)} style={{ cursor: 'zoom-in' }}>
          <img 
            src={currentVideo.thumbnail || `https://images.weserv.nl/?url=https://i.ytimg.com/vi/${item.videoIds[activeIdx]}/hqdefault.jpg`} 
            alt="Thumbnail" 
            className="thumb-img" 
            referrerPolicy="no-referrer"
          />
          <button 
            className="arrow-float-btn" 
            onClick={(e) => {
              e.stopPropagation();
              window.open(youtubeUrl, '_blank');
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#604c1c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        </div>
 
        <div className="card-info-area">
          <div className="author-row">
            <img src={channelInfo.avatar} alt="Avatar" className="author-avatar" referrerPolicy="no-referrer" />
            <p className="author-text">{currentVideo.title}</p>
          </div>
          
          <div className="card-divider"></div>

          <div className="card-stats">
            <span className="stat-pill subs">{channelInfo.subscriberCount} subscribers</span>
            <span className="stat-pill score">{item.score}</span>
            <div className="stat-boxes">
              {['A', 'B', 'C'].map((label, idx) => (
                <span 
                  key={label} 
                  className={`stat-box ${activeIdx === idx ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIdx(idx);
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Simple Image Modal */}
      {isModalOpen && (
        <div 
          className="image-modal-overlay" 
          onClick={() => setIsModalOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            cursor: 'zoom-out'
          }}
        >
          <img 
            src={currentVideo.thumbnail?.replace('hqdefault', 'maxresdefault')} 
            alt="Full Size" 
            style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '12px', boxShadow: '0 0 30px rgba(0,0,0,0.5)' }}
            onError={(e) => { e.target.src = currentVideo.thumbnail }}
          />
          <button 
            onClick={() => setIsModalOpen(false)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              fontSize: '20px',
              fontWeight: 'bold'
            }}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

const PortfolioGrid = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Extract unique categories
  const categories = ['All', ...new Set(portfolioData.map(item => item.category))];

  const filteredData = selectedCategory === 'All' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === selectedCategory);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, filteredData.length));
  };

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(8);
  }, [selectedCategory]);

  return (
    <section className="portfolio-grid-section">
      <div className="portfolio-grid-container">
        
        <div className="portfolio-grid-header">
           <div className="header-text-center">
              <h2 className="grid-title">Video Packaging</h2>
              <p className="grid-desc">
           Take a look through some of the thumbnails and titles I’ve created, and get a feel for the kind of work I bring to creators. 
              </p>
           </div>
           <div className="header-filter-row">
              <div 
                className="category-dropdown-container"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button 
                  className={`category-select-btn ${isDropdownOpen ? 'active' : ''}`}
                >
                  {selectedCategory === 'All' ? 'Select Category' : selectedCategory}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                
                {isDropdownOpen && (
                  <div className="category-menu">
                    {categories.map(cat => (
                      <div 
                        key={cat} 
                        className={`category-item ${selectedCategory === cat ? 'selected' : ''}`}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {cat}
                      </div>
                    ))}
                  </div>
                )}
              </div>
           </div>
        </div>

        <div className="grid-wrapper">
          {filteredData.slice(0, visibleCount).map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

        {visibleCount < filteredData.length && (
          <div className="load-more-wrapper">
             <button className="load-more-btn" onClick={handleLoadMore}>
                Load More
             </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default PortfolioGrid;
