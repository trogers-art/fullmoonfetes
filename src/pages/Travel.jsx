import { Link } from 'react-router-dom'
import logoTravel from '../assets/logo-travel.png'
import './Travel.css'

const offerings = [
  {
    title: 'Destination Events',
    desc: 'Planning an event away from home? Full Moon Fetes handles both the event logistics and the travel arrangements — so your guests arrive ready to celebrate.',
  },
  {
    title: 'Honeymoon Planning',
    desc: 'Your wedding day is just the beginning. Let Full Moon Fetes plan the trip that follows with the same care and attention to detail.',
  },
  {
    title: 'Group Travel',
    desc: 'Coordinating travel for a group is its own event. From family reunions to corporate retreats, we manage the details so everyone arrives together.',
  },
  {
    title: 'Family Vacations',
    desc: 'Curated travel experiences built around your family — your pace, your interests, your moments.',
  },
]

export default function Travel() {
  return (
    <>
      <section className="travel-hero section">
        <div className="container travel-hero-inner">
          <div>
            <span className="eyebrow">Travel Planning</span>
            <h1>Same care.<br /><em>Different destination.</em></h1>
            <p>
              Full Moon Fetes is a certified travel advisor through Fora, one
              of the leading host travel agencies in the country. That means
              access to exclusive rates, preferred partnerships, and a planner
              who already knows how to make every detail count.
            </p>
            <p>
              Whether you're planning a destination wedding, a family vacation,
              or a group retreat, Full Moon Fetes brings the same intentional
              approach to travel that it brings to every event.
            </p>
            <Link to="/contact" className="btn-primary" style={{ marginTop: '28px' }}>
              Start planning
            </Link>
          </div>
          <div className="travel-hero-aside">
            <img src={logoTravel} alt="Certified Travel Advisor via Fora" className="travel-logo" />
            <p className="travel-cert-note">
              Certified travel advisor via Fora
            </p>
          </div>
        </div>
      </section>

      <section className="travel-offerings section">
        <div className="container">
          <span className="eyebrow">What we plan</span>
          <h2 style={{ marginBottom: '40px' }}>Travel built around <em>your</em> life</h2>
          <div className="travel-grid">
            {offerings.map((o) => (
              <div key={o.title} className="travel-card">
                <div className="travel-card-rule" />
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="travel-cta-band">
        <div className="container travel-cta-inner">
          <h2>Ready to go somewhere?</h2>
          <p>Book a free consultation and let's start planning your trip.</p>
          <Link to="/contact" className="btn-primary">Book a consult</Link>
        </div>
      </section>
    </>
  )
}
