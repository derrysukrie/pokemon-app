/* eslint-disable react/button-has-type */
import React from 'react';
import './style.css';

const PrimaryButton = ({ title }) => {
  return <button className="primary-button">{title}</button>;
};

export { PrimaryButton };
