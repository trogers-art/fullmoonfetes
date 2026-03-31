import { Link } from 'react-router-dom'
import logo from '../assets/logo-fmf.png'
import headshot from '../assets/gallery/Victoria-Hero.jpg'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="eyebrow">Orange County, California</span>
        <h1 className="hero-h1">
          Every detail.<br />
          Every moment.<br />
          <em>Celebrated.</em>
        </h1>
        <p className="hero-sub">
          Full-service event planning, custom balloon decor, and travel design
          for every chapter of your life. Based in Orange County, booking
          select events monthly.
        </p>
        <div className="hero-btns">
          <Link to="/contact" className="btn-primary">Book a free consult</Link>
          <Link to="/gallery" className="btn-outline">View the gallery</Link>
        </div>
      </div>

      <div className="hero-right">
        <img src={headshot} alt="Victoria Rogers" className="hero-headshot" />
      </div>
    </section>
  )
}
