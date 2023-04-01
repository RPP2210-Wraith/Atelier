import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';

const StarRating = (props) => {

  return (
    <div>
      <StarRatings rating={props.rating} starDimension={props.size} starRatedColor='orange' />
    </div>

  );
};
export default StarRating;