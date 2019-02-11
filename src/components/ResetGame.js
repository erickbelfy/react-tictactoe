import React from "react";
import PropTypes from "prop-types";

const ResetGame = ({ goTo }) => {
  return (
    <button
      title="Reset Game"
      className="settings-buttons reset-game"
      onClick={() => goTo(0)}
    >
      <img alt="Reset game" src="https://img.icons8.com/ios/24/000000/synchronize-filled.png" />
    </button>
  );
};

ResetGame.propTypes = {
  goTo: PropTypes.func.isRequired
};

export default ResetGame;
