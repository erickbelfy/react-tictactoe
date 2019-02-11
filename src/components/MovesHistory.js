import React from "react";
import PropTypes from "prop-types";

const MovesHistory = ({ step, goTo }) => {
  return (
    <button
      title="undo movement"
      disabled={step <= 0 ? "disabled" : false}
      className={`${step <= 0 ? "disabled" : ""} settings-buttons undo`}
      onClick={() => goTo(step - 1)}
    >
      <img alt="Undo movement"  src="https://img.icons8.com/ios-glyphs/24/B7E5EE/undo.png" />
    </button>
  );
};

MovesHistory.propTypes = {
  step: PropTypes.number.isRequired,
  goTo: PropTypes.func.isRequired
};

export default MovesHistory;
