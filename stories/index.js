// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import ConfirmBtn from '../lib/ConfirmBtn';

const s = {
  normal: {
    backgroundColor: 'CornflowerBlue',
  },
};

storiesOf('CofirmBtn', module).add('normal', () =>
  <ConfirmBtn style={s.normal} test="22"> test </ConfirmBtn>,
);
