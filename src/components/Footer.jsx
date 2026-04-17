import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSendEmail = (e) => {
    e.preventDefault(); // Prevents page reload
    if (email.trim() === '') return;
    
    // Triggers top popup alert
    setShowToast(true);
    setEmail(''); // Empties input
    
    // Automatically dismisses toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      {/* Top Floating Alert based on theme */}
      {showToast && (
        <div className="toast-alert">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b9975b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
             <polyline points="22 4 12 14.01 9 11.01"></polyline>
           </svg>
           <span>Email received successfully!</span>
        </div>
      )}
    <footer className="footer-section" id="contact">
      <div className="footer-container">
        
        {/* Top Header Text */}
        <div className="footer-header">
          <h2>
            Clicks aren't <span className="highlight-gold">bought.</span><br />
            They're <span className="highlight-gold">earned</span> in the first second<br />
            Let's design your first second <span className="highlight-gold">perfectly.</span>
          </h2>
          <button className="get-in-touch-btn">Get in touch</button>
        </div>

        {/* Social Cards Grid */}
        <div className="social-cards">
          
          {/* Whatsapp Card */}
          <a href="#" className="social-card">
            <div className="social-icon">
              <img src="/contact-icons/whatsapp.webp" alt="Whatsapp Icon" className="social-img-icon" />
            </div>
            <div className="social-info">
              <h4>Whatsapp</h4>
              <p>+92 - message me</p>
            </div>
            <div className="social-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dcdcdc" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </a>

          {/* Twitter / X Card */}
          <a href="#" className="social-card">
            <div className="social-icon">
              <img src="/contact-icons/twitter.webp" alt="Twitter/X Icon" className="social-img-icon" />
            </div>
            <div className="social-info">
              <h4>Twitter / x</h4>
              <p>@moizkiyani</p>
            </div>
            <div className="social-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dcdcdc" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a href="#" className="social-card">
            <div className="social-icon">
              <img src="/contact-icons/linkedin.webp" alt="LinkedIn Icon" className="social-img-icon" />
            </div>
            <div className="social-info">
              <h4>Linkedin</h4>{/* Exact spelling from image */}
              <p>Moiz kiyani</p>
            </div>
            <div className="social-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dcdcdc" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </a>

        </div>

        {/* Email Subscribe Container */}
        <form className="email-cta-box" onSubmit={handleSendEmail}>
          <div className="email-text">
            <span className="email-label">Email</span>
            <input 
              type="email" 
              placeholder="work@moizkiyani.com" 
              className="email-input" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="send-email-btn">Send an Email</button>
        </form>

      </div>

      {/* Footer Copyright Text */}
      <div className="footer-copyright">
        ©Copyright2026 @MOIZKIYANI - All Rights Reserved
      </div>
    </footer>
    </>
  );
};

export default Footer;
