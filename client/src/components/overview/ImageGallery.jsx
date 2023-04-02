import React, { useEffect, useState } from "react";
import Gallery from "./Gallery.jsx";
import Modal from 'react-modal';

const ImageGallery = ({ images, productID }) => {

  const [Image, setImage] = useState('');
  const [imageIndex, setImageIndex] = useState(0);

  const [startingIndex, setStartingIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);

  const [expandedImage, setExpandedImage] = useState(false);
  const [zoom, setZoom] = useState(false)

  useEffect(() => {
   setImageIndex(0);
   setStartingIndex(0);
  }, [productID])

  const renderImage = (image, index) => {
     setImage(image);
     setImageIndex(index)
  }

  return (
    <div className='left'>
      <div className='imageGallery' >
        <div className='gallery'>
          <button className='upButton' onClick={() => setStartingIndex(startingIndex - 7)} disabled={startingIndex === 0}>{'^'}</button>
          {images && images.slice(startingIndex, startingIndex + 7).map((image, index) => {
            if (image.url === Image) {
              return (
                <div className='selectedImage' key={index}>
                  <Gallery thumbNail={image.thumbnail_url} image={image.url} index={index} imageIndex={imageIndex} images={images} renderImage={renderImage} setLastIndex={setLastIndex} />
                </div>
              )
            } else {
              return (
                <div key={index}>
                  <Gallery thumbNail={image.thumbnail_url} image={image.url} index={index} imageIndex={imageIndex} images={images} renderImage={renderImage} setLastIndex={setLastIndex}/>
                </div>
              )
            }
          })}
          <button className='downButton' onClick={() => setStartingIndex(startingIndex + 7)} disabled={startingIndex + 7 > lastIndex}>{'⌄'}</button>
        </div>

        <button className='leftButton' onClick={() => setImageIndex(imageIndex - 1)} disabled={imageIndex === 0}>{'<'}</button>
        <img className='image' src={Image} onClick={() => setExpandedImage(true)} />
        <button className='rightButton' onClick={() => setImageIndex(imageIndex + 1)} disabled={imageIndex + 1 === lastIndex}>{'>'}</button>
      </div>


      <Modal isOpen={expandedImage} ariaHideApp={false} stle={{overlay: {position: 'fixed', top: 0, left: 0, width: '100vw', 'align-items': 'center'}, content: {position: 'absolute', top: 0, left: 0, width: '100vw'}}}>
        {zoom ? <div className='zoom' onClick={() => setZoom(false)}><img className='zoomedImage' src={Image} /></div>
        :
        <><div className='expanded'>
            <button className='leftImage' onClick={() => setImageIndex(imageIndex - 1)} disabled={imageIndex === 0}>{'<'}</button>
            <img className='expandedImage' src={Image} onClick={() => setZoom(true)} />
            <button className='rightImage' onClick={() => setImageIndex(imageIndex + 1)} disabled={imageIndex + 1 === lastIndex}>{'>'}</button>
            <button className='closeButton' onClick={() => setExpandedImage(false)}>✖</button>
          </div><div className='expandedGallery'>
              {images && images.map((image, index) => (
                <img className='expandedThumbNail' src={image.thumbnail_url} onClick={() => renderImage(image.url, index)} key={index}/>
              ))}
            </div></>}
      </Modal>

    </div>
  )
}

export default ImageGallery;