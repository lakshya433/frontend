import React from 'react';
import './SideCard.css';
import cardData1 from '../cards/cardData1';
import cardData2 from '../cards/cardData2';
import cardData3 from '../cards/cardData3';
import cardData4 from '../cards/cardData4';

const SideCard = ({ onClick, selected }) => {
  return (
    <div 
      className={`card side-card ${selected ? 'selected' : ''}`} 
      onClick={onClick}
    >
       <div className="notititle">{cardData1.title}</div>
      <div className="notibody">{cardData1.content}</div>

      <div className="notititle">{cardData2.title}</div>
      <div className="notibody">{cardData2.content}</div>

      <div className="notititle">{cardData3.title}</div>
      <div className="notibody">{cardData3.content}</div>

      <div className="notititle">{cardData4.title}</div>
      <div className="notibody">{cardData4.content}</div>

    </div>
  );
}

export default SideCard;
