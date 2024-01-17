import React from 'react';
import './Card.css';

const Card = ({ title, content, className, onClick, selected }) => {
  return (
    <div className={`card ${className} ${selected ? 'selected' : ''}`} onClick={onClick}>
      <div className={`card-header ${selected ? '' : 'rotate-left'}`}>{title}</div>
      {selected && <div className="card-body">{content}</div>}
    </div>
  );
};

export default Card;
