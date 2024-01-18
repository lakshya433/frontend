// Card2.js
import React from 'react';
import Card from './Card';
import './Card3.css'; // Styles specific to Card 2

const Card3 = ({ onClick, selected, special }) => {
  return (
    <Card
      title="Phone no. Querry"
      content={<span>Check Phone no.<br /><br />Report Phone no.</span>}
      className="card3" // Add specific class for Card 3
      onClick={onClick}
      selected={selected}
    />
  );
};

export default Card3;
