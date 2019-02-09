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
    let {goTo, handleClick, state} =  wrapper.instance();
    let {history, playerOneIsNext} = state;
    let [{boxes: boxesProps}] = history;
    expect(wrapper.containsMatchingElement(<Board boxes={boxesProps} onClick={handleClick} />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<TurnHeader hasWinner={false} isPlayerOne={playerOneIsNext} />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<MovesHistory history={history} goTo={goTo} />)).toEqual(true);
  });

  it('Should validate handleClick event', () => {
    let {handleClick} =  wrapper.instance();
    let prevPlayer = wrapper.instance().state.playerOneIsNext;
    handleClick(1);
    expect(wrapper.instance().state.history.length).toBe(2);
    expect(wrapper.instance().state.step).toBe(1);
    expect(wrapper.instance().state.playerOneIsNext).toBe(!prevPlayer);
  });
})
