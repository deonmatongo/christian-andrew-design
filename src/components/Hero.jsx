export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="hero-dot" />
          Licensed &amp; Insured &nbsp;·&nbsp; Accepting New Projects
          <span className="hero-dot" />
        </div>

        <h1>
          We build<br />
          <em className="hero-accent">what lasts.</em>
        </h1>

        <p className="hero-desc">
          Full-service construction from initial design through final handover —
          residential, commercial, and industrial builds personally managed at every stage.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn-hero-primary">View Our Portfolio →</a>
          <a href="#calculator" className="btn-hero-secondary">Get a Free Estimate</a>
        </div>
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-num">150+</div>
          <div className="hero-stat-label">Projects Delivered</div>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <div className="hero-stat-num">25</div>
          <div className="hero-stat-label">Years Experience</div>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <div className="hero-stat-num">$50M+</div>
          <div className="hero-stat-label">Built Value</div>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <div className="hero-stat-num">100%</div>
          <div className="hero-stat-label">On-Time Delivery</div>
        </div>
      </div>
    </section>
  )
}
