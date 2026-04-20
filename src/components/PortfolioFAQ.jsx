import React, { useState } from 'react';
import './PortfolioFAQ.css';

const faqData = [
  {
    question: "Sed ut perspiciatis unde omnis iste natus?",
    answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae."
  },
  {
    question: "Sed ut perspiciatis unde omnis iste natus?",
    answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae."
  },
  {
    question: "Sed ut perspiciatis unde omnis iste natus?",
    answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae."
  },
  {
    question: "Sed ut perspiciatis unde omnis iste natus?",
    answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae."
  },
  {
    question: "Sed ut perspiciatis unde omnis iste natus?",
    answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae."
  },
  {
    question: "Sed ut perspiciatis unde omnis iste natus?",
    answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae."
  }
];

const PortfolioFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="portfolio-faq-section">
      <div className="portfolio-faq-container">
        
        {/* Left Column: Header */}
        <div className="faq-header-column">
          <span className="faq-label">Question</span>
          <h2 className="faq-main-title">Frequently Asked Questions</h2>
          <p className="faq-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        {/* Right Column: Accordion */}
        <div className="faq-accordion-column">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question-row">
                <h3 className="faq-question-text">{item.question}</h3>
                <div className="faq-icon-wrapper">
                  <svg 
                    width="20" height="20" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="faq-chevron"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              
              <div className="faq-answer-wrapper">
                <p className="faq-answer-text">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioFAQ;
