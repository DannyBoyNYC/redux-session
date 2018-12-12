import React from 'react';

import UserAvatar from './UserAvatar'

// Nav doesn't need to know about `user` anymore
const Nav = () => (
  <div className="nav">
    <UserAvatar size="small" />
  </div>
);

export default Nav