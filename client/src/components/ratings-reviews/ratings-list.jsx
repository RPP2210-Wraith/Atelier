import React from 'react';
import RatingsTile from './ratings-tile.jsx';

const RatingsList = (props) => {

  return (

    <div class='flex-child-2' id='ratingsList' >
      <h2>Ratings List</h2>
      <h1>{props.reviews ? props.reviews.length + ' reviews, sorted by relevance' : 'Loading...'}</h1>
      <ul>
        {props.reviews ? props.reviews.map((review, index) => <RatingsTile review={review} key={index} />) : 'Loading...'}
      </ul>

      <div class='flex-parent'>
        <button class='button-center flex-child-1'>More Reviews</button>
        <button class='button-center flex-child-1'>Add A Review</button>
      </div>




    </div>

  );
};

export default RatingsList;