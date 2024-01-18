// Card2.js
import React from 'react';
import Card from './Card';
import './Card4.css'; // Styles specific to Card 2

const Card4 = ({ onClick, selected, special }) => {
  return (
    <Card
      title="Admin login"
      content={<span><br /><br /><br /><br /><pre>                            Username                   <input type="text" id="username" name="username"></input><br /><br />                            Password                   <input type="password" id="password" name="password"></input>      <br /><br /> <form action="/login" method="post"><button type="submit" style={{ display: 'block', margin: '0 auto' }}>Login</button></form></pre></span>}
      className="card4" // Add specific class for Card 2
      onClick={onClick}
      selected={selected}
    />
  );
};

export default Card4;
