import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <div className='wrapper-counter'>1</div>
        <div className='wrapper-btn'>
          <button className='btn btn-add'>add</button>
          <button className='btn btn-remove'>remove</button>
        </div>
      </div>
    </div>
  );
}

export default App;
