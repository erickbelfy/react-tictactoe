import React from "react";
import { shallow } from "enzyme";
import ResultModal from "./ResultModal";

describe("ResultModal", () => {
  let wrapper;
  let mockEvent = jest.fn();
  beforeEach(() => (wrapper = shallow(<ResultModal gameResult="win" isPlayerOne={true} goTo={mockEvent} />)));

  it("Should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("Should display player one is winner", () => {
      expect(wrapper.find('.win-msg .x-symbol')).toHaveLength(1);
  });

  it("Should display a draw result", () => {
      wrapper.setProps({gameResult: 'Draw'})
      expect(wrapper.find('.win-msg.draw')).toHaveLength(1);
  });
});
