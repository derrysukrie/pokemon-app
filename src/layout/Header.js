import React from 'react';
import 'styles/App.css';

function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        {' '}
        <h4 style={{ maxWidth: 250, fontWeight: 600 }}>
          What Pokemon are you looking for?
        </h4>
      </div>

      <div>
        <div className="App">
          <header className="App-header">
            <img src="/pokeball.svg" className="App-logo" alt="logo" />
          </header>
        </div>
      </div>
    </div>
  );
}

export default Header;
