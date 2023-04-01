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
  const [ cachedRelatedItems, setCachedRelatedItems ] = useState({});

  const { incrementCards } = helpers;
  const { decrementCards } = helpers;


  const fetchAndCacheRelatedItems = () => {
    setIsLoading(true);

    // Create cached items in localStorage if it doesn't already exist
    if (!localStorage.getItem('cachedRelatedItems')) {
      localStorage.setItem('cachedRelatedItems', '{}')
    }
     // Get current cached items object
     const cacheFromLocalStorage = JSON.parse(localStorage.getItem('cachedRelatedItems'));

    //  If the product ID is in the cache
    if (cacheFromLocalStorage[productID]) {
      console.log('Related items pulled from cache');
      setRelatedItems(cacheFromLocalStorage[productID]);
      setStartingIndex(0);
      setIsLoading(false);
    } else {
      console.log('Related items pulled from server')
      axios.get('/relatedItems', {
        params: { productID: productID }
      })
      .then((response) => {
        cacheFromLocalStorage[productID] = response.data;
        setCachedRelatedItems((prevState) => {
          prevState[productID] = response.data;
          return prevState;
        })
        localStorage.setItem('cachedRelatedItems', JSON.stringify(cacheFromLocalStorage))
        setRelatedItems(response.data);
        setStartingIndex(0);
        setIsLoading(false);
      })
    }
  }

  // Retrieve related items from cache or server whenever product ID updates
  useEffect(fetchAndCacheRelatedItems, [productID]);

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
        <h3>Related Products</h3>
        <div id='relatedContainer'>
        <button
          onClick={() => {decrementCards(setStartingIndex)}}
          className={startingIndex !== 0 ?  'cardNavButton': 'hidden cardNavButton'}
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
          handleClick={fetchAndCacheRelatedItems}
          productID={productID}
          styleID={styleID}
          />
         })
        }

        </div>
        <button
          onClick={() => {incrementCards(setStartingIndex)}}
          className={relatedItems[startingIndex + 4] !== undefined ? 'cardNavButton': 'hidden cardNavButton'}
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