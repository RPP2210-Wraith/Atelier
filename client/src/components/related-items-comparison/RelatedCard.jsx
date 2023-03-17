import React from 'react';

const RelatedCard = ( { item }) => {
  return (
    <div className="card relatedCard">
      <div>
      <img src={item.image} className="cardThumbs"></img>
      </div>
      <img></img>
      <h3 className='cardText'>{item !== undefined ? item.name : 'Title' }</h3>
      <p>{item !== undefined ? item.category : 'Category'}</p>
      <p>{item !== undefined ? `$${item.price}` : 'Price'}</p>
      <button>Compare</button>

    </div>
  )
}
export default RelatedCard;