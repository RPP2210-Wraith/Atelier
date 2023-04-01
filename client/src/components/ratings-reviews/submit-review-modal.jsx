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
      <input type='radio' value='yes'></input>
      <label>yes</label>
      <input type='radio' value='no'></input>
      <label>no</label>
      <br></br>

      <label>Characterisitcs</label>
      <br></br>

      <label>Size</label><br></br>
      <input type='radio' value='1'></input>
      <label>1</label>
      <input type='radio' value='2'></input>
      <label>2</label>
      <input type='radio' value='3'></input>
      <label>3</label>
      <input type='radio' value='4'></input>
      <label>4</label>
      <input type='radio' value='5'></input>
      <label>5</label>
      <br></br>

      <label>Width</label>
      <br></br>
      <input type='radio' value='1'></input>
      <label>1</label>
      <input type='radio' value='2'></input>
      <label>2</label>
      <input type='radio' value='3'></input>
      <label>3</label>
      <input type='radio' value='4'></input>
      <label>4</label>
      <input type='radio' value='5'></input>
      <label>5</label>
      <br></br>


      <label>Comfort</label>
      <br></br>
      <input type='radio' value='1'></input>
      <label>1</label>
      <input type='radio' value='2'></input>
      <label>2</label>
      <input type='radio' value='3'></input>
      <label>3</label>
      <input type='radio' value='4'></input>
      <label>4</label>
      <input type='radio' value='5'></input>
      <label>5</label>
      <br></br>

      <label>Quality</label>
      <br></br>

      <input type='radio' value='1'></input>
      <label>1</label>
      <input type='radio' value='2'></input>
      <label>2</label>
      <input type='radio' value='3'></input>
      <label>3</label>
      <input type='radio' value='4'></input>
      <label>4</label>
      <input type='radio' value='5'></input>
      <label>5</label>
      <br></br>

      <label>Length</label>
      <br></br>
      <input type='radio' value='1'></input>
      <label>1</label>
      <input type='radio' value='2'></input>
      <label>2</label>
      <input type='radio' value='3'></input>
      <label>3</label>
      <input type='radio' value='4'></input>
      <label>4</label>
      <input type='radio' value='5'></input>
      <label>5</label>
      <br></br>

      <label>Fit</label>
      <br></br>
      <input type='radio' value='1'></input>
      <label>1</label>
      <input type='radio' value='2'></input>
      <label>2</label>
      <input type='radio' value='3'></input>
      <label>3</label>
      <input type='radio' value='4'></input>
      <label>4</label>
      <input type='radio' value='5'></input>
      <label>5</label>
      <br></br>


      <label>Review Summary</label>
      <br></br>
      <textarea placeholder='Example: Best purchase ever!'></textarea>
      <br></br>
      <label>Review Body *</label>
      <br></br>
      <textarea placeholder='Why did you like the product or not?'></textarea>
      <br></br>
      <button>upload your photos</button>
      <br></br>
      <label>username</label>
      <br></br>
      <input placeholder='Example: jackson11!'></input>
      <br></br>
      <label>email</label>
      <br></br>
      <input placeholder='Example: jackson11@email.com'></input>
      <br></br>
      <button>Submit</button>
    </form>
  </div>
};

export default SubmitReviewModal;