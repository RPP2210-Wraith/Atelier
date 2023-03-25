import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RatingsOverviewSection = (props) => {


  const [reviewMetaData, setReviewMetaData] = useState({});
  const [fitRatings, setFitRatings] = useState({});


  useEffect(() => {
    //console.log('ProductID:', props.productID);
    axios({
      method: 'GET',
      url: '/reviews/meta',
      params: {
        product_id: props.productID
      }
    }).then((res) => {
      console.log('Review MetaData:', res.data);
      setReviewMetaData(res.data);
      setFitRatings(res.data.characteristics);
    }
    )
  }, [props.productID]);

  var getMeanRating = (ratings) => {
    //ratings is an object with 5 properties, denoting the number of user ratings corresponding to the
    //nums 1 through 5
    var numOfVotes = 0;
    var sumOfRatings = 0;
    for (const key in ratings) {

      var voteWeight = parseInt(key);
      var votes = parseInt(ratings[key]);

      numOfVotes += votes;
      sumOfRatings += (votes * voteWeight);
      //console.log(parseInt(ratings[key]));
    }
    var mean = (sumOfRatings / numOfVotes).toFixed(2);
    console.log('Mean rating: ', mean);
    return mean;
  };

  var getRecommendedPercentage = (recommended) => {
    var trueCount = 0;
    var sum = 0;
    for (const key in recommended) {
      sum += parseInt(recommended[key]);
      if (key === 'true') {
        trueCount = parseInt(recommended[key]);
      }
    }
    var didRecommend = Math.round((trueCount / sum) * 100);
    // console.log(
    //   'true count: ' + trueCount + ' sum: ' + sum + ' Recommended: ' + didRecommend + '%');
    return didRecommend;
  };


  return (

    reviewMetaData.ratings ?
      < div class='flex-child-1' id='ratingsOverview' >
        <h2>Ratings Overview Section</h2>
        <div>
          <h1>{getMeanRating(reviewMetaData.ratings) + ' ⭐⭐⭐⭐⭐'} </h1>
          {/* https://jsfiddle.net/NullDev/nju10Loz/2/ */}
        </div>
        <h3>{getRecommendedPercentage(reviewMetaData.recommended) + '% of reviews recommend this product'}</h3>
        <h4>{fitRatings.Fit ? 'Mean Size Rating: ' + parseFloat(fitRatings.Fit.value).toFixed(2) : 'Loading...'}</h4>
        <h4>{fitRatings.Comfort ? 'Mean Comfort Rating: ' + parseFloat(fitRatings.Comfort.value).toFixed(2) : 'Loading...'}</h4>
        {/* https://jsfiddle.net/NullDev/nju10Loz/2/ same logic but just use some rectangles or something*/}
      </div > : <div>Loading</div>
  );
};

export default RatingsOverviewSection;