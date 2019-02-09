import React from "react";
import { shallow } from "enzyme";
import TicTacToe from "./App";
import Box from "./Box";

describe("Box", () => {
  let wrapper;
  beforeEach(
    () =>
      (wrapper = shallow(
        <Box onClick={jest.fn()} value={TicTacToe.PLAYER_ONE_SYMBOL} />
      ))
  );

  it("Should render a <button />", () => {
    expect(wrapper.find("button").length).toEqual(1);
  });

  it("Should click in the box in order to bind a value", () => {
  });
});
