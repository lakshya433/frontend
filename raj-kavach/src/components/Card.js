import React from 'react';
import './Card.css';

const Card = ({ title, content, className, onClick, selected }) => {
  const isHomeCard = title === "Home";
  return (
    <div 
      className={`card ${className} ${selected ? 'notification' : ''} ${!selected && isHomeCard ? 'home-card' : ''}`} 
      onClick={onClick}
    >
      <div className="notiglow"></div>
      <div className="notiborderglow"></div>
      <div className="notititle">{title}</div>
      <div className="notibody">{content}</div>
    </div>
  );
}

export default Card;
