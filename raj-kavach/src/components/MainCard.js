import React from 'react';
import './MainCard.css';
import cardData5 from '../cards/cardData5'; // Import the data file

const MainCard = ({ onClick, selected }) => {
  return (
    <div 
      className={`card main-card ${selected ? 'selected' : ''}`} 
      onClick={onClick}
    >
     
      <div className="notititle">{cardData5.title}</div>
      <div className="notibody">{cardData5.content}</div>
    </div>
  );
}

export default MainCard;
