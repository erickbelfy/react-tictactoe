import React from "react";
import PropTypes from 'prop-types';

const TurnHeader = ({ hasWinner, isPlayerOne }) => (
  <header className="turn-header">
    {hasWinner
      ? `Winner: ${!isPlayerOne ? "One" : "Two"}`
      : `Next Player: ${isPlayerOne ? "One" : "Two"}`}
  </header>
);
TurnHeader.propTypes = {
  hasWinner: PropTypes.bool.isRequired,
  isPlayerOne: PropTypes.bool.isRequired
}
export default TurnHeader;