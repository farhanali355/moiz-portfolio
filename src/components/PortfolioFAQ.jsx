import React, { useState } from 'react';
import './PortfolioFAQ.css';

const faqData = [
  {
    question: "What exactly do you offer?",
    answer: "I design thumbnails and titles for creators who want to grow on YouTube. I also offer packaging consultation for creators who want help improving the overall presentation and first impression of their content."
  },
  {
    question: "What makes your approach different from other thumbnail designers?",
    answer: "A lot of designers focus on making thumbnails look good. I focus on making them work. My approach is built around the audience, the platform, and what actually gets attention. The goal is not just to make something attractive, but to make the viewer curious enough to click."
  },
  {
    question: "Do you only design thumbnails, or do you help with titles too?",
    answer: "I work on both thumbnails and titles, because strong packaging usually comes from how both work together. If you only need thumbnails, I can do that too. Pricing depends on whether you need thumbnails only or both thumbnails and titles."
  },
  {
    question: "How do you approach a new project before you start designing?",
    answer: "I start with research. I look into the niche, study what the audience responds to, and look at what is already working. From there, I build a concept that fits the audience, works in the niche, and still has room to stand out."
  },
  {
    question: "Do you offer revisions if something needs to be improved?",
    answer: "Yes. I am open with revisions and keep working until the client is satisfied. I do not charge extra for revisions."
  },
  {
    question: "Can you help improve packaging for videos that are already uploaded?",
    answer: "Yes, definitely. Updating old thumbnails and titles can make a big difference, especially on videos that already have strong potential. I highly recommend it when the content is good but the packaging is holding it back."
  },
  {
    question: "Do you offer packaging consultation without full design work?",
    answer: "Yes. If you only need consultation, we can get on a call and go through your audience, your content, and how your packaging can be improved to support better growth on your channel."
  },
  {
    question: "How long does the process usually take from brief to final delivery?",
    answer: "In most cases, I deliver the first draft within 48 hours. If the workload is lighter, sometimes it can be done within 24 hours. Revisions may take extra time depending on the project, but 48 hours is the usual turnaround for the first version."
  },
  {
    question: "Do you guarantee more views or better performance?",
    answer: "No one can honestly guarantee that. What I can say is that I am confident in the work I do, and in most cases the approach works well. If something does not land the way we want, we go back, improve the concept, and try again. That is part of the process."
  },
  {
    question: "How do you price your work?",
    answer: "Pricing depends on the creator, the type of work, and what exactly is needed. Once I understand your channel, your content, and your requirements, I can recommend the right setup and price it properly."
  },
  {
    question: "Why should I invest in packaging instead of just focusing on making better videos?",
    answer: "Because better content alone does not always get more views. On YouTube, people judge the video before they watch it. If the thumbnail and title do not make a strong first impression, the content may never get the chance it deserves. Packaging is what helps the right viewer stop, feel interested, and click."
  },
  {
    question: "What do you need from me before we start?",
    answer: "The more context you can share, the better. Ideally, I need the script or the video, a short summary of what it is about, and the main hook you want the packaging to reflect. Your photos, assets, and any useful input also help. I take care of most of the process, but clearer input always helps make the final result stronger."
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
            Here are the answers to some of the most common questions about packaging, YouTube growth, and how I work. If you do not find what you are looking for, feel free to reach out directly.
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
