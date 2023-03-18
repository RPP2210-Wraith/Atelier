import React from 'react';
import { useState, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';
import helpers from './helpers.js'

const Outfit = ({ outfit, addToOutfit, removeFromOutfit }) => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ startingIndex, setStartingIndex ] = useState(0);
  const [ outfitItems, setOutfitItems ] = useState(['item1', 'item2', 'item3', 'item4', 'item5', 'item6'])

  const { incrementCards } = helpers;
  const { decrementCards } = helpers;


  // Add something to localStorage outfit to test(Morning joggers in black and goldenrod):
  addToOutfit(71699, 444228);
  addToOutfit(71699, 444230);
  console.log('outfit: ', outfit)



  if (isLoading) {
    return (
      <div>
        <h3>Loading your outfit...</h3>
      </div>
    )
  }

  // Add/Remove outfit take a product ID & Style ID
  // They return an array of product IDs and Style IDs




  return (
    <div className='container'>
      <h3>Your Outfit</h3>
      <div>
      <button
        onClick={() => {decrementCards(setStartingIndex)}}
        className={startingIndex !== 0 ?  '': 'hidden'}
        disabled={startingIndex !== 0 ?  false : true}>
          {'<'}
      </button>
      <OutfitCard />
      <OutfitCard />
      <OutfitCard />
      <OutfitCard />
      <button
        onClick={() => {incrementCards(setStartingIndex)}}
        className={outfitItems[startingIndex + 4] !== undefined ? '': 'hidden'}
        disabled= {outfitItems[startingIndex + 4] !== undefined ? false : true} >
          {'>'}
      </button>

      </div>
    </div>
  )
}
export default Outfit;