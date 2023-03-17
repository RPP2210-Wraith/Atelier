import React from 'react';
import RelatedCard from './RelatedCard.jsx';
import fakeData from './fakeData.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Related = ({ productID }) => {
  // Handle loading with a user-friendly message
  const [ isLoading, setIsLoading ] = useState(true)
  // Set data (if no data, use default props)
  const [ relatedItems, setRelatedItems ] = useState(fakeData.fakeProducts);
  const [ startingIndex, setStartingIndex ] = useState(0);

  const incrementCards = () => {
    setStartingIndex((currentIndex) => {
      return currentIndex + 1;
    })
  }
  const decrementCards = () => {
    setStartingIndex((currentIndex) => {
      return currentIndex - 1;
    })
  }
  console.log('starting index: ', startingIndex)

  useEffect(() => {
    //
    axios.get('/relatedItems', {
      params: {
        productID: 71699
      }
    })
    .then((response) => {
      // Get the related item's title/category from the product endpoint
      console.log('response: ', response)
      // const promises = response.map((itemNum) => {
      //   return axios.get('/relatedProduct')
      // })
    })
  }, []);

  // Should receive array of integers for related items
  // Then send HTTP request for all needed data for those items
  // Map over the results and render RelatedCards


  // If still loading, render still loading message
  if (isLoading) {
    return (
      <div className='container'>
        <h3>Loading Related Items...</h3>
        {startingIndex !== 0 ? <button onClick={decrementCards}>{'<'}</button> : ''}
        {
         relatedItems.slice(startingIndex, startingIndex + 4).map((item, i) => {
          return <RelatedCard item={item} key={i}/>
         })

        }
        {relatedItems[startingIndex + 4] !== undefined ? <button onClick={incrementCards}>{'>'}</button> : ''}
      </div>


    )
  } else {
    return (
      <div>
        <h3>Related Items:</h3>

      </div>
    )
  }
}

export default Related;