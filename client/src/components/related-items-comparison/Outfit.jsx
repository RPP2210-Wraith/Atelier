import React from 'react';
import { useState, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';

const Outfit = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ startingIndex, setStartingIndex ] = useState(0);

  // Outfit will be an array of OutfitCards
  const [ outfit, setOutfit ] = useState(['item1', 'item2', 'item3'])

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

  if (isLoading) {
    return (
      <div className='container'>
        <h3>Loading Your Outfit...</h3>
        {startingIndex !== 0 ? <button>{'<'}</button> : ''}
        <OutfitCard />
        <OutfitCard />
        <OutfitCard />
        <OutfitCard />
        {startingIndex + 3 !== undefined ? <button>{'>'}</button> : ''}
      </div>
    )
  }
  return (
    <div>
      <h3>Your Outfit</h3>

    </div>
  )
}
export default Outfit;