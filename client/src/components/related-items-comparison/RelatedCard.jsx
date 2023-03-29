import React from 'react';
import { useState, useEfect } from 'react';
import Comparison from './Comparison.jsx';

const RelatedCard = ( { item, setProductID, styleID, productID, handleClick }) => {
  const [ openModal, setOpenModal ] = useState(false)

  // const compare = () => {
  //   // Render Comparison with the correct items
  // }

  return (
    <div className="card relatedCard" onClick={() => {setProductID(item.id)}}>
      <div>
      <img src={item.image} className="cardThumbs"></img>
      </div>
      <h3 className='cardText'>{item !== undefined ? item.name : 'Title' }</h3>
      <p>{item !== undefined ? item.category : 'Category'}</p>
      <p>{item !== undefined ? `$${item.price}` : 'Price'}</p>
      <p>{`Rating: ${item.rating}`}</p>
      <button>Compare</button>


    </div>
  )
}
export default RelatedCard;