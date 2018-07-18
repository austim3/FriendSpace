import React, { Component } from 'react';
import './App.css';


import {
  Route,
} from 'react-router-dom'




import RegisterScreen from './Screen/RegisterScreen';
import ChangePersonInfoScreen from './Screen/ChangePersonInfoScreen';
import HomeScreen from './Screen/HomeScreen';
import CreateMessageScreen from './Screen/CreateMessageScreen';
import CreateUserScreen from './Screen/CreateUserScreen';
import AddFriendScreen from './Screen/AddFriendScreen';
import FriendScreen from './Screen/FriendScreen';
import PerssonInfoScreen from './Screen/PerssonInfoScreen';
import LoginScreen from './Screen/LoginScreen';
import EditPasswordScreen from './Screen/EditPasswordScreen';

class App extends Component {
  render() {
    return (
        <div>
          <Route path={'/RegisterScreen'} component={RegisterScreen} />
          <Route path={'/ChangePersonInfoScreen'} component={ChangePersonInfoScreen} />
          <Route path={'/CreateUserScreen'} component={CreateUserScreen} />
          <Route path={'/CreateMessageScreen'} component={CreateMessageScreen} />
          <Route path={'/HomeScreen'} component={HomeScreen} />
          <Route path={'/FriendScreen'} component={FriendScreen} />
          <Route path={'/AddFriendScreen'} component={AddFriendScreen} />
          <Route path={'/LoginScreen'} component={LoginScreen} />
          <Route path={'/EditPasswordScreen'} component={EditPasswordScreen} />
          <Route path={'/PerssonInfoScreen'} component={PerssonInfoScreen} />
        </div>
    );
  }
}

export default App;
