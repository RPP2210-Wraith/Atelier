import React, { useEffect, useState } from 'react';
import RatingsOverviewSection from './ratings-overview-section.jsx';
import RatingsList from './ratings-list.jsx';
import axios from 'axios';
import './ratingsStyles.css';



const RatingsReviews = (props) => {


  const reviews = props.reviews;
  const setReviews = props.setReviews;

  const getReviews = (sortBy = 'relevant', productID) => {
    axios({
      method: 'GET',
      url: '/reviews',
      params: {
        product_id: productID,
        sort: sortBy
      }
    }).then((res) => {
      console.log('Review Data:', res.data);
      setReviews(res.data.results);
    }
    );
  };

  useEffect(() => {
    //console.log('ProductID in Ratings/Review: ', props.productID);
    getReviews(null, props.productID);
  }, [props.productID]);



  return (
    <div id='ratings-review-widget' class='flex-parent center'>
      <RatingsOverviewSection productID={props.productID} setMean={props.setMean}/>
      {/* // <RatingsList reviews={reviews} /> */}
      {/* <RatingsOverviewSection productID={props.productID} /> */}
      <RatingsList productID={props.productID} reviews={reviews} setReviews={setReviews} getReviews={getReviews} />
    </div>
  )
}
export default RatingsReviews;