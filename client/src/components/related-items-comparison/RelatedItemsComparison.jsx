import React from 'react';
import Related from './Related.jsx';
import Outfit from './Outfit.jsx';
import Comparison from './Comparison.jsx';
import { useEffect, useState } from 'react';
// import fakeData from './fakeData.js';
import './relatedStyles.css';
import axios from 'axios';


const RelatedItemsComparison = ({ productID, setProductID, outfit, addToOutfit, removeFromOutfit }) => {
  // Should receive product ID as props


  return (
    <div id='relatedItemsComparison'>
      <h1>Related Items, Your Outfit, & Comparison</h1>
      <Related productID={productID} setProductID={setProductID}/>
      <Outfit outfit={outfit} addToOutfit={addToOutfit} removeFromOutfit={removeFromOutfit}/>
      <Comparison />
    </div>
  )
}
export default RelatedItemsComparison;