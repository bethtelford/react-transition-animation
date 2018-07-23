import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      expand: false
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt='hamburger menu' onClick={()=> this.setState({expand:!this.state.expand})}/>
          <ul className={`nav ${this.state.expand ? 'expand': null}`}>
            <li>Home</li>
            <li>About Us</li>
            <li>Pet Search</li>
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
