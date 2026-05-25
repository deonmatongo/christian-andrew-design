export default function Hero() {
  return (
    <section className="hero" id="home">
      <div>
        <div className="hero-meta">
          <div>STUDIO OPEN · ACCEPTING COMMISSIONS</div>
          <div>ARCHITECTURE · ENGINEERING · SCULPTURE · DESIGN</div>
        </div>
        <h1>
          Designed,<br />
          <span className="outlined">drafted</span><br />
          <span className="accent">&amp; built</span><br />
          to last.
        </h1>
      </div>
      <div className="hero-side">
        <p>
          The official site of Christian Andrew Design — a multidisciplinary studio working across
          residential, commercial, and industrial architecture, monuments, sculpture, Art&#8209;O&#8209;Mat
          editions, and graphic design.
        </p>
        <div className="hero-disciplines">
          <div className="discipline-tag">
            <div className="discipline-tag-name">Architecture<br />&amp; Engineering</div>
            <div className="discipline-tag-label">Residential ·<br />Commercial · Industrial</div>
          </div>
          <div className="discipline-tag">
            <div className="discipline-tag-name">Monuments<br />&amp; Sculpture</div>
            <div className="discipline-tag-label">Public Works ·<br />Studio Pieces</div>
          </div>
          <div className="discipline-tag">
            <div className="discipline-tag-name">Art&#8209;O&#8209;Mat<br />Editions</div>
            <div className="discipline-tag-label">Modern House<br />In A Box</div>
          </div>
          <div className="discipline-tag">
            <div className="discipline-tag-name">Graphic<br />Design</div>
            <div className="discipline-tag-label">Identity ·<br />Print · Exhibition</div>
          </div>
        </div>
      </div>
      <div className="hero-tag-bottom">
        <div>[ DESIGNED · DRAFTED · BUILT ]</div>
        <div className="scroll-indicator">SCROLL <span></span></div>
      </div>
    </section>
  )
}
