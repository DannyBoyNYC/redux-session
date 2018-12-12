import React, { Component } from 'react';

import Nav from './Nav'
import Body from './Body'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Body />
      </div>
    );
  }
}

export default App;