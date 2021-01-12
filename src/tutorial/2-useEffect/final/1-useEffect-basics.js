import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => { 
  /*
  Effects are when our application reacts with the outside world, like working with an API. 
  useEffect allows us to run a function based on whether something changed. useEffect also allows us 
  to combine componentDidMount and componentDidUpdate  
  */

  const [value, setValue] = useState(0);
  useEffect(() => { //useEffect is used, when we want to set up some side-effects, that is any work outside the component
    console.log('call useEffect');
    if (value > 0) { //we can't have hooks inside conditionals, hence we put conditionals inside the hook
      document.title = `New Messages(${value})`; 
    }
  }, []); //the second paramter is the dependency list, if it is left empty, then it will run only on the initial render,
          // if you add values to it, then it will run when there are changes to those values only  

  console.log('render component');
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
