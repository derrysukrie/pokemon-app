/* eslint-disable react/button-has-type */
import React from 'react';
import './style.css';

const PrimaryButton = ({ title }) => {
  return <button className="primary-button">{title}</button>;
};

const ActionButton = ({ title, action }) => {
  return (
    <button onClick={action} className="action-button">
      {title}
    </button>
  );
};

export { PrimaryButton, ActionButton };
