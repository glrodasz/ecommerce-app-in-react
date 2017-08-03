import React, { Component } from 'react';
import Child from './Child';

class App extends Component {
    componentWillMount() {
      console.log("This will mount");
    }

    componentDidMount() {
      console.log("This did mount");
    }

    componentWillUnmount() {
      console.log("This will unmount");
    }

    render() {
      console.log("I am just rendering like a boss");

      this.setState({});

      return (
        <div className="">
          <h1>I got rendered!</h1>
          <Child greetings="Hola" />
        </div>
      );
    }
}

export default App;
