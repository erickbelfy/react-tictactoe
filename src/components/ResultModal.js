import React from "react";
import PropTypes from "prop-types";
import ResetGame from "./ResetGame";
import { PLAYER_ONE_SYMBOL, PLAYER_TWO_SYMBOL } from "./App";

const ResultModal = ({ gameResult, isPlayerOne, goTo }) => (
  <div className={`modal ${gameResult !== null ? "win" : ""}`}>
    <img
      className="win-img"
      src="http://yi-nie.com/tic-tac-toe/img/win-img.png"
      alt="the winner is"
    />

    {gameResult === "win" ? (
      <span className="win-msg">
        Player
        <i
          className={`symbol-feedback ${isPlayerOne ? "x-symbol" : "o-symbol"}`}
        >
          {isPlayerOne ? PLAYER_ONE_SYMBOL : PLAYER_TWO_SYMBOL}
        </i>
        Wins!
      </span>
    ) : (
      <span className="win-msg draw">It's a Draw!</span>
    )}
    <ResetGame goTo={goTo} isEndGame={true} />
  </div>
);
ResultModal.propTypes = {
  gameResult: PropTypes.string,
  isPlayerOne: PropTypes.bool,
  goTo: PropTypes.func
};

export default ResultModal;
