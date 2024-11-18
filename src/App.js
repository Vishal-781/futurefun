import logo from './image.png';
import './App.css';
import React, { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          useEffect(() => {
          const timer = setTimeout(() => {
            alert('Kya hua nahi dikha ? \nHame bhi ni dikh raha 🙂');
          }, 10000);

          return () => clearTimeout(timer);
        }, [])
        }
        <p style={{ padding: '20px', color: 'Cyan', margin: '100px' }}>
          Welcome to Future Fun
        </p>

        </header>
    </div>
  );
}

export default App;
