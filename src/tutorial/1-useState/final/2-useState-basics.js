import React, { useState } from 'react';
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

const UseStateBasics = () => {
  const [text, setText] = useState('random title'); 
  //the initial state ('text') is the same as the value passed as the first argument('random title')
  //setText is a function used to update the state(text), it accepts a new state value, and re-renders the comp
  const handleClick = () => {
    if (text === 'random title') { 
      setText('hello world'); //setText changing the state('random title' to 'hello world')
    } else {
      setText('random title');
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
