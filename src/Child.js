import React, { Component } from 'react';

class Child extends Component {
  render() {
    return (
      <div>{this.props.greetings} mundo</div>
    );
  }
}

export default Child;
