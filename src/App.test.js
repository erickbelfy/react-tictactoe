import React from 'react';
import {shallow} from 'enzyme';
import TicTacToe from './App';
import Board from './Board';
import MovesHistory from './MovesHistory';
import TurnHeader from './TurnHeader';


describe('App', () => {
  it('Should render a <div />', () => {
    const wrapper = shallow(<TicTacToe />);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.containsMatchingElement(<Board />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<TurnHeader />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<MovesHistory />)).toEqual(true);
  });
})
