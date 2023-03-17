import React from 'react';
import RatingsTile from './ratings-tile.jsx';

const RatingsList = () => {

  var test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <h2>Ratings List</h2>
      <h4>Total Review Count and Filtering Options</h4>
      <ul>
        {test.map((num, index) => <RatingsTile num={num} key={index} />)}
      </ul>
      <button>More Reviews</button>
      <button>Add A Review</button>

    </div>

  );
};

export default RatingsList;