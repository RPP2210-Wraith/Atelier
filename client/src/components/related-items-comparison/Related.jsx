import React from 'react';
import RelatedCard from './RelatedCard.jsx';
import Comparison from './Comparison.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import helpers from './helpers.js';


const Related = ({ productID, setProductID, styleID }) => {
  // Handle loading with a user-friendly message
  const [ isLoading, setIsLoading ] = useState(true);
  const [ relatedItems, setRelatedItems ] = useState({});
  const [ startingIndex, setStartingIndex ] = useState(0);

  const { incrementCards } = helpers;
  const { decrementCards } = helpers;

  // Need to fix inside App and remove this; default value of 1 was useless

  const fetchRelatedItems = () => {
    console.log('productID inside Related USEeFFECT: ', productID)
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
      setIsLoading(false);
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
        <div id='relatedContainer'>
        <button
          onClick={() => {decrementCards(setStartingIndex)}}
          className={startingIndex !== 0 ?  '': 'hidden'}
          disabled={startingIndex !== 0 ?  false : true}>
            {'<'}
        </button>
        <div className='cardContainer'>
        {
         relatedItems.slice(startingIndex, startingIndex + 4).map((item, i) => {
          return <RelatedCard
          item={item}
          key={i}
          id={item.id}
          setProductID={setProductID}
          handleClick={fetchRelatedItems}
          productID={productID}
          styleID={styleID}
          />
         })
        }

        </div>
        <button
          onClick={() => {incrementCards(setStartingIndex)}}
          className={relatedItems[startingIndex + 4] !== undefined ? '': 'hidden'}
          disabled= {relatedItems[startingIndex + 4] !== undefined ? false : true}
        >
            {'>'}
        </button>
        </div>
        <Comparison
        productID={productID}
        styleID={styleID}
      />
      </div>
    )

  }
}

export default Related;