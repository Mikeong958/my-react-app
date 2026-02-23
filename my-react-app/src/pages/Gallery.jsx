import React, { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import "./Gallery.css"

// 图片数组
const photos = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
]

export default function Gallery() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  // 生成交错排版 row
  let rows = []
  let i = 0
  const pattern = [3, 2] // 第一排 3 张，第二排 2 张循环
  let patternIndex = 0
  while (i < photos.length) {
    const count = pattern[patternIndex % 2]
    rows.push(photos.slice(i, i + count))
    i += count
    patternIndex++
  }

  return (
    <div className="gallery-container">
      {rows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className={`row ${row.length === 3 ? "three" : "two"}`}
        >
          {row.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Photo ${rowIdx}-${idx}`}
              onClick={() => {
                setIndex(rowIdx * pattern[0] + idx)
                setOpen(true)
              }}
            />
          ))}
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