import React from 'react';
import './App.css';

function App() {
  const addCounter = () => {
    console.log('+');
  };
  const removeCounter = () => {
    console.log('-');
  };
  return (
    <div className='Arr'>
      <div className='wrapper'>
        <div className='wrapper-counter'>1</div>
        <div className='wrapper-btn'>
          <button className='btn btn-add' onClick={addCounter}>
            &#x25b2;
          </button>
          <button className='btn btn-remove' onClick={removeCounter}>
            &#x25bc;
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
