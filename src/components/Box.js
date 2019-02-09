import React from "react";
import PropTypes from 'prop-types';

const Box = ({ value, onClick }) => <button onClick={onClick}>{value}</button>;
Box.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Box;