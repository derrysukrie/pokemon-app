import React from 'react';
import './style.css';

function MainCard({ list }) {
  console.log(list);

  return (
    <div className="card-container">
      <div className="name">{list.name}</div>
    </div>
  );
}

export default MainCard;
