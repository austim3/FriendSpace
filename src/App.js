import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DocumentTitle from 'react-document-title';

import {
  Route,
} from 'react-router-dom'

import { Button } from 'antd-mobile';


import RegisterScreen from './Screen/RegisterScreen';
import ChangePersonInfoScreen from './Screen/ChangePersonInfoScreen';
import HomeScreen from './Screen/HomeScreen';
import CreateMessageScreen from './Screen/CreateMessageScreen';
import CreateUserScreen from './Screen/CreateUserScreen';
<<<<<<< HEAD
=======
import AddFriendScreen from './Screen/AddFriendScreen';
import FriendScreen from './Screen/FriendScreen';
import PerssonInfoScreen from './Screen/PerssonInfoScreen';
import LoginScreen from './Screen/LoginScreen';
import EditPasswordScreen from './Screen/EditPasswordScreen';
>>>>>>> zhangyu
import AScreen from './Screen/AScreen';
import BScreen from './Screen/BScreen';

class App extends Component {
  render() {
    return (
      <DocumentTitle title='HomeTitle'>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Button>Click</Button>
          <Route path={'/a'} component={AScreen} />
          <Route path={'/b'} component={BScreen} />
          <Route path={'/RegisterScreen'} component={RegisterScreen} />
          <Route path={'/ChangePersonInfoScreen'} component={ChangePersonInfoScreen} />
          <Route path={'/CreateUserScreen'} component={CreateUserScreen} />
          <Route path={'/CreateMessageScreen'} component={CreateMessageScreen} />
          <Route path={'/HomeScreen'} component={HomeScreen} />
<<<<<<< HEAD
          <Route path={'/HomeScreen'} component={HomeScreen} />
=======
          <Route path={'/FriendScreen'} component={FriendScreen} />
          <Route path={'/AddFriendScreen'} component={AddFriendScreen} />
          <Route path={'/LoginScreen'} component={LoginScreen} />
          <Route path={'/EditPasswordScreen'} component={EditPasswordScreen} />
          <Route path={'/PerssonInfoScreen'} component={PerssonInfoScreen} />
>>>>>>> zhangyu
        </div>
      </DocumentTitle>
    );
  }
}

export default App;
