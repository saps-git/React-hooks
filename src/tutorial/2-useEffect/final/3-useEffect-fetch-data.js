import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

// second argument

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    //Because the await keyword is present, the asynchronous function is paused until the request completes. 
    const response = await fetch(url); //The Response object, returned by the await fetch(), is a generic placeholder for multiple data formats. 
    const users = await response.json(); //response.json() is a method on the Response object that lets you 
    //extract a JSON object from the response. The method returns a promise, 
    //so you have to wait for the JSON: await response.json().
    
    setUsers(users); 
    // console.log(users);
  };

  //async function returns a promise and useEffect doesn't expect the callback function to return Promise, 
  //rather it expects that nothing is returned or a function is returned, hence we define the async function 
  //outside(above) the useEffect hook, and just call it inside the hook.

  useEffect(() => {
    getUsers();
  }, []); //setUsers as it is a function of useState, hence it will re-render after it's completion, 
  //setting useEffect to fire again, hence we add the empty dependency list([]), as the second parameter, 
  //so as to avoid useEffect to keep on rendering
  
  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
