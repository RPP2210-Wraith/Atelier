import React from 'react';
import Related from './Related.jsx';
import Outfit from './Outfit.jsx';
import { useEffect, useState } from 'react';
import './relatedStyles.css';
import axios from 'axios';


const RelatedItemsComparison = ({ productID, styleID, setStyleID, setProductID, outfit, addToOutfit, removeFromOutfit }) => {
  // Should receive product ID as props


  return (
    <div id='relatedItemsComparison'>
      <h1>Related Items, Your Outfit, & Comparison</h1>

      <Related
        productID={productID}
        setProductID={setProductID}
        styleID={styleID}
        setStyleID={setStyleID}
      />

      <Outfit
        outfit={outfit}
        addToOutfit={addToOutfit}
        removeFromOutfit={removeFromOutfit}
        productID={productID}
        styleID={styleID}
      />

    </div>
  )
}
export default RelatedItemsComparison;