import { useState } from "react"
import "./Lightbox.css"

function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex)

  const prev = () => setCurrent((current - 1 + images.length) % images.length)
  const next = () => setCurrent((current + 1) % images.length)

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>
          &times;
        </button>
        <button className="lightbox-prev" onClick={prev}>
          &#10094;
        </button>
        <img src={images[current]} alt={`img ${current}`} />
        <button className="lightbox-next" onClick={next}>
          &#10095;
        </button>
      </div>
    </div>
  )
}

export default Lightbox