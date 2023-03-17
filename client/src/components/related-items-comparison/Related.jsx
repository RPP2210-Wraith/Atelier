import React from 'react';
import RelatedCard from './RelatedCard.jsx';
import fakeData from './fakeData.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import helpers from './helpers.js'

const Related = ({ productID }) => {
  // Handle loading with a user-friendly message
  const [ isLoading, setIsLoading ] = useState(true);
  const [ relatedItems, setRelatedItems ] = useState({});
  const [ startingIndex, setStartingIndex ] = useState(0);

  const { incrementCards } = helpers;
  const { decrementCards } = helpers;

  // Retrieve related items
  useEffect(() => {
    axios.get('/relatedItems', {
      params: {
        productID: 71699
      }
    })
    .then((response) => {
      setRelatedItems(response.data);
    })
    .then(() => {
      setIsLoading(!isLoading);
    })
  }, []);

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
          return <RelatedCard item={item} key={i}/>
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