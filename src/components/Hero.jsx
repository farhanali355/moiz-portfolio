import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const images = [
    '/hero-1.webp',
    // '/hero-2.webp',
    '/hero-3.webp',
    // '/hero-4.webp',
    '/hero-5.webp'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="text-highlight">Great videos get<br />
          ignored every day.</span><br />
          I make sure yours don't.
        </h1>
        <p className="hero-subtitle">
          Packaging built to make the right viewer stop, feel<br />
          something, and choose your video.
        </p>
        <div className="hero-cta">
          <Link to="/portfolio" className="btn-primary">See my work</Link>
          <a href="#contact" className="btn-secondary">Get in touch</a>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="card-stack">
          {images.map((src, idx) => {
            let offset = (idx - activeIndex + images.length) % images.length
            return (
              <div 
                key={idx} 
                className={`card offset-${offset}`}
              >
                <img src={src} alt="Portfolio thumbnail" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Hero



