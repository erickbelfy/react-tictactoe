import React from "react";
import { shallow } from "enzyme";
import SvgAnimationAction from ".";
import OSymbol from './oSymbol';
import XSymbol from './xSymbol';
import { PLAYER_ONE_SYMBOL, PLAYER_TWO_SYMBOL } from "../App";

describe("SvgAnimationAction", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<SvgAnimationAction action={PLAYER_ONE_SYMBOL} />)));

  it("Should check X Symbol", () => {
    expect(wrapper.find(XSymbol).length).toBe(1);
  });
  it("Should check O Symbol", () => {
    wrapper.setProps({action: PLAYER_TWO_SYMBOL});
    expect(wrapper.find(OSymbol).length).toBe(1);
  });
});
