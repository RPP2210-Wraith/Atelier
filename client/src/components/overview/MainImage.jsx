import React, { useEffect } from "react";

const MainImage = ({ image, photos, imageIndex, renderImage }) => {
// console.log(photos[imageIndex])
  useEffect(() => {
    // renderImage(images[imageIndex].url, imageIndex)
  }, [])

  return (
    <>
      <img className='image' src={image} />
    </>
  )
}

export default MainImage;