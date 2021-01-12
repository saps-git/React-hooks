// Use reducer is used to basically change the state
// Refer to the pic for differnce

import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { reducer } from './reducer'; // importing reducer function from another file

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};
const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState); //reducer function changes the state
  //reducer func is called with the help of discpatcher
  //defaultState or initialState, can be defined inline, or as a seperate var above

  //We don't directly control the state here, like previous hooks, we control it via dispatch method, 
  //which calls reducer and changes the state according to the action specified
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newItem }); 
      // type = the type of action to be performed on state in reducer method, 
      // payload = extra value added to the dispatcher
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>add </button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: 'REMOVE_ITEM', payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
