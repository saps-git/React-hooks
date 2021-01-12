import React from 'react';

const ErrorExample = () => {
  let title = 'random title';

  const handleClick = () => {
    title = 'hello people'; //doing like this will not make the change permenant, it'll revert back on reload
    console.log(title); 
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
