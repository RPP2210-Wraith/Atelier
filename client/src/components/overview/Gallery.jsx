import React, { useEffect } from "react";

const Gallery = ({ thumbNail, image, index, imageIndex, photos, renderImage, productID }) => {

  useEffect(() => {
    if ( index === imageIndex) {
      renderImage(image, index)
    }
  }, [photos])

  useEffect(() => {
    if ( index === 0) {
      renderImage(image, index)
    }
  }, [productID])

  return (
    <div>
      <img className='thumbNail' src={thumbNail} onClick={() => renderImage(image, index)}/>
    </div>
  )
}

export default Gallery;