import React from 'react';

const RelatedCard = ( { item }) => {
  return (
    <div className="card relatedCard">
      <img></img>
      <h3 className='cardText'>{item !== undefined ? item.name : 'Title' }</h3>
      <p>{item !== undefined ? item.category : 'Category'}</p>
      <p>{item !== undefined ? `$${item.price}` : 'Price'}</p>
      <img></img>
      <button>Compare</button>

    </div>
  )
}
export default RelatedCard;