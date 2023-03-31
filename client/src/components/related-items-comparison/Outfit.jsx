import React from 'react';
import { useState, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';
import helpers from './helpers.js'
import axios from 'axios';
//import fakeData from './fakeData.js';

const Outfit = ({ outfit, productID, styleID, addToOutfit, removeFromOutfit }) => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ startingIndex, setStartingIndex ] = useState(0);
  const [ outfitItems, setOutfitItems ] = useState([]);
  const [numOfCards, setNumOfCards] = useState(3);

  const { incrementCards } = helpers;
  const { decrementCards } = helpers;

  const loadOutfit = () => {
    // Outfit is an array of objects with product and style keys
    // Send an axios request for items
    console.log('Outfit inside Outfit component: ', outfit);
    if (outfit.length > 0) {
      axios.get('/outfitItems', {
        params: {
          outfit: outfit
        }
      })
      .then((items) => {
        //console.log('outfit items: ', items.data)
        setOutfitItems(items.data)
      })
      .catch((err) => {
        console.log('error inside get outfit items', err)
      })

    } else {
      setOutfitItems([])
    }

  }

  const addHandler = () => {
    if (!outfit.some(item => item.style === styleID && item.product === productID)) {
      addToOutfit(productID, styleID);
    }
  }

  const removeHandler = (product, style) => {
    if (outfitItems.length > numOfCards) {
      decrementCards(setStartingIndex);
    }
    removeFromOutfit(product, style);
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
      <div id='outfitContainer'>
      <button
        onClick={() => {decrementCards(setStartingIndex)}}
        className={startingIndex !== 0 ?  'cardNavButton': 'hidden cardNavButton'}
        disabled={startingIndex !== 0 ?  false : true}>
          {'<'}
      </button>
      <div className='cardContainer'>
        <button id='addToOutfit' onClick={addHandler}>Add To Outfit</button>
      {outfitItems.slice(startingIndex, startingIndex + numOfCards).map((item, i) => {
       return <OutfitCard item={item} key={i} remove={removeHandler}/>
      })}
      </div>


      <button
        onClick={() => {incrementCards(setStartingIndex)}}
        className={outfitItems[startingIndex + numOfCards] !== undefined ? 'cardNavButton': 'hidden cardNavButton'}
        disabled= {outfitItems[startingIndex + numOfCards] !== undefined ? false : true} >
          {'>'}
      </button>

      </div>
    </div>
  )
}
export default Outfit;