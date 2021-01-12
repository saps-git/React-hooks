import React from 'react';
import { data } from '../../../data'; //data is an array imported from data.js
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data); //people is set to data array

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id); //filtering out the matching id
    setPeople(newPeople); 
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button> {/* here in removeItem() 
            we are calling that function with a parameter, rather than just passing the function to onClick, 
            hence the onClick function fire on render, to make it not to, we change it to an arrow function(callback function) */}
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
