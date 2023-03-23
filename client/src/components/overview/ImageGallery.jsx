import React, { useEffect, useState } from "react";
import MainImage from './MainImage.jsx';
import Gallery from "./Gallery.jsx";

const ImageGallery = ({ photos, productID }) => {
  // console.log(style)
  // const images = style.photos;
  // const [images, setImages] = useState([]);
  const [image, setImage] = useState('');
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    // setImages(Object.values(photos))
    // console.log('haha', images[imageIndex])
    // renderImage(images[imageIndex], imageIndex)
  }, [])

  const renderImage = (image, index) => {
     setImage(image);
     setImageIndex(index)
  }

  return (
    <div className='imageGallery left'>
      <div className='gallery'>
        {photos && photos.map((image, index) => (
          // <div key={index}>
          //   <img className='thumbNail' src={image.thumbnail_url} onClick={() => renderImage(image.url, index)}/>
          // </div>
          <Gallery thumbNail={image.thumbnail_url} image={image.url} index={index} imageIndex={imageIndex} photos={photos} renderImage={renderImage} productID={productID} key={index}/>
        ))}
      </div>

      <img className='image' src={image} />

     {/* <MainImage image={image} photos={photos} imageIndex={imageIndex} renderImage={renderImage} key={image}/> */}

    </div>
  )
}

export default ImageGallery;