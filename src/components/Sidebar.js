import React from 'react';

import UserStats from './UserStats'

// Sidebar doesn't need to know about `user` anymore
const Sidebar = () => (
  <div className="sidebar">
    <UserStats />
  </div>
);

export default Sidebar