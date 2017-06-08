// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import ConfirmBtn from '../lib/ConfirmBtn';
import { action } from '@storybook/addon-actions';

const s = {
  normal: {
    backgroundColor: 'CornflowerBlue',
  },
};

storiesOf('CofirmBtn', module).add('normal', () =>
  <ConfirmBtn style={s.normal} test="22" onConfirm={action('Confirmed!!!')}>
    Delete
  </ConfirmBtn>,
);
