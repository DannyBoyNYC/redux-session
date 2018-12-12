import React from 'react';
import { connect } from "react-redux";

import UserAvatar from './UserAvatar'

// This mapStateToProps function extracts a single
// key from state (user) and passes it as the `user` prop
const mapStateToProps = state => ({
  user: state.user
});

// connect() UserStats so it receives the `user` directly,
// without having to receive it from a component above
// (both use the same mapStateToProps function)
const UserStats = connect(mapStateToProps)(({ user }) => (
  <div className="user-stats">
    <div>
      <UserAvatar />
      {user.name}
    </div>
    <div className="stats">
      <div>{user.followers} Followers</div>
      <div>Following {user.following}</div>
    </div>
  </div>
));

export default UserStats