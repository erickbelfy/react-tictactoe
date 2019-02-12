import React from "react";
import PropTypes from 'prop-types';

const TurnHeader = ({ isPlayerOne }) => (
  <header className="turn-header">
    <div className={isPlayerOne? 'play-turn-1' : 'player-turn'}>Player X</div>
    <div className={isPlayerOne? 'player-turn' : 'play-turn-2'}>Player O</div>
  </header>
);
TurnHeader.propTypes = {
  isPlayerOne: PropTypes.bool.isRequired
}
export default TurnHeader;