import React from 'react';
import {shallow} from 'enzyme';
import Board from '.';
import BoardRow from '../BoardRow';


describe('Board', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Board boxes={Array(9).fill(null)} onClick={jest.fn()} />));

  it('Should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('Should validate the square matrix of the boxes', () => {
    const CHUNK_SIZE = 3;
    expect(wrapper.find(BoardRow)).toHaveLength(CHUNK_SIZE);
    const [row1] = wrapper.find(BoardRow);
    expect(row1.props.children).toHaveLength(CHUNK_SIZE);
  });
})
