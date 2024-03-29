import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from './star-rating-component.jsx';
import ProgressBar from './progress-bar.jsx';
import RangeSlider from './range-slider.jsx';

const RatingsOverviewSection = (props) => {


  const [reviewMetaData, setReviewMetaData] = useState({});
  const [fitRatings, setFitRatings] = useState({});
  const [totalVotes, setTotalVotes] = useState({
    totalStars: 0
  });


  useEffect(() => {
    //console.log('ProductID:', props.productID);
    axios({
      method: 'GET',
      url: '/reviews/meta',
      params: {
        product_id: props.productID
      }
    }).then((res) => {
      //console.log('Review MetaData:', res.data);
      setReviewMetaData(res.data);
      setFitRatings(res.data.characteristics);
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
      // console.log('key in star ratings: ', key);
      var voteWeight = parseInt(key);
      var votes = parseInt(ratings[key]);
      numOfVotes += votes;
      sumOfRatings += (votes * voteWeight);
      //console.log(parseInt(ratings[key]));
    }
    totalVotes.totalStars = numOfVotes;
    var mean = (sumOfRatings / numOfVotes);
    //console.log('Mean rating: ', mean);
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
        <div>
          <div class='flex-parent'>
            <span class='progress-bar-label'>1</span>
            <ProgressBar bgcolor="orange" progress={`${reviewMetaData.ratings[1] / totalVotes.totalStars * 100}`} height={15} />
          </div>
          <div class='flex-parent'>
            <span class='progress-bar-label'>2</span>
            <ProgressBar bgcolor="orange" progress={`${reviewMetaData.ratings[2] / totalVotes.totalStars * 100}`} height={15} />
          </div>
          <div class='flex-parent'>
            <span class='progress-bar-label'>3</span>
            <ProgressBar bgcolor="orange" progress={`${reviewMetaData.ratings[3] / totalVotes.totalStars * 100}`} height={15} />
          </div>
          <div class='flex-parent'>
            <span class='progress-bar-label'>4</span>
            <ProgressBar bgcolor="orange" progress={`${reviewMetaData.ratings[5] / totalVotes.totalStars * 100}`} height={15} />
          </div>
          <div class='flex-parent'>
            <span class='progress-bar-label'>5</span>
            <ProgressBar bgcolor="orange" progress={`${reviewMetaData.ratings[5] / totalVotes.totalStars * 100}`} height={15} />
          </div>
        </div>
        {
          fitRatings.Fit ?
            <div>
              <h4>Size</h4>
              <RangeSlider value={fitRatings.Fit.value / 5 * 100} />
              <div className='flex-parent'>
                <span className='flex-child-1'>Too Small</span>
                <span className='flex-child-1 text-center'>Perfect</span>
                <span className='flex-child-1 text-end' >Too Large</span>
              </div>

            </div> :
            <div>
              <h4>Fit</h4>
              <div>Loading...</div>
            </div>
        }
        {
          fitRatings.Comfort ? <div>
            <h4>Comfort</h4>
            <RangeSlider value={fitRatings.Comfort.value / 5 * 100} />
            <div className='flex-parent'>
              <span className='flex-child-1'>Poor</span>
              <span className='flex-child-1 text-end'>Perfect</span>
            </div>

          </div> :
            <div>
              <h4>Comfort</h4>
              <div>Loading...</div>
            </div>
        }
        {/* progress bar https://www.geeksforgeeks.org/how-to-create-a-custom-progress-bar-component-in-react-js/ */}
      </div > : <div>Loading</div>
  );
};

export default RatingsOverviewSection;