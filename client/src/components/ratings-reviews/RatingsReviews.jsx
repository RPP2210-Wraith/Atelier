import React, { useEffect, useState } from 'react';
import RatingsOverviewSection from './ratings-overview-section.jsx';
import RatingsList from './ratings-list.jsx';
import axios from 'axios';
import './ratingsStyles.css';



const RatingsReviews = (props) => {


  const reviews = props.reviews;
  const setReviews = props.setReviews;
  const [reviewCount, setReviewCount] = useState(5);
  const [canShowMoreReviews, setCanShowMoreReviews] = useState(true);

  const getReviews = (sortBy = 'relevant', productID, count = 5) => {
    axios({
      method: 'GET',
      url: '/reviews',
      params: {
        product_id: productID,
        sort: sortBy,
        count: count
      }
    }).then((res) => {
      //console.log('Review Data:', res.data);
      setReviews(res.data.results);
      if (reviews.length === res.data.results.length) {
        setCanShowMoreReviews(false);
        //console.log('Num of reviews: ', res.data.results.length);
        //console.log('Num of reviews increased from ', reviews.length, ' to ', res.data.results.length);
      }
    }
    );
  };

  useEffect(() => {
    //console.log('ProductID in Ratings/Review: ', props.productID);
    getReviews(null, props.productID, null);
    setReviewCount(10); //reset # reviews showing when new product is selected
    setCanShowMoreReviews(true)
  }, [props.productID]);



  return (
    <div id='ratings-review-widget' class='flex-parent center'>
      <RatingsOverviewSection productID={props.productID} setMean={props.setMean} />
      {/* // <RatingsList reviews={reviews} /> */}
      {/* <RatingsOverviewSection productID={props.productID} /> */}
      <RatingsList productID={props.productID} reviews={reviews}
        getReviews={getReviews} reviewCount={reviewCount}
        setReviewCount={setReviewCount} canShowMoreReviews={canShowMoreReviews} />
    </div>
  )
}
export default RatingsReviews;