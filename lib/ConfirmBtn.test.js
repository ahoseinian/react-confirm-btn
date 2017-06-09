// @flow

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ConfirmBtn from './ConfirmBtn';

const getProps = () => ({
  onConfirm: jest.fn(),
});
const wait = (ms = 100) => new Promise(r => setTimeout(() => r(true), ms));

it('renders', () => {
  const wrapper = shallow(<ConfirmBtn {...getProps()}> Delete </ConfirmBtn>);

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('passes the props down to the button', () => {
  const style = { background: 'black' };
  const wrapper = shallow(
    <ConfirmBtn {...getProps()} style={style}> Delete </ConfirmBtn>,
  );

  expect(wrapper.prop('style').background).toBe(style.background);
});

it('changes confirmed state when clicked', () => {
  const wrapper = shallow(<ConfirmBtn {...getProps()}> Delete </ConfirmBtn>);
  wrapper.simulate('click');

  expect(wrapper.state().confirmed).toBe(true);
});

it('changes confirmed to false after doing onConfirm()', () => {
  const props = getProps();
  const wrapper = shallow(<ConfirmBtn {...props}> Delete </ConfirmBtn>);
  wrapper.setState({ confirmed: true });
  wrapper.simulate('click');

  expect(props.onConfirm).toBeCalled();
  expect(wrapper.state().confirmed).toBe(false);
});

it('shows CountDown when time is set', () => {
  const wrapper = shallow(
    <ConfirmBtn {...getProps()} time={2000}> Delete </ConfirmBtn>,
  );
  wrapper.simulate('click');

  expect(wrapper.find('CountDown').length).toBe(1);
});

it('returns the state to unconfirmed after timeout', async () => {
  const wrapper = shallow(
    <ConfirmBtn {...getProps()} time={100}> Delete </ConfirmBtn>,
  );
  wrapper.simulate('click');

  expect(wrapper.state()).toEqual({ confirmed: true, showCountDown: true });
  await wait(100);
  expect(wrapper.state()).toEqual({ confirmed: false, showCountDown: false });
});
