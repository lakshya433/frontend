// Card.js
import React from 'react';
import './Card.css'; // Common styles for all cards

const Card = ({ title, content, className, onClick, selected }) => {
  return (
    <div 
      className={`card ${className} ${selected ? 'selected' : ''}`} 
      onClick={onClick}
    >
      <div className="notiglow"></div>
      <div className="notiborderglow"></div>
      <div className="notititle">{title}</div>
      <div className="card-body">{content}</div>
    </div>
  );
}

export default Card;
