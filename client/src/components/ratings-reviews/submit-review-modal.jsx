import React, { useState } from 'react';
import StarRating from './star-rating-component.jsx';
import CharacterisitcsRadioButton from './characteristics-radio-button.jsx'
import axios from 'axios';

const SubmitReviewModal = (props) => {



  const characteristicsObj = {
    Size: 0,
    Width: 0,
    Comfort: 0,
    Quality: 0,
    Length: 0,
    Fit: 0
  };

  const [starRating, setStarRating] = useState(0);
  const [recommend, setRecommend] = useState(null);
  const [characteristics, setCharacteristics] = useState(characteristicsObj);
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');



  const recommendProductChangeHandler = (e) => {
    console.log(e.target.value);
    setRecommend(e.target.value);
  }

  const reviewSummaryChangeHandler = (e) => {
    //console.log(e.target.value);
    setReviewSummary(e.target.value);
  }

  const reviewBodyChangeHandler = (e) => {
    // console.log(e.target.value);
    setReviewBody(e.target.value);
  }

  const usernameChangeHandler = (e) => {
    // console.log(e.target.value);
    setUsername(e.target.value);
  }

  const emailChangeHandler = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  }

  const onSubmit = () => {

    if (starRating === 0 || recommend === null || reviewBody === '') {
      alert('Fields with a \'*\' next to them must be filled in order to submit a new review. Please fill them in.');
    } else {

      const newReview = {};
      newReview.product_id = props.productID;
      newReview.rating = starRating;
      newReview.summary = reviewSummary;
      newReview.body = reviewBody;
      newReview.recommend = recommend;
      newReview.name = username;
      newReview.email = email;
      newReview.photos = [];
      newReview.characteristics = characteristics;
      console.log('New Review: ', newReview);
      props.setModalIsShowing(false);

      axios({
        method: 'POST',
        url: '/reviews',
        data: newReview
      }).then((res) => {
        console.log('post new review: ', res);
      })

    }

  }





  return <div >
    <h1 onClick={() => {
      //console.log('Characteristics: ', characteristics);
    }}>Write Your Review</h1>
    <h4>{'About the [Product Name Here]'}</h4>

    <label>Overall Rating *</label>

    <div className='in-line dropdown bottom-margin'>
      <StarRating rating={starRating} size='40px' onClick={() => {
        console.log('just clicked stars!')
      }} />
      <div className='dropdown-options'>
        <span className='submit-rating-star' onClick={() => {
          setStarRating(1);
        }}>★</span>
        <span className='submit-rating-star' onClick={() => {
          setStarRating(2);
        }}>★</span>
        <span className='submit-rating-star' onClick={() => {
          setStarRating(3);
        }}>★</span>
        <span className='submit-rating-star' onClick={() => {
          setStarRating(4);
        }}>★</span>
        <span className='submit-rating-star' onClick={() => {
          setStarRating(5);
        }}>★</span>
      </div>
    </div>
    <br></br>

    <label>Do you recommend this product? *</label>
    <input name='rec' type='radio' value={true} onClick={recommendProductChangeHandler}></input>
    <label>yes</label>
    <input name='rec' type='radio' value={false} onClick={recommendProductChangeHandler}></input>
    <label>no</label>
    <br></br>

    <h3>Characterisitcs</h3>
    <br></br>

    <CharacterisitcsRadioButton title='Size' characteristics={characteristics} setCharacteristics={setCharacteristics} />
    <CharacterisitcsRadioButton title='Width' characteristics={characteristics} setCharacteristics={setCharacteristics} />
    <CharacterisitcsRadioButton title='Comfort' characteristics={characteristics} setCharacteristics={setCharacteristics} />
    <CharacterisitcsRadioButton title='Quality' characteristics={characteristics} setCharacteristics={setCharacteristics} />
    <CharacterisitcsRadioButton title='Length' characteristics={characteristics} setCharacteristics={setCharacteristics} />
    <CharacterisitcsRadioButton title='Fit' characteristics={characteristics} setCharacteristics={setCharacteristics} />

    <h3>Review Summary</h3>
    <br></br>
    <textarea placeholder='Example: Best purchase ever!' maxLength='60' cols='50' rows='5' onChange={reviewSummaryChangeHandler}></textarea>
    <br></br>

    <h3>Review Body *</h3>
    <br></br>
    <textarea placeholder='Why did you like the product or not?' maxLength='1000' cols='50' rows='10' onChange={reviewBodyChangeHandler}></textarea>
    <br></br>

    <button>upload your photos</button>
    <br></br>

    <h3>username</h3>
    <br></br>
    <textarea placeholder='Example: jackson11!' cols='50' onChange={usernameChangeHandler}></textarea>
    <br></br>

    <h3>email</h3>
    <br></br>
    <textarea placeholder='Example: jackson11@email.com' cols='50' onChange={emailChangeHandler}></textarea>
    <br></br>

    <button onClick={onSubmit}>Submit</button>

  </div >
};

export default SubmitReviewModal;