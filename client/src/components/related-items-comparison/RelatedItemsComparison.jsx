import React from 'react';
import Related from './Related.jsx';
import Outfit from './Outfit.jsx';
import Modal from './Modal.jsx';
import fakeData from './fakeData.js';
import './relatedStyles.css';


const RelatedItemsComparison = () => {
  // Should receive product ID and style ID as props
  // Should send a request for related items and pass the array to Related



  return (
    <div >
      <h1>Related Items, Your Outfit, & Comparison</h1>
      <Related itemArr={fakeData.relatedItems}/>
      <Outfit />
      <Modal />
    </div>
  )
}
export default RelatedItemsComparison;