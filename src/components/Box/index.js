import React from "react";
import PropTypes from "prop-types";
import SvgAnimationAction from '../SvgAnimationAction';

const Box = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    <SvgAnimationAction action={value} />
  </button>
);
Box.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Box;
