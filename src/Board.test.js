import React from 'react';
import {shallow} from 'enzyme';
import Board from './Board';


describe('Board', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Board boxes={Array(9).fill(null)} onClick={jest.fn()} />));
  it('Should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
})
