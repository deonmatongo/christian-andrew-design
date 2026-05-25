import { useState, useEffect, useRef } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <nav ref={navRef}>
      <div className="logo">
        <span className="logo-mark"></span>
        CHRISTIAN<span style={{ color: 'var(--rust)' }}>/</span>ANDREW
      </div>

      <ul className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
        <li><a href="#home" onClick={close}>Home</a></li>
        <li><a href="#projects" onClick={close}>Portfolio</a></li>
        <li><a href="#services" onClick={close}>Services</a></li>
        <li><a href="#about" onClick={close}>About</a></li>
        <li><a href="#contact" onClick={close}>Contact</a></li>
      </ul>

      <div className="nav-right">
        <a href="#contact" className="nav-cta">Contact →</a>
        <button
          className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
