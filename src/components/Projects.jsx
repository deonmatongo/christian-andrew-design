const categories = [
  {
    num: 'Category 01',
    type: 'Built Work',
    title: 'Architecture & Engineering',
    sub: '— Residential · Commercial · Industrial',
    featured: true,
  },
  {
    num: 'Category 02',
    type: 'Public Works',
    title: 'Monuments',
    sub: '— Public & Commemorative',
  },
  {
    num: 'Category 03',
    type: 'Studio',
    title: 'Sculpture',
    sub: '— Commissioned & Self‑Directed',
  },
  {
    num: 'Category 04',
    type: 'Editions',
    title: 'Art‑O‑Mat House In A Box',
    sub: '— Vendable Art Pieces',
  },
  {
    num: 'Category 05',
    type: 'Visual',
    title: 'Graphic Design',
    sub: '— Identity · Print · Exhibition',
  },
]

export default function Projects() {
  return (
    <section className="projects reveal" id="projects">
      <div className="section-head">
        <div>
          <div className="section-num" style={{ color: 'var(--safety)' }}>02 — Project Archive</div>
          <h2>The full<br /><em>catalogue.</em></h2>
        </div>
        <p className="section-intro">
          A growing archive across every discipline the studio touches — built work and commissions,
          public and private, large and small. New pieces are being added regularly as the Projects
          section is rebuilt.
        </p>
      </div>
      <div className="project-grid">
        {categories.map((cat) => (
          <a href="#" className="project" key={cat.num}>
            {cat.featured && <div className="project-tag">FEATURED</div>}
            <div className="project-meta">
              <span>{cat.num}</span>
              <span>{cat.type}</span>
            </div>
            <div>
              <div className="project-title">{cat.title}</div>
              <div className="project-sub">{cat.sub}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
