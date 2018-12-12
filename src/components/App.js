import React from 'react';

import Nav from './Nav'
import Body from './Body'

// App doesn't hold state anymore, so it can be
// a stateless function
const App = () => (
  <div className="app">
    <Nav />
    <Body />
  </div>
);

export default App;
