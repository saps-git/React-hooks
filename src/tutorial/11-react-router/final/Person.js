import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const [name, setName] = useState('default name');
  const { id } = useParams(); // useParams will fetch the 'id' from the url 

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id)); // finding the person that matches with the id from the url
    //parseInt - the id we get is in string, hence to convert it to string 
    setName(newPerson.name);
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      <Link to='/people' className='btn'>
        Back To People
      </Link>
    </div>
  );
};

export default Person;
