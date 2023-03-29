import React from 'react';
import Comparison from './Comparison.jsx';


const OutfitCard = ({ item, remove, }) => {

 const removeItem = () => {remove(item.id, item.style)}

  const onSale = (item.salePrice ? true : false);

  return (
    <div className='card outfitCard'>
      <img src={item.image} className='cardThumbs'></img>
      <h3>{item.name}</h3>
      <p>{item.category}</p>
      <p className={ onSale? 'redStrikethrough' : '' }>{item.price}</p>
      <p>{item.salePrice}</p>
      <p>{`Rating: ${item.rating}`}</p>

      <img></img>
      <button onClick={removeItem}>Remove</button>
    </div>
  )
}
export default OutfitCard;
