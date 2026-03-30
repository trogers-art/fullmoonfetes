import { Link } from 'react-router-dom'
import './ServicesGrid.css'

const services = [
  {
    num: '01',
    title: 'Full Event Planning',
    desc: 'Concept to execution. Vendors, budget, timeline, and day-of coordination. You show up and we handle the rest.',
    price: 'Starting at $2,500',
    link: '/services',
    featured: true,
  },
  {
    num: '02',
    title: 'Balloon Decor',
    desc: 'Custom garlands, arches, and statement installations. All rentals with setup and removal included.',
    price: 'Starting at $250',
    link: '/services',
    featured: false,
  },
  {
    num: '03',
    title: 'Travel Planning',
    desc: 'Destination events, honeymoons, and group travel. Certified travel advisor via Fora — same care, different setting.',
    price: 'Custom packages',
    link: '/travel',
    featured: false,
  },
]

export default function ServicesGrid() {
  return (
    <section className="svc-section section">
      <div className="container">
        <div className="svc-section-header">
          <div>
            <span className="eyebrow">What we offer</span>
            <h2>Services built around <em>your</em> moment</h2>
          </div>
          <Link to="/services" className="btn-outline">View all services</Link>
        </div>
        <div className="svc-grid">
          {services.map((s) => (
            <div key={s.num} className={`svc-card ${s.featured ? 'svc-card--featured' : ''}`}>
              <span className="svc-num">{s.num}</span>
              <div className="svc-rule" />
              <h3 className="svc-title">{s.title}</h3>
              <p className="svc-desc">{s.desc}</p>
              <span className="svc-price">{s.price}</span>
              <Link to={s.link} className="svc-cta">Learn more &rarr;</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
