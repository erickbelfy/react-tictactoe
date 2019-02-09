import React from "react";
import PropTypes from 'prop-types';

const BoardRow = ({ children }) => <div className="row">{children}</div>;
BoardRow.propTypes = {
  children: PropTypes.array
};

export default BoardRow;