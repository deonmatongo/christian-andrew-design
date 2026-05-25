const IMG = 'https://images.unsplash.com'

const categories = [
  {
    num: 'Category 01',
    type: 'New Builds',
    title: 'Residential Construction',
    sub: '— Custom Homes · Extensions · Subdivisions',
    featured: true,
    img: `${IMG}/photo-1558618666-fcd25c85cd64?w=800&q=75&auto=format&fit=crop`,
    overlay: 'linear-gradient(135deg, rgba(196,70,23,0.70) 0%, rgba(139,47,13,0.86) 100%)',
  },
  {
    num: 'Category 02',
    type: 'Commercial',
    title: 'Commercial Builds',
    sub: '— Office · Retail · Mixed-Use',
    img: `${IMG}/photo-1487958449943-2429e8be8625?w=600&q=75&auto=format&fit=crop`,
    overlay: 'linear-gradient(160deg, rgba(26,26,26,0.30) 0%, rgba(26,26,26,0.70) 100%)',
  },
  {
    num: 'Category 03',
    type: 'Heavy Works',
    title: 'Industrial & Civil',
    sub: '— Warehouses · Infrastructure · Bridges',
    img: `${IMG}/photo-1431576901776-e539bd916ba2?w=600&q=75&auto=format&fit=crop`,
    overlay: 'linear-gradient(160deg, rgba(26,26,26,0.25) 0%, rgba(26,26,26,0.68) 100%)',
  },
  {
    num: 'Category 04',
    type: 'Restoration',
    title: 'Renovation & Fit-Out',
    sub: '— Heritage · Interiors · Structural Repair',
    img: `${IMG}/photo-1503387762-592deb58ef4e?w=600&q=75&auto=format&fit=crop`,
    overlay: 'linear-gradient(160deg, rgba(26,26,26,0.38) 0%, rgba(13,13,13,0.76) 100%)',
  },
  {
    num: 'Category 05',
    type: 'Pre-Build',
    title: 'Design & Engineering',
    sub: '— Structural Plans · Permits · PM',
    img: `${IMG}/photo-1541888946425-d81bb19240f5?w=600&q=75&auto=format&fit=crop`,
    overlay: 'linear-gradient(135deg, rgba(26,26,26,0.42) 0%, rgba(26,26,26,0.74) 100%)',
  },
]

export default function Projects() {
  return (
    <section className="projects reveal" id="projects">
      <div className="section-head">
        <div>
          <div className="section-num" style={{ color: 'var(--safety)' }}>02 — Portfolio</div>
          <h2>The full<br /><em>catalogue.</em></h2>
        </div>
        <p className="section-intro">
          A growing portfolio of built work across every sector — residential to industrial,
          bespoke homes to large-scale commercial developments. New completions are documented
          regularly as projects reach handover.
        </p>
      </div>

      <div className="project-grid">
        {categories.map((cat) => (
          <a
            href="#"
            className="project"
            key={cat.num}
            style={{
              backgroundImage: `${cat.overlay}, url(${cat.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
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
