import React, { Component } from 'react';
import App from './App.jsx';
import Login from './Login.jsx';
import fire from '../config/fire';

class Home extends Component {
  constructor(props){
    super(props);
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.login.authenticateUser(true);
      } else {
        this.props.login.authenticateUser(false);
      }
    });
  }
  render(){
    return (
      <div className="container mt-5">
        {this.props.loginData.validation ? (<App data={this.props.data} funcs={this.props.funcs} />) : (<Login authenticateUser={this.props.login.authenticateUser} failedAttempt={this.props.login.failedAttempt} attempt={this.props.loginData.attempt} />)}
      </ div>
    );
    }
}

export default Home;
