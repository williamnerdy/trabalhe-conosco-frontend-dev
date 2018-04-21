import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../imgs/logo.svg'
import './Header.css';

function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <img className="logo" src={Logo} alt="PicPay logo" />
        <span className="header-separator"></span>
        <h3 className="header-title">{props.title}</h3>
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;
