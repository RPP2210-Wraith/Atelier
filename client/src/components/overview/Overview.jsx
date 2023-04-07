import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './overview.css';

import AddToCart from './AddToCart.jsx'
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';
import StarRatings from 'react-star-ratings';
import Rating from '../ratings-reviews/ratings-overview-section.jsx'

const Overview = ({ productID, styleID, setStyleID, addToOutfit, myOutfit, reviews, like, setLike, product, setProduct, mean }) => {

  // const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  const [features, setFeatures] = useState([]);

  const [skus, setSkus] = useState([])
  const [selectedStyle, setSelectedStyle] = useState({})

  const [cartCount, setCartCount] = useState(0);
  const [cartUpdate, setCartUpdate] = useState(false);

  const fetchProduct = () => {
    axios.get('/overview', {
      params: {
        productID: productID
      }
    })
    .then((response) => {
      setProduct(response.data[0]);
      setStyles(response.data[1].results);
      setFeatures(response.data[0].features)
    })
  }

  useEffect(fetchProduct, [productID]);

  const select = (style) => {
    setStyleID(style.style_id);
    setSkus(style.skus);
    setSelectedStyle(style)
  }

  const addCart = (sku_id, quantity) => {
    setCartCount(cartCount + quantity);
    setCartUpdate(true);
    setTimeout(() => {
      setCartUpdate(false);
    }, 1500);

    if (!localStorage.getItem('myCart')) {
      localStorage.setItem('myCart', '[]')
    }
    const myCart = JSON.parse(localStorage.getItem('myCart'));
    myCart.push({
      sku_id: sku_id,
      count: quantity
    });
    localStorage.setItem('myCart', JSON.stringify(myCart))
    // axios({
    //   method: 'POST',
    //   url: '/cart',
    //   params: {sku_id, quantity}
    // })
  }

  return (
    <div id='overview'>
      <h1>Overview</h1>
      <div className='cart'>🛒 {cartCount}</div>
      {cartUpdate && <div className='cartMessage'>Added to Cart</div>}

      <div className='flex'>

        <ImageGallery images={selectedStyle.photos} productID={productID} />

        <div className='right'>
          <div className='div'>
            <StarRatings rating = {mean} starDimension="20px" starSpacing="1%vh" starRatedColor = 'orange'/>
            <a className='div' href='#ratings-review-widget'>Read all {reviews.length} reviews</a></div>
          <div className='div'>{product.category}</div>
          <div className='div'><h2>{product.name}</h2></div>

          <StyleSelector styles={styles} styleID={styleID} select={select} selectedStyle={selectedStyle} key={styles.length}/>

          <AddToCart skus={skus} productID={productID} styleID={styleID} myOutfit={myOutfit} addCart={addCart} addToOutfit={addToOutfit} like={like} setLike={setLike} key={skus} />

        </div>
      </div>

      <div className='flex'>
        <div className='left'><h3>{product.slogan}</h3>{product.description}</div>
        <div className='right div'><h3>Features</h3>
          {features.map((feature) => {
            return <div key={feature.feature}>{feature.feature}: {feature.value}</div>;
          })}
        </div>
      </div>

    </div>
  )
}
export default Overview;