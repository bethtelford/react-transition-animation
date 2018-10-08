import React, { Component } from 'react';
import './App.css';
import hamburger from './hamburger_menu.svg';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      show: false
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    return (
      <div className="App">
        <header>
          <img onClick={this.toggle}src={hamburger}/>
          <ul className={this.state.show ? 'basic show': 'basic hide'}>
            <li>Home</li>
            <li>About </li>
            <li>Store</li>
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
