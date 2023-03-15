import React from 'react';
import { useState, useEffect } from 'react';

const Outfit = () => {
  const [ isLoading, setIsLoading ] = useState(true);


  if (isLoading) {
    return (
      <h3>Loading Your Outfit Items...</h3>
    )
  }
  return (
    <div>
      <h3>Outfit Component</h3>
    </div>
  )
}
export default Outfit;