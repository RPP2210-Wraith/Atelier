import React from 'react';
import { useState, useEffect } from 'react';
import Overview from './components/overview/Overview.jsx';
import QuestionAnswer from './components/question-answer/QuestionAnswer.jsx';
import RatingsReviews from './components/ratings-reviews/RatingsReviews.jsx';
import RelatedItemsComparison from './components/related-items-comparison/RelatedItemsComparison.jsx';



const App = () => {

  const [ productID, setProductID ] = useState(71699);
  const [ styleID, setStyleID ] = useState(1);
  const [ myOutfit, setMyOutfit ] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('myOutfit')) {
      localStorage.setItem('myOutfit', '[]')
    }
    setMyOutfit(JSON.parse(localStorage.getItem('myOutfit')))
  }, [])

  // Function to add item to myOutfit localStorage
  const addToOutfit = (productID, styleID) => {
    // Get current outfit array
    const outfit = JSON.parse(localStorage.getItem('myOutfit'));
    // Add to it
    outfit.push({
      product: productID,
      style: styleID
    });
    // OldOutfit is now updated with the new item
    setMyOutfit(outfit);
    localStorage.setItem('myOutfit', JSON.stringify(outfit))
  }
  // Function to remove item from myOutfit localStorage
  const removeFromOutfit = (productID, styleID) => {
    const outfit = JSON.parse(localStorage.getItem('myOutfit'));
      // Remove item that has style and product ID
     outfit = outfit.filter((outfit) => (outfit.style !== styleID && outfit.product !== productID))
     setMyOutfit(outfit);
     // Add item to localStorage
    localStorage.setItem(JSON.stringify(outfit))
  }

  return (
    <div>
      <Overview
        productID={productID}
        setProductID={setProductID}
        styleID={styleID}
        setStyleID={setStyleID}
        addToOutfit={addToOutfit}
      />
      <RelatedItemsComparison
        productID={productID}
        setProductID={setProductID}
        addToOutfit={addToOutfit}
        removeFromOutfit={removeFromOutfit}
        outfit={myOutfit}

      />
      <QuestionAnswer />
      <RatingsReviews
        productID={productID}
      />
    </div>
  )
}

export default App;