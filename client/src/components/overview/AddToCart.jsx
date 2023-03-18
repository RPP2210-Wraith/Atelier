import React from "react";

const AddToCart = () => {

  return (
    <div className='div'>
      <div className='flex'>
        <select>
          <option hidden>Select Size</option>
        </select>
        <select>
          <option hidden>-----</option>
        </select>
      </div>

      <div className='flex'>
        <button className='AddCartButton'>Add to Cart  ➕</button>
        <button className='likeBotton'>⭐</button>
      </div>
    </div>
  )
}

export default AddToCart;