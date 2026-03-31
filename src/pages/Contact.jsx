import { useEffect } from 'react'
import './Contact.css'

// Replace with Victoria's actual Calendly URL once set up
const CALENDLY_URL = 'https://calendly.com/party-fullmoonfetes/30min'

export default function Contact() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
  }, [])

  return (
    <>
      <section className="contact-hero section">
        <div className="container contact-hero-inner">
          <div className="contact-info">
            <span className="eyebrow">Get in touch</span>
            <h1>Let's make something<br /><em>unforgettable.</em></h1>
            <p>
              Book a free 15-minute consultation below. After booking, you'll
              receive a confirmation and a short questionnaire so Victoria can
              come prepared to talk through your event, vision, and budget.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <span className="contact-detail-label">Email</span>
                <a href="mailto:party@fullmoonfetes.com">party@fullmoonfetes.com</a>
              </div>
              <div className="contact-detail-item">
                <span className="contact-detail-label">Phone</span>
                <a href="tel:6269359661">(626) 935-9661</a>
              </div>
              <div className="contact-detail-item">
                <span className="contact-detail-label">Instagram</span>
                <a href="https://instagram.com/fullmoonfetes" target="_blank" rel="noreferrer">
                  @fullmoonfetes
                </a>
              </div>
              <div className="contact-detail-item">
                <span className="contact-detail-label">Service area</span>
                <span>Orange County, California</span>
              </div>
            </div>

            <p className="contact-note">
              Currently booking select events monthly to ensure personalized,
              quality service for each client.
            </p>
          </div>

          <div className="contact-calendly">
            <div
              className="calendly-inline-widget"
              data-url={CALENDLY_URL}
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>
      </section>
    </>
  )
}
