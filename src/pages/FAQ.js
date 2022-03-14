import React from 'react';
import questionList from '../assets/js/questions';

function FAQ () {
  return (
    <div style={{textAlign: 'center', marginTop: '20vmin'}}>
      <h1 style={{fontSize: '14vmin', marginBottom: '4vmin'}}>Frequently Asked Questions</h1>
      {questionList.map((q,i) =>(
        <div style={{textAlign: 'left', fontSize: '3.5vmin', margin: '4vmin'}}>
          <p style={{fontWeight: "bold"}}>{q.question}</p>
          <p>{q.answer}</p>
          <br />
        </div>
      ))}
    </div>
  )
};

export default FAQ;

