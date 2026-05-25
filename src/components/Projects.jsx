const IMG = 'https://images.unsplash.com'

const categories = [
  {
    num: 'Category 01',
    type: 'New Builds',
    title: 'Residential Construction',
    sub: '— Custom Homes · Extensions · Subdivisions',
    featured: true,
    img: `${IMG}/photo-1558618666-fcd25c85cd64?w=800&q=70&auto=format&fit=crop`,
  },
  {
    num: 'Category 02',
    type: 'Commercial',
    title: 'Commercial Builds',
    sub: '— Office · Retail · Mixed-Use',
    img: `${IMG}/photo-1487958449943-2429e8be8625?w=600&q=70&auto=format&fit=crop`,
  },
  {
    num: 'Category 03',
    type: 'Heavy Works',
    title: 'Industrial &amp; Civil',
    sub: '— Warehouses · Infrastructure · Bridges',
    img: `${IMG}/photo-1431576901776-e539bd916ba2?w=600&q=70&auto=format&fit=crop`,
  },
  {
    num: 'Category 04',
    type: 'Restoration',
    title: 'Renovation &amp; Fit-Out',
    sub: '— Heritage · Interiors · Structural Repair',
    img: `${IMG}/photo-1503387762-592deb58ef4e?w=600&q=70&auto=format&fit=crop`,
  },
  {
    num: 'Category 05',
    type: 'Pre-Build',
    title: 'Design &amp; Engineering',
    sub: '— Structural Plans · Permits · PM',
    img: `${IMG}/photo-1541888946425-d81bb19240f5?w=600&q=70&auto=format&fit=crop`,
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
            style={{ backgroundImage: `url(${cat.img})` }}
          >
            {cat.featured && <div className="project-tag">FEATURED</div>}
            <div className="project-meta">
              <span>{cat.num}</span>
              <span>{cat.type}</span>
            </div>
            <div>
              <div className="project-title" dangerouslySetInnerHTML={{ __html: cat.title }} />
              <div className="project-sub">{cat.sub}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
