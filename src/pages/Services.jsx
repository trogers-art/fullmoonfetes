import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  {
    num: '01',
    title: 'Full Event Planning',
    range: '$2,500 – $7,000',
    desc: 'From the first mood board to the last table cleared. Full Moon Fetes handles every detail so you can be present for every moment.',
    includes: [
      'Vendor sourcing and management',
      'Budget planning and tracking',
      'Timeline creation and execution',
      'Day-of coordination (full day)',
      'Setup supervision and problem-solving',
    ],
    ideal: 'Weddings, corporate events, milestone celebrations, and private parties.',
  },
  {
    num: '02',
    title: 'Day-of Coordination',
    range: '$1,200 – $2,000',
    desc: 'Already planned everything yourself? Let Full Moon Fetes execute your vision so you can actually enjoy your event.',
    includes: [
      'Up to 8 hours of coordination',
      'Vendor management and communication',
      'Timeline execution',
      'Setup and ceremony supervision',
      'Rehearsal add-on available',
    ],
    ideal: 'Couples and clients who have done the planning but want a professional on the ground.',
  },
  {
    num: '03',
    title: 'Balloon Decor',
    range: '$250 – $1,500+',
    desc: 'Custom balloon installations that transform your space. All rentals — Full Moon Fetes sets up and takes down everything.',
    includes: [
      'Design consultation',
      'Custom garlands and arches',
      'Columns, stacks, and backdrops',
      'Custom name and number designs',
      'Professional installation and removal',
    ],
    ideal: 'Birthday parties, baby showers, corporate events, and any celebration that needs a statement piece.',
  },
]

export default function Services() {
  return (
    <>
      <section className="svc-page-hero section">
        <div className="container">
          <span className="eyebrow">What we offer</span>
          <h1>Every service, every detail,<br /><em>every time.</em></h1>
          <p className="svc-page-sub">
            Full Moon Fetes is built around one idea: your event should feel
            effortless from your perspective. Here's how we make that happen.
          </p>
        </div>
      </section>

      <section className="svc-list section">
        <div className="container">
          {services.map((s, i) => (
            <div key={s.num} className="svc-item">
              <div className="svc-item-header">
                <span className="svc-item-num">{s.num}</span>
                <div>
                  <h2 className="svc-item-title">{s.title}</h2>
                  <span className="svc-item-range">{s.range}</span>
                </div>
              </div>
              <div className="svc-item-body">
                <div className="svc-item-left">
                  <p>{s.desc}</p>
                  <p className="svc-item-ideal"><strong>Ideal for:</strong> {s.ideal}</p>
                </div>
                <ul className="svc-item-includes">
                  <span className="eyebrow" style={{ marginBottom: '12px' }}>Includes</span>
                  {s.includes.map((item) => (
                    <li key={item}>
                      <span className="cred-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="svc-cta-band">
        <div className="container svc-cta-inner">
          <h2>Ready to start planning?</h2>
          <p>Book a free 15-minute consultation and let's talk through your event.</p>
          <Link to="/contact" className="btn-primary">Book a consult</Link>
        </div>
      </section>
    </>
  )
}
