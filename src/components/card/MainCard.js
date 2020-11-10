import React from 'react';
import './style.css';
import { PrimaryButton } from 'components/buttons';

function MainCard({ list }) {
  return (
    <div className="card-container">
      <div
        style={{ width: '100%' }}
        className="d-flex flex-start align-items-center"
      >
        <div>
          <img src="/pokeball.svg" alt="..." width="35" />
        </div>
        <div className="name ml-5">
          <span>{list.name}</span>
        </div>
        <div className="ml-auto">
          <PrimaryButton title="Details" />
        </div>
      </div>
    </div>
  );
}

export default MainCard;
