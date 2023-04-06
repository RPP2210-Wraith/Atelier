import React from 'react';
import { useState, useEffect } from 'react';
import Comparison from './Comparison.jsx';
import Modal from 'react-modal';
import StarRatings from 'react-star-ratings';
import placeholder from '../../../../img/product-placeholder.jpg'

const RelatedCard = ( { item, setProductID, styleID, productID, handleClick, setStyleID }) => {
  const [ modalIsOpen, setModalIsOpen ] = useState(false)
  const closeModal = () => {
    setModalIsOpen(false);
  }
//console.log('item in relatedCard component: ', item);

  return (
    <div className="card relatedCard" onClick={modalIsOpen ? null : () => {setProductID(item.id); setStyleID(item.style_id) }}>
      <div className='cardImgContainer'>
      <img src={item.image || placeholder} className="cardThumbs" alt='ProductImage'></img>
      </div>
      <p>{item !== undefined ? item.category : 'Category'}</p>
      <h3 className='cardText'>{item !== undefined ? item.name : 'Title' }</h3>
      <p>{item !== undefined ? `$${item.price}` : 'Price'}</p>
      <StarRatings
        rating={parseFloat(item.rating)}
        starRatedColor="orange"
        numberOfStars={5}
        starDimension="20px"
        starSpacing="2px"
      />
      <button onClick={(e) => {e.stopPropagation(); setModalIsOpen(true)}}>⭐</button>

    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel='Product Comparison'
    >
      <Comparison
        product1={item}
        productID={productID}
        styleID={styleID}
      />

    </Modal>
    </div>
  )
}
export default RelatedCard;