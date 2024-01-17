import React, { useState } from 'react';
import NavScrollExample from './components/navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxClick = (boxNumber) => {
    setSelectedBox(boxNumber);
  };

  return (
    <div className="app-container">
      <div className="App-header">
        <NavScrollExample />
      </div>

      <div className="main-content-wrapper">
        {[1, 2, 3, 4].map((boxNumber) => (
          <div
            key={boxNumber}
            className={`content-box ${selectedBox === boxNumber ? 'selected' : ''}`}
            onClick={() => handleBoxClick(boxNumber)}
          >
            <div className="content-box-text">Box {boxNumber}</div>
          </div>
        ))}
        <div className="main-content-box">Main Content Box</div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
