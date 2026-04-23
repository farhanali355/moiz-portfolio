import React, { useState, useEffect } from 'react';
import './QuotesSection.css';

const quotes = [
  { text: "Design is how it works.", author: "Steve Jobs" },
  { text: "Good design is as little as possible.", author: "Dieter Rams" },
  { text: "What you say in advertising is more important than how you say it.", author: "David Ogilvy" },
  { text: "Properly practiced creativity can make one ad do the work of ten.", author: "William Bernbach" },
  { text: "Design is really an act of communication.", author: "Donald A. Norman" },
  { text: "Good design is actually a lot harder to notice than poor design.", author: "Donald A. Norman" },
  { text: "If we are paying attention to something, it’s important.", author: "Robert Cialdini" },
  { text: "Marketing is no longer about the stuff you make, but about the stories you tell.", author: "Seth Godin" },
  { text: "Design is the silent ambassador of your brand.", author: "Paul Rand" },
  { text: "What you show is more important than what you say.", author: "David Ogilvy" },
];

const QuotesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  useEffect(() => {
    // Slower, smoother interval (now 3.5s so user can read before it slides gracefully)
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const getPositionClass = (index) => {
    let offset = (index - currentIndex) % quotes.length;
    if (offset < 0) offset += quotes.length;

    if (offset === 0) return 'quote-center';
    if (offset === 1) return 'quote-right-1';
    if (offset === 2) return 'quote-right-2';
    if (offset === quotes.length - 1) return 'quote-left-1';
    if (offset === quotes.length - 2) return 'quote-left-2';
    return 'quote-hidden';
  };

  return (
    <section className="quotes-section">
      <div className="quotes-divider-top"></div>

      <div className="quotes-container">
        {quotes.map((quote, idx) => (
          <div key={idx} className={`quote-card ${getPositionClass(idx)}`}>

            {/* The double-layered box effect you spotted in the design */}
            <div className="quote-card-inner">
              {/* 100% exact vector layout for the huge double quotes */}
              <svg className="quote-icon-svg" viewBox="0 0 44 34" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.0625 15.6875C19.0625 24.3125 13.9375 32.5625 4.875 34L0 28.5C5.8125 26.6875 8.4375 22.4375 8.4375 18.0625C8.4375 17.5 8.375 16.875 8.1875 16.3125C6.3125 16.6875 4.3125 16.125 2.875 14.8125C1.125 13.125 0.125 10.6875 0.125 8.1875C0.125 3.6875 3.8125 0 8.3125 0C14.1875 0 19.0625 4.875 19.0625 10.75V15.6875ZM43.4375 15.6875C43.4375 24.3125 38.3125 32.5625 29.25 34L24.375 28.5C30.1875 26.6875 32.8125 22.4375 32.8125 18.0625C32.8125 17.5 32.75 16.875 32.5625 16.3125C30.6875 16.6875 28.6875 16.125 27.25 14.8125C25.5 13.125 24.5 10.6875 24.5 8.1875C24.5 3.6875 28.1875 0 32.6875 0C38.5625 0 43.4375 4.875 43.4375 10.75V15.6875Z" />
              </svg>

              <p className="quote-text">"{quote.text}"</p>

              <div className="quote-divider">
                <div className="quote-divider-line"></div>
                <div className="quote-divider-star">✦</div>
                <div className="quote-divider-line"></div>
              </div>

              <h4 className="quote-author">{quote.author}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="quotes-divider-bottom"></div>
    </section>
  );
};

export default QuotesSection;
