import React from 'react';
import Comparison from './Comparison.jsx';
import { useState } from 'react';


const OutfitCard = ({ item, remove, }) => {

  const removeItem = () => {remove(item.id, item.style)};
  const onSale = (item.salePrice ? true : false);

  return (
    <div className='card outfitCard'>
      <img src={item.image} className='cardThumbs' alt='Product Image'></img>
      <p>{item.category}</p>
      <h3>{item.name}</h3>
      <p className={ onSale? 'redStrikethrough' : '' }>{item.price}</p>
      <p>{item.salePrice}</p>
      <p>{`Rating: ${item.rating}`}</p>

      <img></img>
      <button onClick={removeItem}>❌</button>
    </div>
  )
}
export default OutfitCard;
