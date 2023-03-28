import React from 'react';
import fakeData from './fakeData';

const Comparison = ({ }) => {
  //console.log('oneFakeProduct: ', fakeData.oneFakeProduct)
  function compareFeatures(product1, product2) {
    const features1 = product1.features || []
    const features2 = product2.features || []
    const allFeatures = new Set([
      ...features1.map(f => f.feature),
      ...features2.map(f => f.feature)
    ])
    const tableRows = Array.from(allFeatures).map(feature => {
      const feature1 = features1.find(f => f.feature === feature)
      const feature2 = features2.find(f => f.feature === feature)
      return (
        <tr key={feature}>
          <td>{feature}</td>
          <td>{feature1 ? feature1.value : ''}</td>
          <td>{feature2 ? feature2.value : ''}</td>
        </tr>
      )
    })
    return (
      <table className='compareTable'>
        <thead className='compareTableHead'>
          <tr>
            <th></th>
            <th>{product1.name}</th>
            <th>{product2.name}</th>
          </tr>
        </thead>
        <tbody className='compareTableBody'>
          {tableRows}
        </tbody>
      </table>
    )
  }

  return (
    <div className='container'>
     {compareFeatures(fakeData.oneFakeProduct, fakeData.anotherFakeProduct)}
    </div>
  )
}
export default Comparison;