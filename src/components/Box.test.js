import React from "react";
import { shallow } from "enzyme";
import Box from "./Box";

describe("Box", () => {
  let wrapper;
  let mockEvent = jest.fn();
  beforeEach(() => (wrapper = shallow(<Box onClick={mockEvent} />)));

  it("Should render a <button />", () => {
    expect(wrapper.find("button").length).toEqual(1);
  });

  it("Should click in the box", () => {
      wrapper.find('button').simulate('click');
      expect(mockEvent.mock.calls.length).toEqual(1);
  });
});
