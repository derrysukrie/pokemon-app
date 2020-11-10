import React from 'react';
import { Tabs } from 'antd';

import './style.css';
import About from './about/About';
import Moves from './moves/moves';

const { TabPane } = Tabs;
function Menus({ pokemonPayload }) {
  return (
    <div className="menus-container">
      <Tabs defaultActiveKey="1">
        <TabPane tab="About" key="1">
          <About pokemonPayload={pokemonPayload} />
        </TabPane>
        <TabPane tab="Moves" key="2">
          <Moves pokemonPayload={pokemonPayload} />
        </TabPane>
        {/* <TabPane tab="Location" key="3">
          Content of Tab Pane 3
        </TabPane> */}
      </Tabs>
    </div>
  );
}

export default Menus;
