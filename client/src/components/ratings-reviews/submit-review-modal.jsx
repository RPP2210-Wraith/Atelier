import React from 'react';

const SubmitReviewModal = () => {
  return <div>
    <h1>Write Your Review</h1>
    <h4>{'About the [Product Name Here]'}</h4>
    <form>
      <label>Overall Rating *</label>
      <input placeholder='rating'></input>
      <br></br>
      <label>Do you recommend this product? *</label>
      <input placeholder='yes or no'></input>
      <br></br>
      <label>Characterisitcs</label>
      <br></br>
      <input type='radio'></input>
      <label>Size</label>
      <br></br>
      <input type='radio'></input>
      <label>Width</label>
      <br></br>
      <input type='radio'></input>
      <label>Comfort</label>
      <br></br>
      <input type='radio'></input>
      <label>Quality</label>
      <br></br>
      <input type='radio'></input>
      <label>Length</label>
      <br></br>
      <input type='radio'></input>
      <label>Fit</label>
      <br></br>
      <label>Review Summary</label>
      <input placeholder='Example: Best purchase ever!'></input>
      <br></br>
      <label>Review Body *</label>
      <input placeholder='Why did you like the product or not?'></input>
      <br></br>
      <button>upload your photos</button>
      <br></br>
      <label>username</label>
      <input placeholder='Example: jackson11!'></input>
      <br></br>
      <label>email</label>
      <input placeholder='Example: jackson11@email.com'></input>
      <br></br>
      <button>Submit</button>
    </form>
  </div>
};

export default SubmitReviewModal;