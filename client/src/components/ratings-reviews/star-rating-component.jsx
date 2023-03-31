import React, { useState, useEffect } from 'react';

const StarRating = (props) => {

  const changeRating = (percent) => {
    console.log((props.getMeanRating(props.ratings) / 5 * 100).toFixed() + '%');
  }


  return (
    < div class='star-rating' >
      <div id='front-stars' class='front-stars'
        style={{ width: (props.getMeanRating(props.ratings) / 5 * 100).toFixed() + '%' }}>
        ★★★★★
      </div>
      {/* so i think i know what the issue is, will change it to be individual spans tomorrow and see if it works */}
      <div class='back-stars'>
        ★★★★★
      </div>
      <button onClick={() => {
        changeRating('100%')
      }}>print rating % in console</button>

    </div >
  );
};
//⭐⭐⭐⭐⭐
export default StarRating;