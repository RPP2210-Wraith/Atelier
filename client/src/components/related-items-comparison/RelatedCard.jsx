import React from 'react';
import { useState, useEffect } from 'react';
import Comparison from './Comparison.jsx';
import Modal from 'react-modal';

const RelatedCard = ( { item, setProductID, styleID, productID, handleClick }) => {
  const [ modalIsOpen, setModalIsOpen ] = useState(false)
  const closeModal = () => {
    setModalIsOpen(false);
  }


  return (
    <div className="card relatedCard" onClick={() => {setProductID(item.id)}}>
      <div>
      <img src={item.image} className="cardThumbs" alt='ProductImage'></img>
      </div>
      <p>{item !== undefined ? item.category : 'Category'}</p>
      <h3 className='cardText'>{item !== undefined ? item.name : 'Title' }</h3>
      <p>{item !== undefined ? `$${item.price}` : 'Price'}</p>
      <p>{`Rating: ${item.rating}`}</p>
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