// @flow

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ConfirmBtn from './ConfirmBtn';

const propsFactory = () => ({
  onConfirm: jest.fn(),
});

it('renders', () => {
  const wrapper = shallow(
    <ConfirmBtn {...propsFactory()}> Delete </ConfirmBtn>,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('passes the props down to the button', () => {
  const style = { background: 'black' };
  const wrapper = shallow(
    <ConfirmBtn {...propsFactory()} style={style}>
      Delete
    </ConfirmBtn>,
  );

  expect(wrapper.prop('style')).toEqual(style);
});
