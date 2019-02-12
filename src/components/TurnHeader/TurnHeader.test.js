import React from "react";
import { shallow } from "enzyme";
import TurnHeader from ".";

describe("TurnHeader", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<TurnHeader isPlayerOne={true} />)));

  it("Should render a <header />", () => {
    expect(wrapper.find("header").length).toEqual(1);
  });

  it("Should check player one is the current player", () => {
    expect(wrapper.find('.play-turn-1').length).toBe(1);
  });
  it("Should check player two is the current player", () => {
    wrapper.setProps({isPlayerOne: false});
    expect(wrapper.find('.play-turn-2').length).toBe(1);
  });
});
