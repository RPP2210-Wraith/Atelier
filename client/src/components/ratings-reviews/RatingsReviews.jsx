import React, { useEffect, useState } from 'react';
import RatingsOverviewSection from './ratings-overview-section.jsx';
import RatingsList from './ratings-list.jsx';
import axios from 'axios';

const RatingsReviews = () => {

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/reviews'
    }).then((res) => {
      console.log(res);
    }
    )
  }, []);

  return (

    <div>
      <RatingsOverviewSection />
      <RatingsList />
    </div>
  )
}
export default RatingsReviews;