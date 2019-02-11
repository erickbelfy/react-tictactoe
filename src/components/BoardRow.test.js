import React from "react";
import { shallow } from "enzyme";
import {PLAYER_ONE_SYMBOL, PLAYER_TWO_SYMBOL} from './App';
import BoardRow from "./BoardRow";
import Box from "./Box";

describe("BoardRow", () => {
  let wrapper;
  beforeEach(
    () =>
      (wrapper = shallow(
        <BoardRow>
          <Box onClick={jest.fn()} value={PLAYER_ONE_SYMBOL} />
          <Box onClick={jest.fn()} value={PLAYER_TWO_SYMBOL}/>
          <Box onClick={jest.fn()} value={PLAYER_ONE_SYMBOL} />
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
