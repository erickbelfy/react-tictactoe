import React from "react";
import { shallow } from "enzyme";
import TicTacToe from './App';
import BoardRow from "./BoardRow";
import Box from "./Box";

describe("BoardRow", () => {
  let wrapper;
  beforeEach(
    () =>
      (wrapper = shallow(
        <BoardRow>
          <Box onClick={jest.fn()} value={TicTacToe.PLAYER_ONE_SYMBOL} />
          <Box onClick={jest.fn()} value={TicTacToe.PLAYER_TWO_SYMBOL}/>
          <Box onClick={jest.fn()} value={TicTacToe.PLAYER_ONE_SYMBOL} />
        </BoardRow>
      ))
  );

  it("Should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("Should have 3 element Box", () => {
    expect(wrapper.find(Box)).toHaveLength(3);
  });
});
