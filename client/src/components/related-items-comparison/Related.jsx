import React from 'react';
import RelatedCard from './RelatedCard.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import helpers from './helpers.js'

const Related = ({ productID, setProductID }) => {
  // Handle loading with a user-friendly message
  const [ isLoading, setIsLoading ] = useState(true);
  const [ relatedItems, setRelatedItems ] = useState({});
  const [ startingIndex, setStartingIndex ] = useState(0);

  const { incrementCards } = helpers;
  const { decrementCards } = helpers;

  if (productID === 1) {
    productID = 71699
  }
  console.log('related items: ', relatedItems);
  console.log('productID: ', productID);


  const fetchRelatedItems = () => {
    setIsLoading(true);
    axios.get('/relatedItems', {
      params: {
        productID: productID
      }
    })
    .then((response) => {
      setRelatedItems(response.data);
    })
    .then(() => {
      setStartingIndex(0);
    })
    .then(() => {
      setIsLoading(!isLoading);
    })
  }

  // Retrieve related items whenever product ID updates
  useEffect(fetchRelatedItems, [productID]);

  // If still loading, render still loading message
  if (isLoading) {
    return (
      <div>
        <h3>Loading Related Items...</h3>
      </div>
    )
  } else {

    return (
      <div className='container'>
        <h3>Related Items:</h3>
        <div>
        <button
          onClick={() => {decrementCards(setStartingIndex)}}
          className={startingIndex !== 0 ?  '': 'hidden'}
          disabled={startingIndex !== 0 ?  false : true}>
            {'<'}
        </button>

        {
         relatedItems.slice(startingIndex, startingIndex + 4).map((item, i) => {
          return <RelatedCard
          item={item}
          key={i}
          id={item.id}
          setProductID={setProductID}
          handleClick={fetchRelatedItems}
          />
         })

        }
        <button
          onClick={() => {incrementCards(setStartingIndex)}}
          className={relatedItems[startingIndex + 4] !== undefined ? '': 'hidden'}
          disabled= {relatedItems[startingIndex + 4] !== undefined ? false : true}
        >
            {'>'}
        </button>
        </div>
      </div>
    )

  }
}

export default Related;