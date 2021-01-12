import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({ //can be done all in one as a object
    name: 'peter',
    age: 24,
    message: 'random message',
  });
 
  // const [name,setName] = useState('peter') //or one by one
  // const [age,setAge] = useState(24)
  // const [message,setMessage] = useState('random message')

  const changeMessage = () => {
    setPerson({ ...person, message: 'hello world' }); // '...person' is used to preserve the rest of the state, except for the one we are changing('message') 
    // setMessage('hello world')
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
