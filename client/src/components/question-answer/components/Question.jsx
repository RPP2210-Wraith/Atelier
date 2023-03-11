import React from 'react';
import Answer from './Answer.jsx';

const Question = ( {question} ) => {


  return (
    <div className = 'flex'>
      <div className = 'width-75'>
        <div className = 'question text-left'>
          <p>{`Q: ${question.question}`}</p>
        </div>
        {question.answers.map((answer) =>
          <Answer answer = {answer} key = {answer.id}/>
        )}
      </div>
      <div className = 'width-25 flex'>
        <p>Helpful</p>
        <a className = 'underline'>Yes</a>
        <p>{`(${question.likes})`}</p>
        <a className = 'underline'>Add Answer</a>
      </div>
    </div>
  )
}
export default Question;