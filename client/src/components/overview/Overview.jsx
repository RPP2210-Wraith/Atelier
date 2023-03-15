import React from 'react';

const Overview = () => {
  return (
    <div>
      <h1>Overview</h1>
      <div style={{display:'flex'}}>
        <div style={{width:'60%'}}>Image Gallery</div>
        <div style={{width:'40%'}}>Product Information
          <div>rating</div>
          <div>category</div>
          <div>title</div>
          <div>price</div>
          <div> STYLE: style name</div>
          <div>style selector</div>
          <div><select><option>Select Size</option></select> <select><option>Quantity</option></select></div>
          <div><button>Add to Cart</button> <button>like</button></div>
        </div>
      </div>
      <div style={{display:'flex'}}>
        <div style={{width:'60%'}}>Slogan / Description</div>
        <div style={{width:'40%'}}>Features</div>
      </div>
    </div>
  )
}
export default Overview;