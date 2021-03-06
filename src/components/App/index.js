import React, { Component } from "react";
import "../App.css";
import Board from "../ Board";
import MovesHistory from "../MoveHistory";
import TurnHeader from "../TurnHeader";
import ResetGame from "../ResetGame";
import ResultModal from "../ResultModal";


export const PLAYER_ONE_SYMBOL = "X";
export const PLAYER_TWO_SYMBOL = "O";
class TicTacToe extends Component {
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
    return false;
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
      ? PLAYER_ONE_SYMBOL
      : PLAYER_TWO_SYMBOL;
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
    const {boxes} = history[this.state.step];
    const winner = this.calculateWinner(boxes);
    const gameResult = winner ? 'win': boxes.some(entry => entry === null) ? null : 'draw';
    return (
      <div className="main">
        <h1 className="game-title">Let's play the tic-tac-toe game!</h1>
        <div className="container">
          <ResultModal goTo={this.goTo} isPlayerOne={!this.state.playerOneIsNext} gameResult={gameResult} />
          <TurnHeader isPlayerOne={this.state.playerOneIsNext} />
          <Board boxes={boxes} onClick={this.handleClick} />
          <MovesHistory step={this.state.step} goTo={this.goTo} />
          <ResetGame goTo={this.goTo} />
        </div>
      </div>
    );
  }
}

export default TicTacToe;
