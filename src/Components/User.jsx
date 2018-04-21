import React from 'react';
import PropTypes from 'prop-types';
import iconPay from '../imgs/pay.svg';
import iconGo from '../imgs/go.svg';
import './User.css';

function User(props) {
  return (
    <li className="user">
      <div className="user-image-container">
        <img className="user-image" src={props.image} alt={`${props.name}`} />
      </div>
      <div className="user-info">
        <h3 className="user-name">{props.name}</h3>
        <div className="user-account">
          <span>id: {props.id}</span>
          <span>{props.username}</span>
        </div>
      </div>
      <div className="user-add">
        <img className="icon-pay" src={iconPay} alt="Pagar" />
        <img className="icon-go" src={iconGo} alt="Ir" />
      </div>
    </li>
  );
}

User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

export default User;
