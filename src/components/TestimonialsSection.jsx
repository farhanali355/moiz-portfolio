import React from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    text: "Moiz is great to work with! Communicative, creative and takes feedback really well. I would strongly recommend him!",
    name: "Matthew Hussey",
    date: "Jul 2025 - Sep 2025",
    avatar: "/trusted-by-images/Matthew-Hussey.webp"
  },
  {
    text: "Professional, skilled, great communication.",
    name: "Josh Lyons Sales",
    date: "Feb 2025 - Feb 2025",
    avatar: "/trusted-by-images/josh-lyons-sales.webp"
  },
  {
    text: "Does a great job!",
    name: "Mr. BeSpecial",
    date: "Oct 2024 - Dec 2025",
    avatar: "/trusted-by-images/mr-bespecial.webp"
  },
  {
    text: "Very talented thumbnail designer! Highly recommend.",
    name: "Lead Gen Jay",
    date: "May 2023 - Jul 2025",
    avatar: "/trusted-by-images/lead-gen-jay.webp"
  },
  {
    text: "I recently had the pleasure of working with Moiz, and I couldn't be more impressed! His exceptional skills as a thumbnail editor truly elevated my content. Each thumbnail he crafted was visually striking and perfectly captured the essence of my videos, significantly boosting viewer engagement. Moiz was professional, responsive to feedback, and delivered high-quality work ahead of schedule. If you'",
    name: "Lewis Jackson",
    date: "Aug 2022 - Jul 2024",
    avatar: "/trusted-by-images/lewis-jackson.webp"
  },
  {
    text: "Moiz is my go-to Thumbnail Designer for Henry Hoops. We've been working together for a while now. I come up with the design and angle I'm going for and Moiz re-creates the vision. He's always been communicative, reliable and has increased his design skills to stay up to date with Youtube + AI Highly Recommend!",
    name: "Henry Hoops",
    date: "Sep 2022 - Jul 2025",
    avatar: "/trusted-by-images/henry-hoops.webp"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>What They Say After<br />Working With me</h2>
      </div>

      <div className="testimonials-marquee">
        <div className="testimonials-track">
          <div className="testimonials-group">
            {testimonials.map((item, idx) => (
              <div className="testimonial-card" key={`group1-${idx}`}>
                <div className="stars">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="review-text">“{item.text}”</p>
                <div className="author-info">
                  <img src={item.avatar} alt={item.name} className="author-avatar" loading="lazy" />
                  <div className="author-details">
                    <h5 className="author-name">{item.name}</h5>
                    <span className="author-date">{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonials-group" aria-hidden="true">
            {testimonials.map((item, idx) => (
              <div className="testimonial-card" key={`group2-${idx}`}>
                <div className="stars">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="review-text">“{item.text}”</p>
                <div className="author-info">
                  <img src={item.avatar} alt={item.name} className="author-avatar" loading="lazy" />
                  <div className="author-details">
                    <h5 className="author-name">{item.name}</h5>
                    <span className="author-date">{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="testimonials-divider-bottom"></div>
    </section>
  );
};

export default TestimonialsSection;
