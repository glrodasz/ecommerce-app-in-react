import React, { Component } from 'react';
import Child from './Child';
import { Container } from 'semantic-ui-react';

class App extends Component {
    render() {
      return (
        <Container text>
          <h1>I got rendered!</h1>
          <Child />
        </Container>
      );
    }
}

export default App;
