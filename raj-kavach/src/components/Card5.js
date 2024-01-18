// Card2.js
import React from 'react';
import Card from './Card';
import './Card5.css'; // Styles specific to Card 2

const Card5 = ({ onClick, selected, special }) => {
  return (
    <Card
      title="Card 5"
      content="Content for Card 5"
      className="card5" // Add specific class for Card 5
      onClick={onClick}
      selected={selected}
    />
  );
};

export default Card5;
