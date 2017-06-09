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
  pre: {
    background: '#2c3e50',
    padding: '1rem',
    width: '25rem',
    color: '#ecf0f1',
    position: 'absolute',
    bottom: 0,
  },
};

function replacer(key, value) {
  // Filtering out properties
  if (typeof value === 'function') {
    return 'Function';
  }
  return value;
}

const PrintProps = props =>
  <pre style={s.pre}>
    {JSON.stringify(props, replacer, 2)}
  </pre>;

storiesOf('CofirmBtn', module)
  .add('Normal', () => {
    const props = {
      onConfirm: action('Confirmed!!!'),
    };
    return (
      <div>
        <ConfirmBtn {...props}> Delete </ConfirmBtn>
        <PrintProps props={props} />
      </div>
    );
  })
  .add('With style', () => {
    const props = {
      style: s.withStyle,
      onConfirm: action('Confirmed!!!'),
    };
    return (
      <div>
        <ConfirmBtn {...props}> Delete </ConfirmBtn>
        <PrintProps props={props} />
      </div>
    );
  })
  .add('With className', () => {
    const props = {
      className: 'btn',
      onConfirm: action('Confirmed!!!'),
    };

    return (
      <div>
        <ConfirmBtn {...props}> Delete </ConfirmBtn>
        <PrintProps props={props} />
      </div>
    );
  })
  .add('With custom confirmation text', () => {
    const props = {
      className: 'btn',
      onConfirm: action('Confirmed!!!'),
      confirmText: 'Stop !!!',
    };
    return (
      <div>
        <ConfirmBtn {...props}> Delete </ConfirmBtn>
        <PrintProps props={props} />
      </div>
    );
  })
  .add('With Time', () => {
    const props = {
      className: 'btn',
      time: 1500,
      onConfirm: action('Confirmed!!!'),
    };
    return (
      <div>
        <ConfirmBtn {...props}> Delete </ConfirmBtn>
        <PrintProps props={props} />
      </div>
    );
  });
