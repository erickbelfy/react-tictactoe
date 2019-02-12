import React from "react";
import PropTypes from "prop-types";

const XSymbol = ({ isAnimating }) => (
  <svg
    className={isAnimating ? 'appear': 'img'}
    width="66px"
    height="66px"
    viewBox="0 0 66 66"
    version="1.1"
  >
    <defs />
    <g id="Page-1" stroke="none" fill="none">
      <g
        id="Artboard-23"
        transform="translate(-16.000000, -21.000000)"
        stroke="#3A98D4"
      >
        <g
          id="Group"
          className="svg-img"
          transform="translate(24.000000, 29.000000)"
        >
          <path
            d="M0.497425847,0.497425847 L49.0583794,49.0583794"
            id="Line"
            className={isAnimating ? "draw" : ""}
          />
          <path
            className={isAnimating ? "draw1" : ""}
            d="M0.497425847,0.497425847 L49.0583794,49.0583794"
            id="Line"
            transform="translate(25.000000, 25.000000) scale(-1, 1) translate(-25.000000, -25.000000) "
          />
        </g>
      </g>
    </g>
  </svg>
);
XSymbol.propTypes = {
    isAnimating: PropTypes.bool.isRequired 
}
export default XSymbol;