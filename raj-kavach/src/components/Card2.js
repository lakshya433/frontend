// Card2.js
import React from 'react';
import Card from './Card';
import './Card2.css'; // Styles specific to Card 2

const Card2 = ({ onClick, selected, special }) => {
  return (
    <Card
      title="URL Querry"
      content={<span>Check URL<br/><br/>Report URL</span>}
      className="card2" // Add specific class for Card 2
      onClick={onClick}
      selected={selected}
    />
  );
};

export default Card2;
