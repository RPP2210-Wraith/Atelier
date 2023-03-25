import React, { useEffect, useState } from 'react';
import RatingsOverviewSection from './ratings-overview-section.jsx';
import RatingsList from './ratings-list.jsx';
import axios from 'axios';




const RatingsReviews = (props) => {


  const reviews = props.reviews;
  const setReviews = props.setReviews;

  useEffect(() => {
    //console.log('ProductID in Ratings/Review: ', props.productID);
    axios({
      method: 'GET',
      url: '/reviews',
      params: {
        product_id: props.productID
      }
    }).then((res) => {
      //console.log('Review Data:', res.data);
      setReviews(res.data.results);
    }
    )
  }, [props.productID]);

  return (
    <div>
      <RatingsOverviewSection productID={props.productID} />
      <RatingsList reviews={reviews} />
    </div>
  )
}
export default RatingsReviews;