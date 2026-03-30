const items = [
  'Full Event Planning',
  'Balloon Decor',
  'Day-of Coordination',
  'Travel Design',
  'Orange County',
  'Certified via Fora',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}>
            <span className="marquee-item">{item}</span>
            <span className="marquee-sep">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
