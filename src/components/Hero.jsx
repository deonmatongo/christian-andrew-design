export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-overlay" />
      </div>

      <div className="hero-content-left">
        <div className="hero-meta">
          <div>LICENSED &amp; INSURED · ACCEPTING NEW PROJECTS</div>
          <div>RESIDENTIAL · COMMERCIAL · INDUSTRIAL · CIVIL</div>
        </div>
        <h1>
          Designed,<br />
          <span className="outlined">engineered</span><br />
          <span className="accent">&amp; built</span><br />
          to last.
        </h1>
      </div>

      <div className="hero-side">
        <p>
          Christian Andrew Construction &amp; Design is a full-service construction firm delivering
          residential, commercial, and industrial builds — from initial design through final handover,
          every project personally managed to completion.
        </p>
        <div className="hero-disciplines">
          <div className="discipline-tag">
            <div className="discipline-tag-name">Residential<br />Construction</div>
            <div className="discipline-tag-label">Custom Homes ·<br />New Builds · Extensions</div>
          </div>
          <div className="discipline-tag">
            <div className="discipline-tag-name">Commercial<br />Builds</div>
            <div className="discipline-tag-label">Office · Retail ·<br />Warehouse · Fit-Out</div>
          </div>
          <div className="discipline-tag">
            <div className="discipline-tag-name">Industrial<br />&amp; Civil</div>
            <div className="discipline-tag-label">Infrastructure ·<br />Heavy Structures</div>
          </div>
          <div className="discipline-tag">
            <div className="discipline-tag-name">Design &amp;<br />Engineering</div>
            <div className="discipline-tag-label">Structural ·<br />Planning · Permits</div>
          </div>
        </div>
      </div>

      <div className="hero-tag-bottom">
        <div>[ DESIGNED · ENGINEERED · BUILT ]</div>
        <div className="scroll-indicator">SCROLL <span></span></div>
      </div>
    </section>
  )
}
