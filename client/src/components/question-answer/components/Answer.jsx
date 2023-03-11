import React from 'react';

const Answer = ( {answer} ) => {

  return (
    <div className = 'block text-left'>
      <p>{`A: ${answer.answer}`}</p>
      <div className = 'flex-start'>
        <p>{`by ${answer.userName}, ${answer.date} | Helpful? `}</p>
        <a className = 'underline align-middle'>Yes</a>
        <p>{`(${answer.likes}) | `}</p>
        <a className = 'underline align-middle'>Report</a>
      </div>
    </div>
  )
}
export default Answer;