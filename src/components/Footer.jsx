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
            A full-service construction and design firm specialising in residential, commercial,
            and industrial builds. Licensed, insured, and open for new projects.
          </p>
        </div>
        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Portfolio</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Residential</a></li>
            <li><a href="#services">Commercial</a></li>
            <li><a href="#services">Industrial &amp; Civil</a></li>
            <li><a href="#services">Renovation</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Recent Builds</h4>
          <ul>
            <li><a href="#">Downtown Commercial Plaza</a></li>
            <li><a href="#">Custom Residential Estate</a></li>
            <li><a href="#">Industrial Warehouse Complex</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 CHRISTIAN ANDREW CONSTRUCTION &amp; DESIGN · ALL RIGHTS RESERVED</div>
        <div className="cert-badges">
          <span className="cert-badge">LICENSED</span>
          <span className="cert-badge">INSURED</span>
          <span className="cert-badge">RESIDENTIAL</span>
          <span className="cert-badge">COMMERCIAL</span>
        </div>
      </div>
    </footer>
  )
}
