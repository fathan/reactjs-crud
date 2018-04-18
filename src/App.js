import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import HelloMessage from './views/Learning/HelloMessage';
import Timer from './views/Learning/Timer';
import TodoApp from './views/Learning/TodoApp';
import MarkdownEditor from "./views/Learning/MarkdownEditor";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr/>
        <HelloMessage name="Fathan Rohman in React.js"/>
        <Timer/>
        <TodoApp/>
        <MarkdownEditor/>
      </div>
    );
  }
}

export default App;
