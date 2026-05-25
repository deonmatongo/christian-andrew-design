import { useState, useMemo } from 'react'

const RATES = {
  'residential-new':  { low: 150, high: 280, label: 'Residential New Build' },
  'home-extension':   { low: 110, high: 220, label: 'Home Extension / Renovation' },
  'commercial':       { low: 200, high: 400, label: 'Commercial Build' },
  'industrial':       { low: 95,  high: 240, label: 'Industrial / Warehouse' },
  'civil':            { low: 175, high: 350, label: 'Civil / Infrastructure' },
  'design-only':      { low: 8000, high: 40000, label: 'Design & Engineering Only', flat: true },
}

const QUALITY = {
  standard: { mult: 1.0,  label: 'Standard' },
  premium:  { mult: 1.3,  label: 'Premium' },
  luxury:   { mult: 1.65, label: 'Luxury' },
}

const ADDONS = [
  { id: 'design',   label: 'Architectural Design & Drawings', pct: 0.10 },
  { id: 'engineer', label: 'Structural Engineering Package',  pct: 0.08 },
  { id: 'permits',  label: 'Permits & Approvals Management',  pct: 0.05 },
  { id: 'pm',       label: 'Full Project Management',         pct: 0.12 },
  { id: 'siteprep', label: 'Site Preparation & Earthworks',   pct: 0.07 },
]

const fmt = (n) => '$' + Math.round(n).toLocaleString()

export default function Calculator() {
  const [type, setType]       = useState('residential-new')
  const [sqft, setSqft]       = useState(2000)
  const [unit, setUnit]       = useState('sqft')
  const [quality, setQuality] = useState('standard')
  const [addons, setAddons]   = useState(new Set())

  const toggleAddon = (id) =>
    setAddons((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  const isFlat = RATES[type].flat

  const estimate = useMemo(() => {
    const rate     = RATES[type]
    const qualMult = QUALITY[quality].mult
    const addonPct = [...addons].reduce(
      (acc, id) => acc + (ADDONS.find((a) => a.id === id)?.pct ?? 0),
      0
    )
    if (rate.flat) {
      return { low: rate.low * (1 + addonPct), high: rate.high * (1 + addonPct) }
    }
    const areaSqft = unit === 'sqm' ? sqft * 10.764 : sqft
    return {
      low:  rate.low  * qualMult * areaSqft * (1 + addonPct),
      high: rate.high * qualMult * areaSqft * (1 + addonPct),
    }
  }, [type, sqft, unit, quality, addons])

  const sliderMin = unit === 'sqm' ? 50   : 500
  const sliderMax = unit === 'sqm' ? 5000 : 50000
  const sliderStep = unit === 'sqm' ? 50  : 500

  return (
    <section className="calc-section reveal" id="calculator">
      <div className="calc-head">
        <div className="section-num">04 — Cost Estimator</div>
        <h2>Get an<br /><em>estimate.</em></h2>
        <p className="calc-sub">
          Adjust the inputs below for a ballpark project cost. Every build is unique —
          contact us for a detailed, site-specific quote.
        </p>
      </div>

      <div className="calc-body">
        {/* ── Controls ── */}
        <div className="calc-controls">

          {/* Project type */}
          <div className="calc-field">
            <label>Project Type</label>
            <div className="calc-type-grid">
              {Object.entries(RATES).map(([key, r]) => (
                <button
                  key={key}
                  className={`calc-opt${type === key ? ' calc-opt--active' : ''}`}
                  onClick={() => setType(key)}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {/* Size slider */}
          {!isFlat && (
            <div className="calc-field">
              <label>
                Project Size
                <span className="calc-unit-toggle">
                  <button className={unit === 'sqft' ? 'active' : ''} onClick={() => { setUnit('sqft'); setSqft(2000) }}>sq ft</button>
                  <button className={unit === 'sqm'  ? 'active' : ''} onClick={() => { setUnit('sqm');  setSqft(200)  }}>sq m</button>
                </span>
              </label>
              <input
                type="range"
                min={sliderMin}
                max={sliderMax}
                step={sliderStep}
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                className="calc-slider"
              />
              <div className="calc-slider-labels">
                <span>{sliderMin.toLocaleString()}</span>
                <span className="calc-slider-val">{sqft.toLocaleString()} {unit === 'sqm' ? 'sq m' : 'sq ft'}</span>
                <span>{sliderMax.toLocaleString()}</span>
              </div>
            </div>
          )}

          {/* Finish quality */}
          {!isFlat && (
            <div className="calc-field">
              <label>Finish Quality</label>
              <div className="calc-quality">
                {Object.entries(QUALITY).map(([key, q]) => (
                  <button
                    key={key}
                    className={`calc-quality-btn${quality === key ? ' active' : ''}`}
                    onClick={() => setQuality(key)}
                  >
                    {q.label}
                    <span>{key === 'standard' ? 'Functional, code-compliant' : key === 'premium' ? 'Upgraded fixtures & finishes' : 'High-spec, bespoke detailing'}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add-on services */}
          <div className="calc-field">
            <label>Additional Services</label>
            <div className="calc-addons">
              {ADDONS.map((a) => (
                <label key={a.id} className="calc-addon">
                  <input
                    type="checkbox"
                    checked={addons.has(a.id)}
                    onChange={() => toggleAddon(a.id)}
                  />
                  <span className="calc-addon-label">{a.label}</span>
                  <span className="calc-addon-pct">+{(a.pct * 100).toFixed(0)}%</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* ── Result panel ── */}
        <div className="calc-result">
          <div className="calc-result-label">Estimated Cost Range</div>
          <div className="calc-result-range">
            <span className="calc-result-low">{fmt(estimate.low)}</span>
            <span className="calc-result-dash">—</span>
            <span className="calc-result-high">{fmt(estimate.high)}</span>
          </div>

          <div className="calc-result-meta">
            <div className="calc-result-type">{RATES[type].label}</div>
            {!isFlat && (
              <div className="calc-result-detail">
                {sqft.toLocaleString()} {unit === 'sqm' ? 'sq m' : 'sq ft'}
                {' · '}{QUALITY[quality].label} finish
                {addons.size > 0 && ` · ${addons.size} add-on${addons.size > 1 ? 's' : ''}`}
              </div>
            )}
          </div>

          {/* Breakdown */}
          {addons.size > 0 && (
            <div className="calc-breakdown">
              <div className="calc-breakdown-label">Add-ons included</div>
              {[...addons].map((id) => {
                const a = ADDONS.find((x) => x.id === id)
                return (
                  <div key={id} className="calc-breakdown-row">
                    <span>{a.label}</span>
                    <span>+{(a.pct * 100).toFixed(0)}%</span>
                  </div>
                )
              })}
            </div>
          )}

          <p className="calc-disclaimer">
            Estimates are indicative and based on typical U.S. market rates. Final pricing
            depends on site conditions, local material costs, labour market, and project
            complexity. Contact us for a binding quote.
          </p>
          <a href="#contact" className="btn-primary calc-cta">Request a Detailed Quote →</a>
        </div>
      </div>
    </section>
  )
}
