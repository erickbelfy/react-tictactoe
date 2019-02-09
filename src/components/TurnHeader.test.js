
import React from "react";
import { shallow } from "enzyme";
import TurnHeader from "./TurnHeader";

describe("TurnHeader", () => {
  let wrapper;
  let mockEvent = jest.fn();
  beforeEach(() => (wrapper = shallow(<TurnHeader hasWinner={false} isPlayerOne={true} />)));

  it("Should render a <header />", () => {
    expect(wrapper.find("header").length).toEqual(1);
  });

  it("Should check if the game has ended", () => {
  });
});
