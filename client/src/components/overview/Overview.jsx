import React, {useEffect, useState} from 'react';
import axios from 'axios';

import AddToCart from './AddToCart.jsx'

const Overview = ({ productID, setProductID, styleID, setStyleID, addToOutfit }) => {

  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  const [features, setFeatures] = useState([]);

  console.log(product)
  console.log(styles)

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

  return (
    <div>
      <h1>Overview</h1>
      <div style={{display:'flex', margin: 100}}>
        <div style={{width:'60%'}}>Image Gallery</div>

        <div style={{width:'40%'}}>
          <div style={{marginBottom:20}}>✩✩✩✩✩ Read all [#] reviews</div>
          <div>{product.category} <h3>{product.name}</h3></div>

          <div>price</div>
          <div> STYLE: style name</div>
          <div>style selector</div>

          <AddToCart />

        </div>
      </div>

      <div style={{display:'flex', margin: 100}}>
        <div style={{width:'60%'}}><h4>{product.slogan}</h4>{product.description}</div>
        <div style={{width:'40%'}}><h4>Features</h4>
          {features.map((feature) => {
            return <div key={feature.feature}>{feature.feature}: {feature.value}</div>
          })}
        </div>
      </div>

    </div>
  )
}
export default Overview;