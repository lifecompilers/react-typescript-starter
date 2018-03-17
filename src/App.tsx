import * as React from 'react';
import { Layout } from 'antd';
import './App.css';
const { Header, Content } = Layout;

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <Layout className="App">
        <Header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </Header>
        <Content className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </Content>
      </Layout>
    );
  }
}

export default App;
