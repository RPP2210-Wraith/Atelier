import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './overview.css';

import AddToCart from './AddToCart.jsx'
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';

const Overview = ({ productID, setProductID, styleID, setStyleID, addToOutfit }) => {

  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  const [features, setFeatures] = useState([]);

  const [selectedStyle, setSelectedStyle] = useState({})
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
    setSelectedStyle(style);
    setSkus(style.skus);
  }

  const addCart = (size, quantity) => {
    console.log(productID, selectedStyle.style_id, size, quantity)
  }

  return (
    <div>
      <h1>Overview</h1>
      <div className='flex'>

        <div className='left1'>
          <ImageGallery />
        </div>

        <div className='right'>
          <div className='div'>✩✩✩✩✩ Read all [#] reviews</div>
          <div className='div'>{product.category}</div>
          <div className='div'><h3>{product.name}</h3></div>

          <div className='div'>
            {selectedStyle.sale_price ? <><span className='originalPrice'>${selectedStyle.original_price}</span><span className='salePrice'>${selectedStyle.sale_price}</span></>
            : <>${selectedStyle.original_price}</>}
          </div>

          <div className='div'><span className='style'>{'STYLE >'}</span>{selectedStyle.name}</div>

          <div className='styleSelector div'>
            {styles.map((style) => {
              if (style.style_id === selectedStyle.style_id) {
                return (
                  <div>
                    <div className='checkmark'>☑️</div>
                    <StyleSelector style={style} select={handleSelect} key={style.style_id} />
                  </div>
                )
              } else {
                return (
                  <div>
                    <StyleSelector style={style} select={handleSelect} key={style.style_id} />
                  </div>
                )
              }
            })}
          </div>

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