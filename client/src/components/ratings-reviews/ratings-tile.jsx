import React, { useState, useEffect } from 'react';
import './ratingsStyles.css';
import { format, parseISO } from "date-fns";
import axios from 'axios';

const RatingsTile = (props) => {

  const [helpfulnessCount, setHelpfulnessCount] = useState(0);

  useEffect(() => {
    setHelpfulnessCount(props.review.helpfulness);
  }, [props.review.helpfulness])

  const markAsHelpful = () => {
    //console.log('Helpful? button clicked!! for ' + props.review.review_id);
    axios({
      method: 'PUT',
      url: `/reviews/${props.review.review_id}/helpful`,
      params: {
        review_id: props.review.review_id
      }
    }).then((response) => {
      console.log(`review ${props.review.review_id} marked helpful: `, response.data);
      setHelpfulnessCount(helpfulnessCount + 1);

    });
  };

  const reportReview = () => {
    //console.log('Report button clicked!! for ' + props.review.review_id);
    axios({
      method: 'PUT',
      url: `/reviews/${props.review.review_id}/report`,
      params: {
        review_id: props.review.review_id
      }
    }).then((response) => {
      console.log(`review ${props.review.review_id} reported: `, response.data);
    });
  }

  const starRating = (starCount) => {
    var stars = '';
    for (var i = 0; i < starCount; i++) {

      stars += '⭐';
    }
    return stars;
  }


  return (
    <ul>
      <div>
        <div class='flex-parent'>
          <h4 class='flex-child-1'>{starRating(props.review.rating)}</h4>
          <small class='flex-child-1 center-vertically'>{props.review.reviewer_name + ", " + format(parseISO(props.review.date), 'MMMMMMM i, yyyy')}</small>
        </div>
        <h2>{props.review.summary}</h2>
        <p>{props.review.body}</p>
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


/**
 *      "product": "71699",
    "page": 0,
    "count": 10,
    "results": [
        {
            "review_id": 1275064,
            "rating": 5,
            "summary": "very good 111",
            "recommend": true,
            "response": null,
            "body": "Below the input for the Review body, a counter should appear.  This counter should let the user know how many characters are needed to reach the 50 character minimum",
            "date": "2022-06-02T00:00:00.000Z",
            "reviewer_name": "test22",
            "helpfulness": 2,
            "photos": []
        },
 */