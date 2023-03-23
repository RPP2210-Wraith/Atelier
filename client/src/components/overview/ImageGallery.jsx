import React, { useEffect, useState } from "react";
import MainImage from './MainImage.jsx';
import Gallery from "./Gallery.jsx";

const ImageGallery = ({ photos, productID }) => {

  const [image, setImage] = useState('');
  const [imageIndex, setImageIndex] = useState(0);


  const renderImage = (image, index) => {
     setImage(image);
     setImageIndex(index)
  }

  return (
    <div className='imageGallery left'>
      <div className='gallery'>
        {photos && photos.map((image, index) => (
          <Gallery thumbNail={image.thumbnail_url} image={image.url} index={index} imageIndex={imageIndex} photos={photos} renderImage={renderImage} productID={productID} key={index}/>
        ))}
      </div>

      <img className='image' src={image} />

    </div>
  )
}

export default ImageGallery;