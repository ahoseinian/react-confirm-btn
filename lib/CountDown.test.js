// @flow

import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import CountDown from './CountDown';

const wait = (ms = 100) => new Promise(r => setTimeout(() => r(true), ms));

it('renders', () => {
  const wrapper = shallow(<CountDown time={2000} />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
