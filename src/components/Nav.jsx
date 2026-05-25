export default function Nav() {
  return (
    <nav>
      <div className="logo">
        <span className="logo-mark"></span>
        CHRISTIAN<span style={{ color: 'var(--rust)' }}>/</span>ANDREW
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#clients">Clients</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#contact" className="nav-cta">Contact →</a>
    </nav>
  )
}
