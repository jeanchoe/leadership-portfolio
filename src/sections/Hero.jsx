import './Hero.css'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-grain"></div>

      <div className="container hero-inner">
        <div className="hero-meta">
          <span className="hero-meta-item">LEAD 495 · Spring 2026</span>
          <span className="hero-meta-divider">·</span>
          <span className="hero-meta-item">University of Washington</span>
        </div>

        <h1 className="hero-title fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="hero-title-line">A working theory</span>
          <span className="hero-title-line hero-title-italic">of leadership,</span>
          <span className="hero-title-line">in progress.</span>
        </h1>

        <div className="hero-bottom">
          <div className="hero-byline fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="hero-byline-name">Jean Choe</div>
            <div className="hero-byline-sub">
              Allen School of Computer Science<br />
              Leadership Minor, Class of 2026
            </div>
          </div>

          <a href="#introduction" className="hero-cta fade-up" style={{ animationDelay: '0.8s' }}>
            <span>Begin</span>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 6v20m0 0l-7-7m7 7l7-7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Decorative ornament SVG */}
      <svg className="hero-ornament" viewBox="0 0 600 100" preserveAspectRatio="none">
        <path d="M0,50 Q150,10 300,50 T600,50" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4"/>
        <path d="M0,55 Q150,95 300,55 T600,55" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.2"/>
      </svg>
    </header>
  )
}
