import React from "react";

const AddToCart = () => {

  return (
    <div>
      <div style={{display: 'flex'}}>
        <select style={{width:200, height:50, margin:10, textAlign:'center', fontSize:18, cursor:'pointer'}}>
          <option hidden>Select Size</option>
        </select>
        <select style={{width:200, height:50, margin:10, textAlign:'center', fontSize:18, cursor:'pointer'}}>
          <option hidden>-----</option>
        </select>
      </div>

      <div style={{display: 'flex'}}>
        <button style={{width:200, height: 50, margin:10, textAlign:'center', fontSize: 18, cursor:'pointer'}} >Add to Cart  ➕</button>
        <button style={{backgroundColor: 'white', width:200, height: 50, margin:10, textAlign:'center', fontSize: 40, cursor:'pointer'}}>⭐</button>
      </div>
    </div>
  )
}

export default AddToCart;