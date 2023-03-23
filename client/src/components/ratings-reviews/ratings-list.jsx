import React from 'react';
import RatingsTile from './ratings-tile.jsx';
import './ratingsStyles.css';

const RatingsList = (props) => {

  return (
    <div >
      <h2>Ratings List</h2>
      <h1>{props.reviews.length + ' reviews, sorted by relevance'}</h1>
      <ul>
        {props.reviews.map((review, index) => <RatingsTile review={review} key={index} />)}
      </ul>
      <button>More Reviews</button>
      <button>Add A Review</button>

    </div>

  );
};

export default RatingsList;