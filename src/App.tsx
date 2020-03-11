import React from 'react';
import './App.scss';
import { Row, Col, Layout } from 'antd';
import MainMenuContainer from './components/MainMenu/MainMenuContainer';
import StationsListContainer from './components/StationsList/StationsListContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const { Content } = Layout;

function App() {
  return (
    <div className="app">
      <HeaderContainer />
      <Content className="app__main" style={{ padding: '0 50px', margin: '0 auto', width: '1024px' }}>
        <Row>
          <Col span={12} style={{padding: '0 30px', overflow: 'auto', height: '640px'}}>
            <MainMenuContainer />
          </Col>
          <Col span={12} style={{padding: '0 30px', overflow: 'auto', height: '640px'}}>
            <StationsListContainer />
          </Col>
        </Row>
      </Content>
    </div>
  );
}

export default App;
