import React from "react";
import PropTypes from 'prop-types';

const MovesHistory = ({ history, goTo }) => {
  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => goTo(move)}>{desc}</button>
      </li>
    );
  });
  return <ol>{moves}</ol>;
};

MovesHistory.propTypes = {
  history: PropTypes.array.isRequired,
  goTo: PropTypes.func.isRequired
}

export default MovesHistory;