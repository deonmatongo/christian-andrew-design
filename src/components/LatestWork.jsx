const IMG = 'https://images.unsplash.com'

const posts = [
  {
    num: '/01',
    title: 'Downtown Commercial Plaza — Multi-Storey Steel & Concrete Build',
    desc: 'Design, engineering, and full construction of a six-storey mixed-use commercial plaza in the urban core — structural steel frame, precast concrete facade, and full MEP fit-out.',
    img: `${IMG}/photo-1487958449943-2429e8be8625?w=200&q=70&auto=format&fit=crop`,
  },
  {
    num: '/02',
    title: 'Custom Residential Estate — Luxury New Build from Ground Up',
    desc: 'Bespoke single-family estate from site clearance through to handover — custom floor plan, structural engineering, concrete slab, timber framing, and all finishes.',
    img: `${IMG}/photo-1560518883-ce09059eeffa?w=200&q=70&auto=format&fit=crop`,
  },
  {
    num: '/03',
    title: 'Industrial Warehouse Complex — Design-Build, 45,000 sq ft',
    desc: 'Full design-build delivery of a large-scale warehouse and distribution facility — tilt-up concrete construction, heavy crane bays, and fire-suppression systems throughout.',
    img: `${IMG}/photo-1504307651254-35680f356dfd?w=200&q=70&auto=format&fit=crop`,
  },
]

export default function LatestWork() {
  return (
    <section className="services reveal" id="services">
      <div className="section-head">
        <div>
          <div className="section-num">01 — Recent Builds</div>
          <h2>Latest<br /><em>work.</em></h2>
        </div>
        <p className="section-intro">
          Recent projects from the field. The full portfolio is actively updated — check back as
          we document completed builds across residential, commercial, and industrial construction.
        </p>
      </div>

      <div className="post-list">
        {posts.map((post) => (
          <a href="#" className="post-item" key={post.num}>
            <div className="post-thumb" style={{ backgroundImage: `url(${post.img})` }}>
              <span className="post-num">{post.num}</span>
            </div>
            <div className="post-title">{post.title}</div>
            <div className="post-desc">{post.desc}</div>
            <div className="post-cta">View Project →</div>
          </a>
        ))}
      </div>
    </section>
  )
}
