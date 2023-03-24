import React, { useEffect, useState } from "react";
import Gallery from "./Gallery.jsx";

const ImageGallery = ({ images, productID }) => {

  const [image, setImage] = useState('');
  const [imageIndex, setImageIndex] = useState(0);

  const [startingIndex, setStartingIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);

  const [expandedImage, setExpandedImage] = useState(false);

  useEffect(() => {
   setImageIndex(0);
   setStartingIndex(0);
  }, [productID])

  const renderImage = (image, index) => {
     setImage(image);
     setImageIndex(index)
  }

  return (
    <div className='imageGallery left'>
      {expandedImage ?
        <><button className='leftButton' onClick={() => setImageIndex(imageIndex - 1)} disabled={imageIndex === 0}>{'<'}</button>
        <img className='expandedImage' src={image} onClick={() => setExpandedImage(false)} />
        <button className='rightButton' onClick={() => setImageIndex(imageIndex + 1)} disabled={imageIndex + 1 === lastIndex}>{'>'}</button></>
      :
      <><div className='gallery'>
          <button className='upButton' onClick={() => setStartingIndex(startingIndex - 7)} disabled={startingIndex === 0}>{'^'}</button>
          {images && images.slice(startingIndex, startingIndex + 7).map((image, index) => {
            if (index === imageIndex) {
              return (
                <div className='selectedImage'>
                  <Gallery thumbNail={image.thumbnail_url} image={image.url} index={index} imageIndex={imageIndex} images={images} renderImage={renderImage} setLastIndex={setLastIndex} key={index} />
                </div>
              );
            } else {
              return <Gallery thumbNail={image.thumbnail_url} image={image.url} index={index} imageIndex={imageIndex} images={images} renderImage={renderImage} setLastIndex={setLastIndex} key={index} />;
            }
          })}
          <button className='downButton' onClick={() => setStartingIndex(startingIndex + 7)} disabled={startingIndex + 7 > lastIndex}>{'⌄'}</button>
        </div>

        <button className='leftButton' onClick={() => setImageIndex(imageIndex - 1)} disabled={imageIndex === 0}>{'<'}</button>
        <img className='image' src={image} onClick={() => setExpandedImage(true)} />
        <button className='rightButton' onClick={() => setImageIndex(imageIndex + 1)} disabled={imageIndex + 1 === lastIndex}>{'>'}</button></>
      }
    </div>
  )
}

export default ImageGallery;