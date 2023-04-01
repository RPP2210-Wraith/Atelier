import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from './star-rating-component.jsx';
import ProgressBar from './progress-bar.jsx';

const RatingsOverviewSection = (props) => {


  const [reviewMetaData, setReviewMetaData] = useState({});
  const [fitRatings, setFitRatings] = useState({});
  const [ratings, setRating] = useState('0%');



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
      // getMeanRating(reviewMetaData.ratings);
      setRating(res.data.ratings);
      props.setMean(getMeanRating(res.data.ratings));
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
    var mean = (sumOfRatings / numOfVotes);
    console.log('Mean rating: ', mean);
    //props.setMean(mean);
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
        <div>
          <h1>{getMeanRating(reviewMetaData.ratings).toFixed(2)}</h1>
          <StarRating rating={getMeanRating(reviewMetaData.ratings)} size='30px' />
        </div>
        <h3>{getRecommendedPercentage(reviewMetaData.recommended) + '% of reviews recommend this product'}</h3>
        {fitRatings.Fit ?
          <div>
            <h4>{'Mean Size Rating: ' + parseFloat(fitRatings.Fit.value).toFixed(2)}</h4>
            <ProgressBar bgcolor="orange" progress={`${fitRatings.Fit.value / 5 * 100}`} height={10} />
          </div> : <div>Loading...</div>
        }
        {fitRatings.Comfort ? <div>
          <h4>{'Mean Comfort Rating: ' + parseFloat(fitRatings.Comfort.value).toFixed(2)}</h4>
          <ProgressBar bgcolor="orange" progress={`${fitRatings.Comfort.value / 5 * 100}`} height={10} />
        </div> : <div>Loading...</div>
        }
        {/* progress bar https://www.geeksforgeeks.org/how-to-create-a-custom-progress-bar-component-in-react-js/ */}
      </div > : <div>Loading</div>
  );
};

export default RatingsOverviewSection;