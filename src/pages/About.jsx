import { Link } from 'react-router-dom'
import headshot from '../assets/gallery/Victoria-Hero.jpeg'
import './About.css'

const credentials = [
  { label: 'Education', value: 'B.S. Interior Design' },
  { label: 'Background', value: '9 years in garment construction and design' },
  { label: 'Travel', value: 'Certified travel advisor via Fora' },
  { label: 'Location', value: 'Orange County, California' },
]

export default function About() {
  return (
    <>
      <section className="about-hero section">
        <div className="container about-hero-inner">
          <div className="about-hero-content">
            <span className="eyebrow">About Full Moon Fetes</span>
            <h1>Where creativity meets<br /><em>genuine care.</em></h1>
            <p>
              Hi, I'm Victoria — the creative force behind Full Moon Fetes.
              My journey into event planning has been anything but traditional,
              and that's exactly what makes it work.
            </p>
            <p>
              After spending 9 years designing and sewing children's clothing,
              earning my Bachelor's in Interior Design, and navigating life as
              a mom of three, I finally took the leap into event planning — a
              dream I had held close but never felt quite ready to pursue.
            </p>
            <p>
              Everything changed when my partner encouraged me to trust my
              creative abilities. That support gave me the confidence to launch
              Full Moon Fetes, where I bring together everything I love: the
              precision of sewing, the artistry of design, and the spatial
              magic of interior planning.
            </p>
            <p>
              As a homeschool mom, cheer mom, and DIY enthusiast based in
              Orange County, I understand the juggling act of life. That's
              exactly why I'm here — to take the stress off your plate and
              bring your vision to life.
            </p>
            <Link to="/contact" className="btn-primary" style={{ marginTop: '28px' }}>
              Work with me
            </Link>
          </div>

          <div className="about-hero-aside">
            <div className="about-photo-wrap">
              <img src={headshot} alt="Victoria Rogers" className="about-photo" />
            </div>
            <div className="about-cred-list">
              {credentials.map(({ label, value }) => (
                <div key={label} className="about-cred-item">
                  <span className="about-cred-label">{label}</span>
                  <span className="about-cred-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-philosophy section">
        <div className="container about-philosophy-inner">
          <span className="eyebrow">My approach</span>
          <h2>I don't just plan events.<br /><em>I create with compassion.</em></h2>
          <div className="about-philosophy-cols">
            <p>
              My creativity flows naturally — from my children's wonder, from
              the beauty of nature, and from a deep place within. This isn't
              simply a job for me. It's my outlet, my passion, and the place
              where all of my skills come together in a way that genuinely
              serves people.
            </p>
            <p>
              When you work with Full Moon Fetes, you're not just hiring an
              event planner. You're partnering with someone who genuinely
              cares about making your moment magical — and who has the
              background to back it up.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
