import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const addCounter = () => {
    setCount(count + 1);
    console.log(count);
  };
  const removeCounter = () => {
    setCount(count - 1);
    console.log(count);
  };
  return (
    <div className='wrapper'>
      <div className='counter'>{count}</div>
      <div className='wrapper-btn'>
        <button className='btn btn-add' onClick={addCounter}>
          &#x25b2;
        </button>
        <button className='btn btn-remove' onClick={removeCounter}>
          &#x25bc;
        </button>
      </div>
    </div>
  );
}

export default Counter;
