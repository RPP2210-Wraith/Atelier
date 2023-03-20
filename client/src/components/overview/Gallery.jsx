import React, { useEffect } from "react";

const Gallery = ({ image, index, renderImage }) => {

  useEffect(() => {
    if (index === 0) {
      renderImage(image, index)
    }
  }, [])

  return (
    <div>
      <img className='thumbnail' src={image.thumbnail_url} onClick={() => renderImage(image, index)}/>
    </div>
  )
}

export default Gallery;