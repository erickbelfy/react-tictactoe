import React from "react";
import PropTypes from 'prop-types';

const BoardRow = ({ children }) => <div className="row">{children}</div>;
BoardRow.propTypes = {
  children: PropTypes.array
}

const Box = ({ value, onClick }) => <button onClick={onClick}>{value}</button>;
Box.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

const Board = ({ boxes, onClick }) => {
  const CHUNK_SIZE = 3;
  const generateBoard = () => {
    let matrix = generateBoxesMatrix(boxes);
    return renderBoxesOnBoard(matrix);
  };

  const generateBoxesMatrix = boxes => {
    return boxes.reduce(
      (prevBoxes, currentBox, idx, arr) =>
        !(idx % CHUNK_SIZE)
          ? prevBoxes.concat([arr.slice(idx, idx + CHUNK_SIZE)])
          : prevBoxes,
      []
    );
  };

  const renderBoxesOnBoard = matrix => {
    return matrix.map((row, rowIdx) => {
      return (
        <BoardRow key={rowIdx}>
          {row.map((box, boxIdx) => {
            return (
              <Box
                key={boxIdx}
                value={box}
                onClick={() => {
                  onClick(rowIdx * CHUNK_SIZE + boxIdx);
                }}
              />
            );
          })}
        </BoardRow>
      );
    });
  };

  return <div className="board">{generateBoard()}</div>;
};
Board.propTypes = {
  boxes: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Board;