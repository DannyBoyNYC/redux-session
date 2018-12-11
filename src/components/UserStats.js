import React from 'react';

import UserAvatar from './UserAvatar'

const UserStats = ({user}) => (
  <div className="UserStats">
    <UserAvatar user={user} />
  </div>
);

export default UserStats