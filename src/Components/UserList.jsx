import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import './UserList.css';

function UserList(props) {
  return (
    <ul className="user-list">
      {props.users.map(user => (
        <User
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.img}
          username={user.username}
        />
      ))}
    </ul>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default UserList;
