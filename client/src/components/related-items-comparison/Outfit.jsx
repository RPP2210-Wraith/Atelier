import React from 'react';
import { useState, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';
import helpers from './helpers.js'
import axios from 'axios';
//import fakeData from './fakeData.js';

const Outfit = ({ outfit, addToOutfit, removeFromOutfit }) => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ startingIndex, setStartingIndex ] = useState(0);
  const [ outfitItems, setOutfitItems ] = useState([])

  const { incrementCards } = helpers;
  const { decrementCards } = helpers;

  const loadOutfit = () => {
    // Outfit is an array of objects with product and style keys
    // Send an axios request for items
    console.log('outfit: ', outfit)

      axios.get('/outfitItems', {
        params: {
          outfit: outfit
        }
      })
      .then((items) => {
        console.log('outfit items: ', items.data)
        setOutfitItems(items.data)
      })
      .catch((err) => {
        console.log('error inside get outfit items', err)
      })
  }
  // Load the outfit every time it changes
  useEffect(loadOutfit, [outfit])


  if (!isLoading) {
    return (
      <div>
        <h3>Loading your outfit...</h3>
      </div>
    )
  }

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

      {outfitItems.map((item) => {
       return <OutfitCard item={item}/>
      })}


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