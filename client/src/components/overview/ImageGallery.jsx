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
          <button className={startingIndex === 0 ? 'hidden upButton' : 'upButton'} onClick={() => setStartingIndex(startingIndex - 7)} disabled={startingIndex === 0}>{'^'}</button>
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
          <button className={startingIndex + 7 > lastIndex ? 'hidden downButton' : 'downButton'} onClick={() => setStartingIndex(startingIndex + 7)} disabled={startingIndex + 7 > lastIndex}>{'⌄'}</button>
        </div>

        <button className={imageIndex !== 0 ? 'leftButton' : 'hidden leftButton'} onClick={() => setImageIndex(imageIndex - 1)} disabled={imageIndex === 0}>{'<'}</button>
        <img className='image' src={Image} onClick={() => setExpandedImage(true)} />
        <button className={imageIndex + 1 < lastIndex ? 'rightButton' : 'hidden rightButton'} onClick={() => setImageIndex(imageIndex + 1)} disabled={imageIndex + 1 === lastIndex}>{'>'}</button>
      </div>


      <Modal isOpen={expandedImage} ariaHideApp={false} style={{ content: {position: 'absolute', height:'100vh', width: '95vw', 'align-items': 'center'}}}>
        {zoom ? <div className='zoom' onClick={() => setZoom(false)}><img className='zoomedImage' src={Image} /></div>
        :
        <><button className='closeButton' onClick={() => setExpandedImage(false)}>✖</button>
          <div className='expanded'>
            <button className={imageIndex !== 0 ? 'leftImage' : 'hidden leftImage'} onClick={() => setImageIndex(imageIndex - 1)} disabled={imageIndex === 0}>{'<'}</button>
            <img className='expandedImage' src={Image} onClick={() => setZoom(true)} />
            <button className={imageIndex + 1 < lastIndex ? 'rightImage' : 'hidden rightImage'} onClick={() => setImageIndex(imageIndex + 1)} disabled={imageIndex + 1 === lastIndex}>{'>'}</button>
          </div><div className='expandedGallery'>
              {images && images.map((image, index) => {
                if (image.url === Image) {
                  return (
                    <div className='selectedImage' key={index}>
                      <img className='expandedThumbNail' src={image.thumbnail_url} onClick={() => renderImage(image.url, index)} key={index}/>
                    </div>
                  )
                } else {
                  return (
                    <div key={index}>
                      <img className='expandedThumbNail' src={image.thumbnail_url} onClick={() => renderImage(image.url, index)} key={index}/>
                    </div>
                  )
                }
              })}
            </div>
        </>}
      </Modal>

    </div>
  )
}

export default ImageGallery;