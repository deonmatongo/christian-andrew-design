export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-mark"></span>
            CHRISTIAN<span style={{ color: 'var(--rust)' }}>/</span>ANDREW
          </div>
          <p>
            A multidisciplinary studio for architecture, engineering, monuments, sculpture,
            Art&#8209;O&#8209;Mat editions, and graphic design. Open for commissions and consultation.
          </p>
        </div>
        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Practice</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#clients">Clients</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Recent</h4>
          <ul>
            <li><a href="#">Orlando Monument</a></li>
            <li><a href="#">Modern House In A Box</a></li>
            <li><a href="#">Off&#8209;Grid Tree House</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 CHRISTIAN ANDREW DESIGN · ALL RIGHTS RESERVED</div>
        <div className="cert-badges">
          <span className="cert-badge">ARCHITECTURE</span>
          <span className="cert-badge">ENGINEERING</span>
          <span className="cert-badge">SCULPTURE</span>
          <span className="cert-badge">DESIGN</span>
        </div>
      </div>
    </footer>
  )
}
