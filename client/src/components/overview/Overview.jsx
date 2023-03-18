import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import './overview.css';

import AddToCart from './AddToCart.jsx'
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';

const Overview = ({ productID, setProductID, styleID, setStyleID, addToOutfit }) => {

  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  const [features, setFeatures] = useState([]);

  const [skus, setSkus] = useState([])

  useEffect(() => {

    productID = 71699; // use productID 71699 as placeholder for testing

    axios({
      method: 'GET',
      url: '/overview',
      params: {productID: productID}
    })
    .then((response) => {
      setProduct(response.data[0]);
      setStyles(response.data[1].results);
      setFeatures(response.data[0].features)
    })
  }, [])

  const handleSelect = (style) => {
    setStyleID(style.style_id);
    setSkus(style.skus);
  }

  const addCart = (size, quantity) => {
    console.log(productID, selectedStyle.style_id, size, quantity)
  }

  return (
    <div>
      <h1>Overview</h1>
      <div className='flex'>

        <ImageGallery />

        <div className='right'>
          <div className='div'>✩✩✩✩✩ Read all [#] reviews</div>
          <div className='div'>{product.category}</div>
          <div className='div'><h3>{product.name}</h3></div>

          <StyleSelector styles={styles} select={handleSelect} />

          <AddToCart skus={skus} addCart={addCart} addToOutfit={addToOutfit} productID={productID = 71699} styleID={styleID} key={skus} />

        </div>
      </div>

      <div className='flex'>
        <div className='left2'><h4>{product.slogan}</h4>{product.description}</div>
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