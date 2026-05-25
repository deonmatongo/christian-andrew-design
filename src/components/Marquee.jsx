function MarqueeContent() {
  return (
    <span>
      CONSTRUCTION<span className="marquee-dot"></span>
      RESIDENTIAL<span className="marquee-dot"></span>
      COMMERCIAL<span className="marquee-dot"></span>
      INDUSTRIAL<span className="marquee-dot"></span>
      CIVIL ENGINEERING<span className="marquee-dot"></span>
      RENOVATION<span className="marquee-dot"></span>
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
