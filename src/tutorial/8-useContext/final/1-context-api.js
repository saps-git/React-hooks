// Context provides a way to pass data through the component tree without having to pass props down manually at every level

import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// should be used when there are more that 2-3 components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();
// createContext gives us two components - Provider, Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson, people }}> {/* main return needs to be wrapped in the PersonContext.Provider */}
    {/* value contains the props that you wan't to pass, it will be available to all children components */}
    {/* the children components then can destructure what ever they want from the contex */}
    {/* as shown below, one child destructures people array, and the other removePerson function */}
      <h3>Context API / useContext</h3>
      <List /> {/* then no need to pass props here */}
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext); //destructuring the data(people array) with useContext and context ver(PersonContext)
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext); //destructuring the function(removePerson) 

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
