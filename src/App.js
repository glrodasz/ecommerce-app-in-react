import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

class App extends Component {
    render() {
      const cards = [
        {
          title: "Guillermo",
          date: new Date(),
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          friends: 300
        }
      ]
      return (
        <Container text>
          {/* TODO: print cards */}
        </Container>
      );
    }
}

export default App;
