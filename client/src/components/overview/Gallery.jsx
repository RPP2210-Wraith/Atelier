import React, { useEffect } from "react";

const Gallery = ({ thumbNail, image, index, renderImage }) => {

  useEffect(() => {
    if (index === 0) {
      renderImage(image, index)
    }
  }, [])

  return (
    <div>
      <img className='thumbnail' src={thumbNail} onClick={() => renderImage(image, index)}/>
    </div>
  )
}

export default Gallery;