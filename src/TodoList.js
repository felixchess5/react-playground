import React from 'react';
import logo from './logo.svg';
import List from './List.js'
import './TodoList.css';
import { tsConstructorType } from '@babel/types';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default class TodoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        term: '',
        items: [],
      };
    }
    onChange = (event) => {
      this.setState({term: event.target.value});
    }

    onSubmit = (event) => {
      event.preventDefault();
      this.setState({
        term: '',
        items: [...this.state.items, this.state.term],
      });
    }
   
    
    render() {
      return (
      <div>
        <form className="TodoList" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
      );
    };
}


