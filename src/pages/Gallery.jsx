import './Gallery.css'

import balloonArch1 from '../assets/gallery/balloon-arch-1.jpg'
import balloonArch2 from '../assets/gallery/balloon-arch-2.png'
import balloonArch3 from '../assets/gallery/balloon-arch-3.png'
import event1 from '../assets/gallery/event-1.jpg'
import event11 from '../assets/gallery/event-1-1.jpg'
import event12 from '../assets/gallery/event-1-2.jpg'
import event13 from '../assets/gallery/event-1-3.jpg'
import event14 from '../assets/gallery/event-1-4.jpg'
import event2 from '../assets/gallery/event-2.jpg'
import weddingInvites1 from '../assets/gallery/wedding-invites-1.png'
import weddingInvites2 from '../assets/gallery/wedding-invites-2.png'

const photos = [
  { id: 1,  src: balloonArch1,    alt: 'Custom balloon arch installation' },
  { id: 2,  src: balloonArch2,    alt: 'Balloon arch decor' },
  { id: 3,  src: balloonArch3,    alt: 'Balloon arch display' },
  { id: 4,  src: event1,          alt: 'Full event setup and decor' },
  { id: 5,  src: event11,         alt: 'Event decoration detail' },
  { id: 6,  src: event12,         alt: 'Event styling' },
  { id: 7,  src: event13,         alt: 'Event decor and planning' },
  { id: 8,  src: event14,         alt: 'Event installation' },
  { id: 9,  src: event2,          alt: 'Celebration setup' },
  { id: 10, src: weddingInvites1, alt: 'Custom wedding invitation design' },
  { id: 11, src: weddingInvites2, alt: 'Wedding stationery detail' },
]

export default function Gallery() {
  return (
    <>
      <section className="gallery-hero section">
        <div className="container">
          <span className="eyebrow">Our work</span>
          <h1>Every event tells<br /><em>a story.</em></h1>
          <p className="gallery-sub">
            A look at what Full Moon Fetes has created for clients across
            Orange County. Follow{' '}
            <a href="https://instagram.com/fullmoonfetes" target="_blank" rel="noreferrer">
              @fullmoonfetes
            </a>{' '}
            for the latest.
          </p>
        </div>
      </section>

      <section className="gallery-grid-section section">
        <div className="container">
          <div className="gallery-grid">
            {photos.map((photo) => (
              <div key={photo.id} className="gallery-item">
                <img src={photo.src} alt={photo.alt} className="gallery-img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gallery-ig-strip">
        <div className="container">
          <p>
            See more on Instagram{' '}
            <a href="https://instagram.com/fullmoonfetes" target="_blank" rel="noreferrer">
              @fullmoonfetes &rarr;
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
