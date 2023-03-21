import React, { useEffect, useState } from "react";
import Gallery from './Gallery.jsx';

const ImageGallery = ({ style, displayImage }) => {

  const images = style.photos;

  const [image, setImage] = useState('');
  const [imageIndex, setImageIndex] = useState(0);

  // useEffect(() => {
  //   const images = style.photos;
  //   renderImage(images[imageIndex], imageIndex)
  // })

  const renderImage = (image, index) => {
     setImage(image)
  }

  return (
    <div className='imageGallery left'>
      <div className='gallery'>
        {images && images.map((image, index) => (
          <Gallery thumbNail={image.thumbnail_url} image={image.url} index={index} renderImage={renderImage} key={index}/>
        ))}
      </div>


      <img className='image' src={image} />


    </div>
  )
}

export default ImageGallery;