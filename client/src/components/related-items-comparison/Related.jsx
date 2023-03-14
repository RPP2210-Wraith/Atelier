import React from 'react';
import fakeData from './fakeData.js';
import { useState, useEffect } from 'react';

const Related = () => {
  const [ isLoading, setIsLoading ] = useState(true)
  // Should received product ID as props
  // Send HTTP request for all related items data
  // Then send  HTTP request for all needed data for those items & save to state


  // If still loading, render still loading message
  if (isLoading) {
    return (
      <h3>Loading Related Items...</h3>
    )
  } else {
    return (
      <div>
        <h3>Related Component</h3>

      </div>
    )
  }
}

export default Related;