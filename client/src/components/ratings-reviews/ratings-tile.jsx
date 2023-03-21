import React from 'react';

const RatingsTile = (props) => {
  return (
    <ul>
      <div>
        <h4>{'Star Rating: ' + props.review.rating}</h4>
        <h2>{'Summary: ' + props.review.summary}</h2>
        <p>{'Body: ' + props.review.body}</p>
        {props.review.reccommend ? <p>I reccommend this product</p> : null}
        {props.review.response ? <p>This is where responses will go</p> : null}
        <small>{'Helpful? Yes (' + props.review.helpfulness + ') | Report'}</small>
        <hr></hr>
      </div>
    </ul>
  );
};

export default RatingsTile;