import './Gallery.css'

// Photo imports — add Victoria's images to src/assets/gallery/ and import here
// import img1 from '../assets/gallery/event-1.jpg'
// Victoria's existing portfolio: Portfolio1–8 from fullmoonfetes.com

const photos = [
  { id: 1, alt: 'Pastel balloon garland with marquee number', src: null },
  { id: 2, alt: 'Custom themed cake topper', src: null },
  { id: 3, alt: 'Balloon column for birthday celebration', src: null },
  { id: 4, alt: 'Custom party favor bags and buttons', src: null },
  { id: 5, alt: 'Cherry themed balloon backdrop', src: null },
  { id: 6, alt: 'Cherry balloon centerpieces', src: null },
  { id: 7, alt: 'Event setup and balloon decoration', src: null },
  { id: 8, alt: 'Balloon installation process', src: null },
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
                {photo.src ? (
                  <img src={photo.src} alt={photo.alt} className="gallery-img" />
                ) : (
                  <div className="gallery-placeholder">
                    <span>{photo.alt}</span>
                  </div>
                )}
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
