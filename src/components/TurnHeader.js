import React from "react";
import PropTypes from 'prop-types';

const TurnHeader = ({ hasWinner, isPlayerOne }) => (
  <header className="turn-header">
    <div className="player-turn">Player X</div>
    <div className="player-turn">Player Y</div>
  </header>
);
TurnHeader.propTypes = {
  hasWinner: PropTypes.bool.isRequired,
  isPlayerOne: PropTypes.bool.isRequired
}
export default TurnHeader;