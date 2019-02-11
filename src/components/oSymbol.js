import React from "react";
import PropTypes from "prop-types";
const OSymbol = ({ isAnimating }) => (
  <svg
    className={isAnimating ? 'appear': 'img'}
    width="86px"
    height="88px"
    viewBox="0 0 86 88"
    version="1.1"
  >
    <g id="Page-1" stroke="none" fill="none">
      <g id="Artboard-21" transform="translate(0.000000, -26.000000)">
        <g id="Oval-5">
          <use fill="black" filter="url(#filter-2)" />
          <circle
            className={`svg-img ${isAnimating ? "draw" : ""}`}
            stroke="#79CADC"
            cx="41"
            cy="71"
            r="27"
          />
        </g>
      </g>
    </g>
  </svg>
);
OSymbol.propTypes = {
    isAnimating: PropTypes.bool.isRequired
}
export default OSymbol;