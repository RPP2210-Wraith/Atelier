import React from 'react';
import RatingsTile from './ratings-tile.jsx';

const RatingsList = (props) => {

  const addNewReview = () => {
    console.log('Add new review clicked!');
  };

  const seeMoreReviews = () => {
    console.log('See more reviews clicked!');
  };

  const sortReviews = () => {
    console.log('Sort reviews button clicked!');
  };

  return (
    <div class='flex-child-2' id='ratingsList' >
      <h2>Ratings List</h2>
      {props.reviews ?

        <div>
          <h1 class='in-line'>{props.reviews.length + ' reviews, sorted by'}</h1>
          <h1 class='in-line underline'
            onClick={sortReviews}> relevance </h1>
        </div>
        : 'Loading...'}
      <ul>
        {props.reviews ? props.reviews.map((review, index) => <RatingsTile review={review} key={index} />) : 'Loading...'}
      </ul>
      <div class='flex-parent'>
        <button class='button-center flex-child-1'
          onClick={seeMoreReviews}
        >More Reviews</button>
        <button class='button-center flex-child-1'
          onClick={addNewReview}
        >Add A Review</button>
      </div>
    </div>

  );
};

export default RatingsList;