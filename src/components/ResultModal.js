import React from "react";
import PropTypes from "prop-types";
import ResetGame from "./ResetGame";
import { PLAYER_ONE_SYMBOL } from "./App";

const ResultModal = ({ gameResult, player, goTo }) => (
  <div className={`modal ${gameResult !== null ? "win" : ""}`}>
    <img
      className="win-img"
      src="http://yi-nie.com/tic-tac-toe/img/win-img.png"
      alt="the winner is"
    />

    {gameResult === "win" ? (
      <span className="win-msg">
        Player
        <i className={`symbol-feedback ${player === PLAYER_ONE_SYMBOL ? "x-symbol" : "o-symbol"}` }>{player}</i>
         Wins!
      </span>
    ) : (
      <span className="win-msg">It's a Draw!</span>
    )}
    <ResetGame goTo={goTo} isEndGame={true} />
  </div>
);
ResultModal.propTypes = {
  gameResult: PropTypes.string,
  result: PropTypes.string,
  goTo: PropTypes.func
};

export default ResultModal;
