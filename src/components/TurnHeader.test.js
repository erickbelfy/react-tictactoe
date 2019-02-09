
import React from "react";
import { shallow } from "enzyme";
import TurnHeader from "./TurnHeader";

describe("TurnHeader", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<TurnHeader isPlayerOne={true} />)));

  it("Should render a <header />", () => {
    expect(wrapper.find("header").length).toEqual(1);
  });

  it("Should check player two is the current player", () => {
  });
});
