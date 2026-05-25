function MarqueeContent() {
  return (
    <span>
      ARCHITECTURE<span className="marquee-dot"></span>
      ENGINEERING<span className="marquee-dot"></span>
      MONUMENTS<span className="marquee-dot"></span>
      SCULPTURE<span className="marquee-dot"></span>
      ART&#8209;O&#8209;MAT<span className="marquee-dot"></span>
      GRAPHIC DESIGN<span className="marquee-dot"></span>
    </span>
  )
}

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  )
}
