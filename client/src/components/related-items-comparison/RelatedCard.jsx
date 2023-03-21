import React from 'react';

const RelatedCard = ( { item, setProductID, handleClick }) => {



  return (
    <div className="card relatedCard" onClick={() => {setProductID(item.id)}}>
      <div>
      <img src={item.image} className="cardThumbs"></img>
      </div>
      <h3 className='cardText'>{item !== undefined ? item.name : 'Title' }</h3>
      <p>{item !== undefined ? item.category : 'Category'}</p>
      <p>{item !== undefined ? `$${item.price}` : 'Price'}</p>
      <button>Compare</button>

    </div>
  )
}
export default RelatedCard;