import React from 'react';
import {shallow} from 'enzyme';
import TicTacToe from './App';
import Board from './Board';
import MovesHistory from './MovesHistory';
import TurnHeader from './TurnHeader';


describe('App', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<TicTacToe />));
  it('Should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('Should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('Should validate the existence of its childs', () => {
    let instance =  wrapper.instance();
    let state = instance.state;
    let [{boxes: boxesProps}] = state.history;
    expect(wrapper.containsMatchingElement(<Board boxes={boxesProps} onClick={instance.handleClick} />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<TurnHeader hasWinner={false} isPlayerOne={state.playerOneIsNext} />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<MovesHistory history={state.history} goTo={instance.goTo} />)).toEqual(true);
  })
})
