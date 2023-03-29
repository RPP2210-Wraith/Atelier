import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './overview.css';

import AddToCart from './AddToCart.jsx'
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';

const Overview = ({ productID, styleID, setStyleID, addToOutfit, myOutfit, reviews }) => {

  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  const [features, setFeatures] = useState([]);

  const [skus, setSkus] = useState([])
  const [selectedStyle, setSelectedStyle] = useState({})
  console.log('productID inside Overview: ', productID)


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

  const addCart = (size, quantity) => {
    console.log(productID, selectedStyle.style_id, size, quantity)
  }

  return (
    <div id='overview'>
      <h1>Overview</h1>
      <div className='flex'>

        <ImageGallery images={selectedStyle.photos} productID={productID} />

        <div className='right'>
          <div className='div'>✩✩✩✩✩ Read all {reviews.length} reviews</div>
          <div className='div'>{product.category}</div>
          <div className='div'><h3>{product.name}</h3></div>

          <StyleSelector styles={styles} select={select} selectedStyle={selectedStyle} key={styles.length}/>

          <AddToCart skus={skus} productID={productID} styleID={styleID} myOutfit={myOutfit} addCart={addCart} addToOutfit={addToOutfit} key={skus} />

        </div>
      </div>

      <div className='flex'>
        <div className='left'><h4>{product.slogan}</h4>{product.description}</div>
        <div className='right'><h4>Features</h4>
          {features.map((feature) => {
            return <div key={feature.feature}>{feature.feature}: {feature.value}</div>;
          })}
        </div>
      </div>

    </div>
  )
}
export default Overview;