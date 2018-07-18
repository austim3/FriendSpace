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

import CreateUserScreen from './Screen/CreateUserScreen';



class App extends Component {

  render() {
    return (
      <div>

        <Route path={'/RegisterScreen'} component={RegisterScreen} />
        <Route path={'/CreateUserScreen'} component={CreateUserScreen} />
        <Route path={'/ChangePersonInfoScreen'} component={ChangePersonInfoScreen} />
      </div>
    );
  }
}

export default App;