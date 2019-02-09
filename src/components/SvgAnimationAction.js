import React from "react";
import PropTypes from "prop-types";
import OSymbol from './oSymbol';
import XSymbol from './xSymbol';

const SvgAnimationAction = ({ action }) => {
  let svg =
    action === "O" ? (
      <OSymbol isAnimating={action === "O"} />
    ) : (
      <XSymbol isAnimating={action === 'X'} />
    );
  return svg ;
};
SvgAnimationAction.propTypes = {
    action: PropTypes.bool
}
export default SvgAnimationAction;