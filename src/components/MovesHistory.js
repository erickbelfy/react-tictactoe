import React from "react";
import PropTypes from 'prop-types';

const MovesHistory = ({ history, goTo }) => {
  return <button onClick={() => goTo()}>undo</button>;
};

MovesHistory.propTypes = {
  history: PropTypes.array.isRequired,
  goTo: PropTypes.func.isRequired
}

export default MovesHistory;