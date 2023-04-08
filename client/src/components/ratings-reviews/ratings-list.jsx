import React, { useState } from 'react';
import RatingsTile from './ratings-tile.jsx';
import SubmitReviewModal from './submit-review-modal.jsx';
import Modal from 'react-modal';

const RatingsList = (props) => {

  const [sortBy, setSortBy] = useState('relevant');
  const [modalIsShowing, setModalIsShowing] = useState(false);



  const addNewReview = () => {
    console.log('Add new review clicked!');
    setModalIsShowing(!modalIsShowing);
  };

  const seeMoreReviews = () => {
    props.setReviewCount(props.reviewCount + 2);
    //console.log('See more reviews clicked! ', props.reviewCount);
    //we need to render more reviews, by passing a param to server call that incr count
    props.getReviews(sortBy, props.productID, props.reviewCount);
  };

  const sortReviews = (sortBy) => {
    console.log('Sort reviews button clicked! Reviews will be sorted by: ' + sortBy);
    setSortBy(sortBy);
    props.getReviews(sortBy, props.productID, props.reviews.length);
  };

  return (
    <div class='flex-child-2' id='ratingsList' >
      {props.reviews ?

        <div>
          <h1 class='in-line'>{props.reviews.length + ' reviews, sorted by'}</h1>
          <div class='in-line dropdown'>
            <button class='button'>
              {sortBy}
            </button>
            <div class='dropdown-options'>
              <button class='button' onClick={() => {
                sortReviews('newest');
              }}>newest</button>
              <button class='button' onClick={() => {
                sortReviews('helpful');
              }}>helpful</button>
              <button class='button' onClick={() => {
                sortReviews('relevant');
              }}>relevant</button>
            </div>
          </div>
        </div>
        : 'Loading...'}
      <ul>
        {props.reviews ? props.reviews.map((review, index) => <RatingsTile review={review} key={index} />) : 'Loading...'}
      </ul>
      <div class='flex-parent'>
        <button disabled={!props.canShowMoreReviews} id='more-reviews-btn' class='button-center flex-child-1'
          onClick={seeMoreReviews}
        >More Reviews</button>
        <button class='button-center flex-child-1'
          onClick={addNewReview}
        >Add A Review</button>
        {modalIsShowing ? <Modal
          isOpen={modalIsShowing}
          onRequestClose={() => {
            setModalIsShowing(false);
          }}
          contentLabel='Submit Review'>
          <SubmitReviewModal productID={props.productID} setModalIsShowing={setModalIsShowing} productName={props.productName} />
        </Modal> : null}
      </div>
    </div >

  );
};

export default RatingsList;