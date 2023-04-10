import React from 'react';
import { useState, useEffect } from 'react';
import Overview from './components/overview/Overview.jsx';
import QuestionAnswer from './components/question-answer/QuestionAnswer.jsx';
import RatingsReviews from './components/ratings-reviews/RatingsReviews.jsx';
import RelatedItemsComparison from './components/related-items-comparison/RelatedItemsComparison.jsx';
import InteractionTracking from './InteractionTracking.jsx';
import Modal from 'react-modal';
import logo from '../../img/logo.png';

const App = () => {

  const [productID, setProductID] = useState();
  const [styleID, setStyleID] = useState();
  const [myOutfit, setMyOutfit] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [like, setLike] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [styles, setStyles] = useState(null);
  const [product, setProduct] = useState({});
  const [mean, setMean] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem('myOutfit')) {
      localStorage.setItem('myOutfit', '[]')
    }
    setMyOutfit(JSON.parse(localStorage.getItem('myOutfit')));

    // console.log('current url: ', window.location.href);
    // console.log('current url 2: ', location.pathname);
    let path = location.pathname;
    if (path === '/') {
      setProductID(71704);
    } else {
      // setProductID(71699);
      let id = path.split('/')[2]
      console.log('current id: ', id)
      setProductID(id);
    }

  }, [])


  useEffect(() => {
    var styleSheet = document.getElementById('lightMode');
    if (isDarkMode) { styleSheet.disabled = true; }
    else { styleSheet.disabled = false; }

  }, [isDarkMode])

  useEffect(() => {
    console.log('New Style ID: ', styleID)
  }, [styleID])


  // Function to add item to myOutfit localStorage
  const addToOutfit = (productID, styleID) => {
    console.log('style ID added to outfit: ', styleID)
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
      <div id='header'>
        <img src={logo} id='logo'></img>

        <button onClick={() => { setIsDarkMode(!isDarkMode) }} id='toggleDarkButton'>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
      </div>

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
        setProduct={setProduct}
        product={product}
        mean={mean}
      />

      <InteractionTracking
        Widget={RelatedItemsComparison}
        widgetName={'RelatedItemsComparison'}
        productID={productID}
        styleID={styleID}
        setProductID={setProductID}
        setStyleID={setStyleID}
        addToOutfit={addToOutfit}
        removeFromOutfit={removeFromOutfit}
        outfit={myOutfit}
      />



      <InteractionTracking
        Widget={RatingsReviews}
        widgetName={'Ratings & Reviews'}
        productID={productID}
        reviews={reviews}
        setReviews={setReviews}
        product={product}
        setMean={setMean}
      />

    </div>
  )
}

export default App;

