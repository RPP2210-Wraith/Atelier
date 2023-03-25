import React, { useState, useEffect } from 'react';
import './ratingsStyles.css';
import { format, parseISO } from "date-fns";

const RatingsTile = (props) => {

  const [helpfulnessCount, setHelpfulnessCount] = useState(0);

  useEffect(() => {

    setHelpfulnessCount(props.review.helpfulness);

  }, [props.review.helpfulness])

  const markAsHelpful = () => {

    console.log('Helpful? button clicked!! for ' + props.review.review_id);

  };

  const reportReview = () => {

    console.log('Report button clicked!! for ' + props.review.review_id);

  }


  return (
    <ul>
      <div>
        <h4>{'Star Rating: ' + props.review.rating}</h4>
        <small>{props.review.reviewer_name + ", " + format(parseISO(props.review.date), 'MMMMMMM i, yyyy')}</small>
        <h2>{'Summary: ' + props.review.summary}</h2>
        <p>{'Body: ' + props.review.body}</p>
        {props.review.recommend ? <p>✔️ I reccommend this product!</p> : null}
        {props.review.response ? <p>This is where responses will go</p> : null}
        <div>
          <small>Helpful?  </small>
          <small class='underline'
            onClick={markAsHelpful}>Yes</small>
          <small>{
            ' (' + helpfulnessCount + ') | '
          }</small>
          <small class='underline'
            onClick={reportReview}>Report</small>
        </div>

        <hr></hr>
      </div>
    </ul>
  );
};

export default RatingsTile;