import React from "react";
import PropTypes from "prop-types";

const ResetGame = ({ goTo, isEndGame }) => {
  return (
    <button
      title="Reset Game"
      className={isEndGame ? "restart-game" : "settings-buttons reset-game"}
      onClick={() => goTo(0)}
    >
      {isEndGame ? (
        "Restart"
      ) : (
        <img
          alt="Reset game"
          src="https://img.icons8.com/ios/24/000000/synchronize-filled.png"
        />
      )}
    </button>
  );
};

ResetGame.propTypes = {
  goTo: PropTypes.func.isRequired,
  isEndGame: PropTypes.bool
};

export default ResetGame;
