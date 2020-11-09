import React from 'react';
import { Tabs } from 'antd';

import './style.css';

const { TabPane } = Tabs;
function Menus() {
  function callback(key) {
    console.log(key);
  }

  return (
    <div className="menus-container">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Abilities" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Moves" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Location" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Menus;
