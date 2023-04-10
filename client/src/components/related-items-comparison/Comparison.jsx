import React from 'react';
import fakeData from './fakeData';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Comparison = ({ product1, productID, styleID }) => {
  const [product2, setProduct2 ] = useState({})

  // console.log('productID in comparison: ', productID);
  // console.log('styleID in comparison: ', styleID)

  const getTableData = () => {

    var item2Params = [{ product: productID, style: styleID }]
    axios.get('/outfitItems', {
      params: {
        outfit: item2Params
      }
    })
    .then((item2) => {
      console.log('item2.data: ', item2.data)
      setProduct2(item2.data[0]);
      // console.log('product1: ', product1);
      // console.log('product2: ', product2);
    })
  }

  useEffect(getTableData, [])

  function compareFeatures(product1, product2) {
    const features1 = product1.features || [];
    const features2 = product2.features || [];
    const allFeatures = new Set([
      ...features1.map((f) => f.feature),
      ...features2.map((f) => f.feature),
    ]);
    const tableRows = Array.from(allFeatures).map((feature) => {
      const feature1 = features1.find((f) => f.feature === feature);
      const feature2 = features2.find((f) => f.feature === feature);
      return (
        <tr key={feature}>
          <td>{feature1 ? feature1.value : ''}</td>
          <td>{feature}</td>
          <td>{feature2 ? feature2.value : ''}</td>
        </tr>
      );
    });
    return (
      <table className="compareTable">
        <thead className="compareTableHead">
          <tr>
            <th>{product1.name}</th>
            <th>Feature</th>
            <th>{product2.name}</th>
          </tr>
        </thead>
        <tbody className="compareTableBody">{tableRows}</tbody>
      </table>
    );
  }

  return (
    <div className='container'>
     {compareFeatures(product1, product2)}
    </div>
  )
}
export default Comparison;