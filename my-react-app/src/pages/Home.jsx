import React, { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

const photos = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
]

export default function Home() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Art Gallery</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {photos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Photo ${i}`}
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => {
              setIndex(i)
              setOpen(true)
            }}
          />
        ))}
      </div>

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
