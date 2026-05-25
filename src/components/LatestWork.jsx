const posts = [
  {
    num: '/01',
    title: 'Orlando Monument Moved to Beach Line & Semoran at MCO',
    desc: 'Relocation and reinstallation of a public monument at the Beach Line and Semoran Boulevard interchange near Orlando International Airport.',
  },
  {
    num: '/02',
    title: 'Modern House In A Box — Out Now',
    desc: 'A new Art‑O‑Mat vendable edition — miniature modern architecture packaged for the retrofitted vintage cigarette machine network.',
  },
  {
    num: '/03',
    title: 'Off‑Grid Modular Tree House Design & Construction',
    desc: 'A modular, self‑sufficient tree house built off the grid — from initial design through structural detailing and final construction.',
  },
]

export default function LatestWork() {
  return (
    <section className="services reveal" id="services">
      <div className="section-head">
        <div>
          <div className="section-num">01 — From The Studio</div>
          <h2>Latest<br /><em>work.</em></h2>
        </div>
        <p className="section-intro">
          Recent posts and project updates from the studio. The full Projects section is under active
          reconstruction — check back regularly as more works are added across architecture, sculpture,
          monuments, and graphic design.
        </p>
      </div>
      <div className="post-list">
        {posts.map((post) => (
          <a href="#" className="post-item" key={post.num}>
            <div className="post-num">{post.num}</div>
            <div className="post-title">{post.title}</div>
            <div className="post-desc">{post.desc}</div>
            <div className="post-cta">Continue Reading →</div>
          </a>
        ))}
      </div>
    </section>
  )
}
