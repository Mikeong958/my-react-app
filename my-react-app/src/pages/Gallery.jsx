import React, { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import "./Gallery.css"

const photos = [
  "/img1.jpeg",
  "/img2.jpeg",
  "/img3.jpeg",
  "/img4.jpeg",
  "/img5.jpeg",
  "/img6.jpeg",
  "/img7.jpeg",
  "/img8.jpeg",
  "/img9.jpeg",
  "/img10.jpeg",
  "/img11.jpeg",
  "/img12.jpeg",
]

export default function Gallery() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const rows = []
  let i = 0
  const pattern = [3, 2, 5]
  let patternIndex = 0

  while (i < photos.length) {
    const count = pattern[patternIndex % pattern.length]
    rows.push(photos.slice(i, i + count))
    i += count
    patternIndex++
  }

  return (
    <div className="gallery-container">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`row row-${row.length}`}
        >
          {row.map((src, i) => {
            const photoIndex = photos.indexOf(src)
            return (
              <img
                key={i}
                src={src}
                alt=""
                onClick={() => {
                  setIndex(photoIndex)
                  setOpen(true)
                }}
              />
            )
          })}
        </div>
      ))}

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={photos.map((src) => ({ src }))}
          index={index}
          onIndexChange={setIndex}
        />
      )}
    </div>
  )
}