import React, { useRef, useEffect, useState } from 'react';
import './ProcessSection.css';

const steps = [
  {
    step: 'Step 1',
    title: 'Brief',
    desc: 'I start by understanding the video, the audience, and the result it needs to drive. Before anything gets made, the angle needs to be clear.',
    icon: <img src="/section-4-images/brief.webp" alt="Brief" className="step-img-icon" loading="lazy" />
  },
  {
    step: 'Step 2',
    title: 'Research',
    desc: 'I study the niche, the competition, and the patterns behind what gets clicked so the concept is built on real audience behavior.',
    icon: <img src="/section-4-images/research.webp" alt="Research" className="step-img-icon" loading="lazy" />
  },
  {
    step: 'Step 3',
    title: 'Design',
    desc: 'With the strategy in place, I turn the idea into packaging that feels clear, compelling, and hard to scroll past.',
    icon: <img src="/section-4-images/design.webp" alt="Design" className="step-img-icon" loading="lazy" />
  },
  {
    step: 'Step 4',
    title: 'Refine',
    desc: 'Good packaging gets stronger through refinement. We go back into the work, improve the weaker parts, and refine the final output until it lands the way it should.',
    icon: <img src="/section-4-images/refine.webp" alt="Refine" className="step-img-icon" loading="lazy" />
  },
  {
    step: 'Step 5',
    title: 'Optimize',
    desc: 'When needed, we create test variations to compare different packaging angles and see what earns the strongest response on YouTube.',
    icon: <img src="/section-4-images/optimize.webp" alt="Optimize" className="step-img-icon" loading="lazy" />
  }
];

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const [fillHeight, setFillHeight] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) {
            ticking = false;
            return;
          }
          
          const rect = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const triggerPoint = windowHeight * 0.65;
          
          let progress = ((triggerPoint - rect.top) / rect.height) * 100;
          progress = Math.max(0, Math.min(100, progress));
          
          setFillHeight(progress);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className="process-section" ref={sectionRef}>
      <div className="process-container">
        
        <div className="process-left">
          <div className="sticky-content">
            <span className="process-subtitle">How it works</span>
            <h2 className="process-title">Simple process.<br/>Serious results.</h2>
            <p className="process-description">
              Strong packaging does not start in Photoshop. It starts with understanding the video, the viewer, and what needs to be felt in the first second.
            </p>
          </div>
        </div>
        
        <div className="process-right">
           <div className="timeline-track">
              <div className="timeline-line-bg"></div>
              <div className="timeline-line-fill" style={{ height: `${fillHeight}%` }}></div>
           </div>
           
            <div className="steps-wrapper">
             {steps.map((step, i) => {
                const stepBase = i * 20;
                const isNumberActive = fillHeight >= (stepBase);
                const isHeadingActive = fillHeight >= (stepBase);
                const isDescActive = fillHeight >= (stepBase + 10);
                const isAnyActive = isNumberActive || isHeadingActive || isDescActive;

                return (
                  <div className={`step-item ${isAnyActive ? 'active' : ''}`} key={i}>
                     <div className="step-icon-wrapper">
                        {step.icon}
                   </div>
                   <div className="step-content">
                      <span className={`step-number ${isNumberActive ? 'reveal' : ''}`}>{step.step}</span>
                      <h3 className={`step-heading ${isHeadingActive ? 'reveal' : ''}`}>{step.title}</h3>
                      <p className={`step-info ${isDescActive ? 'reveal' : ''}`}>{step.desc}</p>
                   </div>
                </div>
              );
             })}
           </div>
        </div>
        
      </div>
    </section>
  );
};

export default ProcessSection;
