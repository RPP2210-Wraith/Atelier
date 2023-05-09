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
    <div className='flex-child-2' id='ratingsList' >
      {props.reviews ?

        <div>
          <h1 className='in-line'>{props.reviews.length + ' reviews, sorted by'}</h1>
          <div className='in-line dropdown'>
            <button className='button'>
              {sortBy}
            </button>
            <div className='dropdown-options'>
              <button className='button' onClick={() => {
                sortReviews('newest');
              }}>newest</button>
              <button className='button' onClick={() => {
                sortReviews('helpful');
              }}>helpful</button>
              <button className='button' onClick={() => {
                sortReviews('relevant');
              }}>relevant</button>
            </div>
          </div>
        </div>
        : 'Loading...'}
      <ul>
        {props.reviews ? props.reviews.map((review, index) => <RatingsTile review={review} key={index} />) : 'Loading...'}
      </ul>
      <div className='flex-parent'>
        <button disabled={!props.canShowMoreReviews} id='more-reviews-btn' className='button-center flex-child-1'
          onClick={seeMoreReviews}
        >More Reviews</button>
        <button className='button-center flex-child-1'
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