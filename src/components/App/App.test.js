import React from 'react';
import {shallow} from 'enzyme';
import TicTacToe, { PLAYER_ONE_SYMBOL, PLAYER_TWO_SYMBOL } from '.';
import Board from '../ Board';
import MovesHistory from '../MoveHistory';
import TurnHeader from '../TurnHeader';


describe('App', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<TicTacToe />));
  it('Should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('Should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('Should validate the existence of its childs', () => {
    let {goTo, handleClick, state} =  wrapper.instance();
    let {history, step, playerOneIsNext} = state;
    let [{boxes: boxesProps}] = history;
    expect(wrapper.containsMatchingElement(<Board boxes={boxesProps} onClick={handleClick} />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<TurnHeader isPlayerOne={playerOneIsNext} />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<MovesHistory step={step} goTo={goTo} />)).toEqual(true);
  });

  it('Should validate handleClick event', () => {
    let {handleClick} =  wrapper.instance();
    let prevPlayer = wrapper.instance().state.playerOneIsNext;
    handleClick(1);
    expect(wrapper.instance().state.history.length).toBe(2);
    expect(wrapper.instance().state.step).toBe(1);
    expect(wrapper.instance().state.playerOneIsNext).toBe(!prevPlayer);
  });

  it('Should validate goTo event', () => {
    let {handleClick, goTo} =  wrapper.instance();
    handleClick(1);
    handleClick(2);
    handleClick(5);
    goTo(1);
    expect(wrapper.instance().state.step).toBe(1);
    expect(wrapper.instance().state.playerOneIsNext).toBe(1 % 2 === 0);
    goTo(2);
    expect(wrapper.instance().state.step).toBe(2);
    expect(wrapper.instance().state.playerOneIsNext).toBe(2 % 2 === 0);
  });

  it('Should validate the calculateWinner method', () => {
    let {calculateWinner} =  wrapper.instance();
    expect(calculateWinner([PLAYER_ONE_SYMBOL, PLAYER_ONE_SYMBOL, PLAYER_ONE_SYMBOL, null, null, PLAYER_TWO_SYMBOL, PLAYER_TWO_SYMBOL, null, null])).toBe(true);
  });
})
