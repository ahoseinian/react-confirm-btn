// @flow

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ConfirmBtn from './ConfirmBtn';

const getProps = () => ({
  onConfirm: jest.fn(),
});

it('renders', () => {
  const wrapper = shallow(<ConfirmBtn {...getProps()}> Delete </ConfirmBtn>);

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('passes the props down to the button', () => {
  const style = { background: 'black' };
  const wrapper = shallow(
    <ConfirmBtn {...getProps()} style={style}>
      Delete
    </ConfirmBtn>,
  );

  expect(wrapper.prop('style')).toEqual(style);
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
