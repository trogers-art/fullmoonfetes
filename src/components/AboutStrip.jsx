import { Link } from 'react-router-dom'
import logo from '../assets/logo-fmf.png'
import logoTravel from '../assets/logo-travel.png'
import './AboutStrip.css'

const credentials = [
  'B.S. Interior Design',
  '9 years in garment construction and design',
  'Certified travel advisor via Fora',
  'Orange County based — booking select events monthly',
]

export default function AboutStrip() {
  return (
    <section className="about-strip">
      <div className="about-visual">
        <img src={logo} alt="Full Moon Fetes" className="about-logo-main" />
        <div className="about-logo-divider" />
        <img src={logoTravel} alt="Travel Advisor" className="about-logo-travel" />
        <span className="about-visual-tag">Two brands. One vision.</span>
      </div>

      <div className="about-content">
        <span className="eyebrow">About Victoria</span>
        <h2 className="about-h2">
          Design background.<br />
          Mom of three.<br />
          <em>Built for this.</em>
        </h2>
        <p className="about-body">
          Victoria Rogers launched Full Moon Fetes after 9 years designing
          children's clothing and earning a degree in interior design. That
          precision and artistry shows up in every event she touches — from
          the spatial layout of a room to the textures chosen for a table.
        </p>
        <ul className="about-creds">
          {credentials.map((c) => (
            <li key={c}>
              <span className="cred-dot" />
              {c}
            </li>
          ))}
        </ul>
        <Link to="/about" className="btn-outline">Meet Victoria</Link>
      </div>
    </section>
  )
}
