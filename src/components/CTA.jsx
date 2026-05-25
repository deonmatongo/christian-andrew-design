import { useState } from 'react'

// Sign up free at formspree.io, create a form, and paste your endpoint here
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function CTA() {
  const [fields, setFields] = useState({ name: '', email: '', project: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) =>
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      })
      if (res.ok) {
        setStatus('success')
        setFields({ name: '', email: '', project: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="cta-section reveal" id="contact">
      <div className="cta-inner">
        <div className="cta-left">
          <div className="section-num">04 — Begin Here</div>
          <h2>Have a project?<br /><em>Let&#8217;s talk.</em></h2>
          <p>
            Whether it&#8217;s a residential renovation, a commissioned sculpture, a monument
            installation, or an Art&#8209;O&#8209;Mat edition — send a note. Every inquiry
            receives a personal reply.
          </p>
          <div className="cta-buttons">
            <a href="#" className="btn-secondary">View Résumé</a>
          </div>
        </div>

        <div className="cta-right">
          {status === 'success' ? (
            <div className="form-success">
              <div className="form-success-mark">✓</div>
              <p className="form-success-title">Message received.</p>
              <p className="form-success-sub">
                Thank you — every inquiry gets a personal reply.
              </p>
              <button className="form-reset" onClick={() => setStatus('idle')}>
                Send another →
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Your name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={fields.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="Full name"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={fields.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="project">Project type</label>
                <select
                  id="project"
                  name="project"
                  value={fields.project}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select a discipline</option>
                  <option value="Architecture & Engineering">Architecture &amp; Engineering</option>
                  <option value="Monuments">Monuments</option>
                  <option value="Sculpture">Sculpture</option>
                  <option value="Art-O-Mat Edition">Art&#8209;O&#8209;Mat Edition</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={fields.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project — scope, timeline, location, budget…"
                />
              </div>

              {status === 'error' && (
                <p className="form-error">
                  Something went wrong. Please try again or email directly.
                </p>
              )}

              <button
                type="submit"
                className="form-submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending…' : 'Send Message →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
