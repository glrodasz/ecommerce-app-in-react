import React, { Component } from 'react';

const styles = {
  background: 'white',
  margin: '1em 0',
  listStyle: 'none',
  padding: '10px',
  fontSize: '16px'
};

class List extends Component {
  render() {
    const { items } = this.props;

    return (
      <ul style={styles}>
        {items.map(item => <li>{item}</li>)}
      </ul>
    );
  }
}

export default List;
