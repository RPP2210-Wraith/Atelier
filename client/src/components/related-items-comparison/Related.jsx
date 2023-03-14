import React from 'react';
import fakeData from './fakeData.js';
import { useState, useEffect } from 'react';

const Related = ({ itemArr }) => {
  // Handle loading with a user-friendly message
  const [ isLoading, setIsLoading ] = useState(true)
  // Set data (if no data, use default props)
  const [ relatedItems, setRelatedItems ] = useState(itemArr)


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