import React from "react";
import PropTypes from "prop-types";
import OSymbol from './oSymbol';
import XSymbol from './xSymbol';
import { PLAYER_ONE_SYMBOL, PLAYER_TWO_SYMBOL } from "./App";

const SvgAnimationAction = ({ action }) => {
  let svg =
    action === "O" ? (
      <OSymbol isAnimating={action === PLAYER_TWO_SYMBOL} />
    ) : (
      <XSymbol isAnimating={action === PLAYER_ONE_SYMBOL} />
    );
  return svg ;
};
SvgAnimationAction.propTypes = {
    action: PropTypes.string
}
export default SvgAnimationAction;