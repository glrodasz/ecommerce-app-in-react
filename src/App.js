import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: []};
  }
  componentWillMount() {
    const items =  this.loadFromLocalStorage().split(',');
    this.setState({ items });
  }

  saveToLocalStorage(data) {
    localStorage.setItem('data', data);
  }

  loadFromLocalStorage() {
    return localStorage.getItem('data');
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { items } = this.state;
    const inputValue = this.refs.inputItem.value;
    const data = items.concat(inputValue);

    this.setState({ items: data });
    this.saveToLocalStorage(data);
  }

  render() {
    const { items } = this.state;

    return (
      <div className="container">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
              <label className="" htmlFor="item">Item</label>
              <input ref="inputItem" className="form-control" id="inputItem" type="text"></input>
          </div>
          <button className="btn btn-primary">Add</button>
        </form>
        {items.join(',')}
        <List items={items} />
      </div>
    );
  }
}

export default App;
