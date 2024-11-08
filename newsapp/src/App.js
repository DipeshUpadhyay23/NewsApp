
import './App.css';
 
import React, { Component } from 'react'
import NavBar from './componenets/NavBar';
import News from './componenets/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News/>
      </div>
    )
  }
}

