import React from 'react';
import { useState, useEffect } from 'react';
import Overview from './components/overview/Overview.jsx';
import QuestionAnswer from './components/question-answer/QuestionAnswer.jsx';
import RatingsReviews from './components/ratings-reviews/RatingsReviews.jsx';
import RelatedItemsComparison from './components/related-items-comparison/RelatedItemsComparison.jsx';



const App = () => {

  const [productID, setProductID] = useState(71699);
  const [styleID, setStyleID] = useState(1);
  const [myOutfit, setMyOutfit] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('myOutfit')) {
      localStorage.setItem('myOutfit', '[]')
    }
    setMyOutfit(JSON.parse(localStorage.getItem('myOutfit')));
  }, [])
  //console.log('productID inside of App: ', productID)
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
    setMyOutfit(newOutfit);
    console.log('new outfit inside remove', newOutfit)
    // Add item to localStorage
  }

  return (
    <div>
      <Overview
        productID={productID}
        styleID={styleID}
        setStyleID={setStyleID}
        addToOutfit={addToOutfit}
        myOutfit={myOutfit}
        reviews={reviews}
      />
      <RelatedItemsComparison
        productID={productID}
        styleID={styleID}
        setProductID={setProductID}
        addToOutfit={addToOutfit}
        removeFromOutfit={removeFromOutfit}
        outfit={myOutfit}

      />
      <QuestionAnswer />
      <RatingsReviews
        productID={productID}
        reviews={reviews}
        setReviews={setReviews}
      />
    </div>
  )
}

export default App;

// const removeFromOutfit = (productID, styleID) => {
//   const outfit = JSON.parse(localStorage.getItem('myOutfit'));
//   // Remove item that has style and product ID
//   const newOutfit = outfit.filter((outfit) => ((outfit.style !== styleID) && (outfit.product !== productID)))
//   localStorage.setItem('myOutfit', JSON.stringify(newOutfit))
//   setMyOutfit(newOutfit);
//   console.log('new outfit inside remove', newOutfit)
//   // Add item to localStorage
// }

// [{"product":71699,"style":444228},{"product":71697,"style":444218},{"product":71703,"style":444250}]

