import React from 'react';
import Question from './components/Question.jsx';

const QuestionAnswer = ( {questionList} ) => {
  //required props for initial render are the questionList array
    //Max Two questions (sorted by 'helpful')
      //Max first two answers for each of the questions (seller responses always at top, otherwise sort by helpful)

  //fake data for development purposes
  if (questionList === undefined) {
    var fakeQuestion = {
      question: 'When I wear it outside, is the color more blue or green?',
      answers: [
        {
          answer: 'It is more green when in the sun',
          likes: 23,
          userName: 'User13377',
          date: 'May 1, 2019',
          images: ['www.fakeImage.com'],
          id: 1
        },
        {
          answer: 'i think it is acutally more purple',
          likes: 0,
          userName: 'badApple21',
          date: 'August 1, 2021',
          images: [],
          id: 2
        }
      ],
      likes: 25,
      id: 1
    }
    var questionList = [fakeQuestion];
  }

  return (
    <div className = 'width-75 text-center margin-auto'>
      <h3 className = 'float-left'>Question & Answers</h3>
      <div className = 'search-bar full-width'>
        <input className = 'full-width' type='text' placeholder = 'HAVE A QUESTION? SEARCH FOR ANSWERS...'/>
      </div>
      <div className = 'all-questions'>
          {questionList.map((question) =>
            <Question question={question} key={question.id}/>
          )}
      </div>
      <div className = 'flex-around'>
          <button type = 'button'>MORE ANSWERED QUESTIONS</button>
          <button type = 'button'>ADD A QUESTION +</button>
      </div>
    </div>
  )
}
export default QuestionAnswer;