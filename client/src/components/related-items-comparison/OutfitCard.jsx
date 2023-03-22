import React from 'react';
import Comparison from './Comparison.jsx';
import fakeData from './fakeData.js';

const OutfitCard = () => {



  return (
    <div className='card outfitCard' data-testid='outfit-card'>
      <img></img>
      <h3>Title</h3>
      <p>Category</p>
      <p>Price</p>
      <img></img>
      <button>Remove</button>
    </div>
  )
}
export default OutfitCard;