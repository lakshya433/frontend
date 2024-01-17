import React from 'react';
import './Card.css';

const Card = ({ title, content, className, onClick, selected }) => {
  return (
    <div className={`card ${className} ${selected ? 'notification' : ''}`} onClick={onClick}>
      <div className="notiglow"></div>
      <div className="notiborderglow"></div>
      <div className="notititle">{title}</div>
      <div className="notibody">{content}</div>
    </div>
  );
}

export default Card;
