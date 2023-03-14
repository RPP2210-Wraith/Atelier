import React from 'react';
import Related from './Related.jsx';
import Outfit from './Outfit.jsx';
import Modal from './Modal.jsx';
import fakeData from './fakeData.js';


const RelatedItemsComparison = () => {
  // Should receive product ID and style ID as props and pass them to Related component

  return (
    <div>
      <h1>Related & Comparison Container</h1>
      <Related />
      <Outfit />
      <Modal />
    </div>
  )
}
export default RelatedItemsComparison;