import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); //react will refresh the page as soon as the form is submitted(default), to stop that behaviour
    if (firstName && email) { //if both firstName and email aren't empty (i.e they have values)
      const person = { id: new Date().getTime().toString(), firstName, email }; //use uuid for id
      //making the person object, firstName: firstName, email: email 
      console.log(person);
      setPeople((people) => { //setting people
        return [...people, person];
      });
      setFirstName(''); //emptying both the strings for next input
      setEmail('');
    } else {
      console.log('empty values');
    }
  };
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label> {/* htmlFor will link the label to the specified input id */}
            <input
              type='text'
              id='firstName'  // htmlFor will link to this (id)
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} //e = event, the input that is being typed
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {people.map((person, index) => { //displaying the input
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
