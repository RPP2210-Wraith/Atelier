import React from 'react';
import fakeData from './fakeData.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Related = ({ productID }) => {
  // Handle loading with a user-friendly message
  const [ isLoading, setIsLoading ] = useState(true)
  // Set data (if no data, use default props)
  const [ relatedItems, setRelatedItems ] = useState([])

  useEffect(() => {
    //
    axios.get('/relatedItems', {
      params: {
        productID: productID
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
      <h3>Loading Related Items...</h3>
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