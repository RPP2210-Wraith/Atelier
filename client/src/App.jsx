import React from 'react';
import Overview from './components/overview/Overview.jsx';
import QuestionAnswer from './components/question-answer/QuestionAnswer.jsx';
import RatingsReviews from './components/ratings-reviews/RatingsReviews.jsx';
import RelatedItemsComparison from './components/related-items-comparison/RelatedItemsComparison.jsx';



const App = () => {
  return (
    <div>
      <Overview />
      <QuestionAnswer />
      <RatingsReviews />
      <RelatedItemsComparison />
    </div>
  )
}

export default App;