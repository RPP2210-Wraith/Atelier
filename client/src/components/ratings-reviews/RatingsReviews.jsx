import React, { useEffect, useState } from 'react';
import RatingsOverviewSection from './ratings-overview-section.jsx';
import RatingsList from './ratings-list.jsx';
import axios from 'axios';


const RatingsReviews = (props) => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    console.log('ProductID:', props.productID);
    axios({
      method: 'GET',
      url: '/reviews'
    }).then((res) => {
      console.log('Review Data:', res.data);
      setReviews(res.data.results);
    }
    )
  }, []);

  return (

    <div>
      <RatingsOverviewSection productID={props.productID} />
      <RatingsList reviews={reviews} />
    </div>
  )
}
export default RatingsReviews;