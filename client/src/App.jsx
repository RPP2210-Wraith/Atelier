import React from 'react';
import { useState, useEffect } from 'react';
import Overview from './components/overview/Overview.jsx';
import QuestionAnswer from './components/question-answer/QuestionAnswer.jsx';
import RatingsReviews from './components/ratings-reviews/RatingsReviews.jsx';
import RelatedItemsComparison from './components/related-items-comparison/RelatedItemsComparison.jsx';
import InteractionTracking from './InteractionTracking.jsx';
import Modal from 'react-modal';



const App = () => {

  const [productID, setProductID] = useState(71699);
  const [styleID, setStyleID] = useState(1);
  const [myOutfit, setMyOutfit] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [like, setLike] = useState(false);


  useEffect(() => {
    if (!localStorage.getItem('myOutfit')) {
      localStorage.setItem('myOutfit', '[]')
    }
    setMyOutfit(JSON.parse(localStorage.getItem('myOutfit')));
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
    console.log('new outfit inside add', outfit)
  }
  // Function to remove item from myOutfit localStorage
  const removeFromOutfit = (productID, styleID) => {
    const outfit = JSON.parse(localStorage.getItem('myOutfit'));
    // Remove item that has style and product ID
    const newOutfit = outfit.filter((item) => {
      console.log('--------------------', item.style, styleID)
      return !(item.style.toString() === styleID && item.product.toString() === productID);
    });
    localStorage.setItem('myOutfit', JSON.stringify(newOutfit))
    setLike(false)
    setMyOutfit(newOutfit);
    console.log('new outfit inside remove', newOutfit)
    // Add item to localStorage
  }

  return (
    <div>

      <InteractionTracking
        Widget={Overview}
        widgetName={'Overview'}
        productID={productID}
        styleID={styleID}
        setStyleID={setStyleID}
        addToOutfit={addToOutfit}
        myOutfit={myOutfit}
        reviews={reviews}
        like={like}
        setLike={setLike}
      />

      <InteractionTracking
        Widget={RelatedItemsComparison}
        widgetName={'RelatedItemsComparison'}
        productID={productID}
        styleID={styleID}
        setProductID={setProductID}
        addToOutfit={addToOutfit}
        removeFromOutfit={removeFromOutfit}
        outfit={myOutfit}
      />

      <InteractionTracking
        Widget={QuestionAnswer}
        widgetName={'Question & Answer'}
      />


      <InteractionTracking
        Widget={RatingsReviews}
        widgetName={'Ratings & Reviews'}
        productID={productID}
        reviews={reviews}
        setReviews={setReviews}
      />

    </div>
  )
}

export default App;

