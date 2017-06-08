// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import ConfirmBtn from '../lib/ConfirmBtn';
import { action } from '@storybook/addon-actions';
import './styles.css';

const s = {
  withStyle: {
    backgroundColor: 'Tomato',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    cursor: 'pointer',
  },
};

storiesOf('CofirmBtn', module)
  .add('normal', () =>
    <ConfirmBtn onConfirm={action('Confirmed!!!')}>
      Delete
    </ConfirmBtn>,
  )
  .add('with style', () =>
    <ConfirmBtn style={s.withStyle} onConfirm={action('Confirmed!!!')}>
      Delete
    </ConfirmBtn>,
  )
  .add('with className', () =>
    <ConfirmBtn className="btn" onConfirm={action('Confirmed!!!')}>
      Delete
    </ConfirmBtn>,
  );
