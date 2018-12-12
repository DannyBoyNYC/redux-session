import React from 'react';

import Sidebar from './Sidebar'
import Content from './Content'

// Body doesn't need to know about `user` anymore
const Body = () => (
  <div className="body">
    <Sidebar />
    <Content />
  </div>
);

export default Body