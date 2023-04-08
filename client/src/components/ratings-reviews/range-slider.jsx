import React from 'react';
import './ratingsStyles.css';


const RangeSlider = ({ value }) => {


  const slideContainer = {
    width: '100%'
  }
  return (
    <div style={slideContainer}>
      <input type="range" min="1" max="100" value={value} class="slider" id="myRange"></input>
    </div>
  );
};

export default RangeSlider;