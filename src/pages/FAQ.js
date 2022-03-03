import React from 'react';
import questionList from '../assets/js/questions';

function FAQ () {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      {questionList.map((q,i) =>(
        <div>
          <p style={{fontWeight: "bold"}}>{q.question}</p>
          <p>{q.answer}</p>
          <br />
        </div>
      ))}
    </div>
  )
};

export default FAQ;

