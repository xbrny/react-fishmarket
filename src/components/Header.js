import React from "react";
import Proptypes from 'prop-types';

const Header = ({ title }) => (
  <header className="mb-1">
    <h1 className="is-size-4 has-text-weight-bold has-text-danger">{title}</h1>
    <hr/>
  </header>
);

Header.propTypes = {
  title: Proptypes.string
}

export default Header;
