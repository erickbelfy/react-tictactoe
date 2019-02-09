import React, { Component } from "react";
import "./App.css";

const TurnHeader = ({ hasWinner, isPlayerOne }) => (
  <header className="turn-header">
    {hasWinner
      ? `Winner: ${!isPlayerOne ? "One" : "Two"}`
      : `Next Player: ${isPlayerOne ? "One" : "Two"}`}
  </header>
);

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

const BoardRow = ({ children }) => <div className="row">{children}</div>;

const Box = ({ value, onClick }) => <button onClick={onClick}>{value}</button>;

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

class TicTacToe extends Component {
  static PLAYER_ONE_SYMBOL = "X";
  static PLAYER_TWO_SYMBOL = "O";
  static BOARD_ARRAY_LENGTH = 9;

  state = {
    history: [{ boxes: Array(TicTacToe.BOARD_ARRAY_LENGTH).fill(null) }],
    step: 0,
    playerOneIsNext: true
  };

  calculateWinner = boxes => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        return true;
      }
    }
    return null;
  };

  handleClick = i => {
    const history = this.state.history.slice(0, this.state.step + 1);
    const { boxes: current } = history[history.length - 1];
    const boxes = current.slice();
    let winner = this.calculateWinner(boxes);
    if (winner || boxes[i]) {
      return;
    }
    boxes[i] = this.state.playerOneIsNext
      ? TicTacToe.PLAYER_ONE_SYMBOL
      : TicTacToe.PLAYER_TWO_SYMBOL;
    this.setState({
      history: history.concat([{ boxes }]),
      step: history.length,
      playerOneIsNext: !this.state.playerOneIsNext
    });
  };

  goTo = step => {
    this.setState({
      step,
      playerOneIsNext: step % 2 === 0
    });
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.step];
    const winner = this.calculateWinner(current.boxes);
    return (
      <div className="tic-tac-toe">
        <TurnHeader
          hasWinner={winner}
          isPlayerOne={this.state.playerOneIsNext}
        />
        <Board boxes={current.boxes} onClick={i => this.handleClick(i)} />
        <MovesHistory history={history} goTo={this.goTo} />
      </div>
    );
  }
}

export default TicTacToe;
