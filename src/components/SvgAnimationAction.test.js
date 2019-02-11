import React from "react";
import { shallow } from "enzyme";
import SvgAnimationAction from "./SvgAnimationAction";
import OSymbol from './oSymbol';
import XSymbol from './xSymbol';

describe("SvgAnimationAction", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<SvgAnimationAction action='X' />)));

  it("Should check X Symbol", () => {
    expect(wrapper.find(XSymbol).length).toBe(1);
  });
  it("Should check O Symbol", () => {
    wrapper.setProps({action: 'O'});
    expect(wrapper.find(OSymbol).length).toBe(1);
  });
});
