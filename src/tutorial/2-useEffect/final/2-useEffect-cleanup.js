import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('useEffect'); 
    window.addEventListener('resize', checkSize); // will add an EventListener(which responds to any event), 
    //to resize property of window(i.e respond whenever there's a change to resize), 
    //and call function checkSize in that case
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize); //will remove the EventListener
    };
  }, []);
  console.log('render');
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
