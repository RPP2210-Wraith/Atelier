import React, { useEffect } from "react";

const Gallery = ({ thumbNail, image, index, imageIndex, images, renderImage, setLastIndex }) => {

  useEffect(() => {
    if (index === imageIndex) {
      renderImage(image, index)
    }
    setLastIndex(images.length)
  }, [images])

  useEffect(() => {
    if (index === imageIndex) {
      renderImage(image, index)
    }
  }, [imageIndex])

  return (
    <div>
      <img className='thumbNail' src={thumbNail} onClick={() => renderImage(image, index)}/>
    </div>
  )
}

export default Gallery;