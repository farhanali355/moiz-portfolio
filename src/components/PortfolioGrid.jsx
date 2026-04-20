import React, { useState } from 'react';
import './PortfolioGrid.css';

const portfolioData = [
  { id: 1, img: '/1st-row-images/img-1.webp', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', avatar: 'https://i.pravatar.cc/150?img=11', subs: '3.4M subscribers', score: '2.6x' },
  { id: 2, img: '/1st-row-images/img-2.webp', title: 'Lorem ipsum dolor sit amet, consectetur.', avatar: 'https://i.pravatar.cc/150?img=12', subs: '3.4M subscribers', score: '2.6x' },
  { id: 3, img: '/1st-row-images/img-3.webp', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', avatar: 'https://i.pravatar.cc/150?img=13', subs: '2.4M subscribers', score: '2.5x' },
  { id: 4, img: '/1st-row-images/img-4.webp', title: 'Lorem ipsum dolor sit amet, sit amet.', avatar: 'https://i.pravatar.cc/150?img=14', subs: '3.4M subscribers', score: '2.6x' },
  { id: 5, img: '/1st-row-images/img-5.webp', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', avatar: 'https://i.pravatar.cc/150?img=15', subs: '3.4M subscribers', score: '2.6x' },
  { id: 6, img: '/1st-row-images/img-6.webp', title: 'Lorem ipsum dolor sit amet, consectetur.', avatar: 'https://i.pravatar.cc/150?img=16', subs: '3.4M subscribers', score: '2.0x' },
  { id: 7, img: '/1st-row-images/img-7.webp', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', avatar: 'https://i.pravatar.cc/150?img=17', subs: '3.4M subscribers', score: '2.6x' },
  { id: 8, img: '/1st-row-images/img-8.webp', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', avatar: 'https://i.pravatar.cc/150?img=18', subs: '3.4M subscribers', score: '2.6x' },
  { id: 9, img: '/1st-row-images/img-9.webp', title: 'Lorem ipsum dolor sit amet, sit amet.', avatar: 'https://i.pravatar.cc/150?img=19', subs: '3.4M subscribers', score: '2.6x' },
  { id: 10, img: '/2nd-row-images/img-1.webp', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', avatar: 'https://i.pravatar.cc/150?img=21', subs: '3.4M subscribers', score: '2.6x' },
  { id: 11, img: '/2nd-row-images/img-2.webp', title: 'Lorem ipsum dolor sit amet, consectetur.', avatar: 'https://i.pravatar.cc/150?img=22', subs: '3.4M subscribers', score: '2.6x' },
  { id: 12, img: '/2nd-row-images/img-3.webp', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', avatar: 'https://i.pravatar.cc/150?img=23', subs: '2.4M subscribers', score: '2.5x' },
];

const PortfolioGrid = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, portfolioData.length));
  };

  return (
    <section className="portfolio-grid-section">
      <div className="portfolio-grid-container">
        
        {/* Header Section */}
        <div className="portfolio-grid-header">
           <div className="header-text-center">
              <h2 className="grid-title">Video Packaging <br /> aka Thumbnails + Titles</h2>
              <p className="grid-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              </p>
           </div>
           <div className="header-filter-row">
              <button className="category-select-btn">
                Select Category
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
           </div>
        </div>

        {/* The Grid */}
        <div className="grid-wrapper">
          {portfolioData.slice(0, visibleCount).map((item) => (
            <div className="package-card" key={item.id}>
              <div className="card-thumb-area">
                <img src={item.img} alt="Thumbnail" className="thumb-img" loading="lazy" />
                <button className="arrow-float-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#604c1c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </button>
              </div>

              <div className="card-info-area">
                <div className="author-row">
                  <img src={item.avatar} alt="Avatar" className="author-avatar" loading="lazy" />
                  <p className="author-text">{item.title}</p>
                </div>
                
                <div className="card-divider"></div>

                <div className="card-stats">
                  <span className="stat-pill subs">{item.subs}</span>
                  <span className="stat-pill score">{item.score}</span>
                  <div className="stat-boxes">
                    <span className="stat-box">A</span>
                    <span className="stat-box">B</span>
                    <span className="stat-box">C</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < portfolioData.length && (
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
