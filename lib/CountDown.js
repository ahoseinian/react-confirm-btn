// @flow

import React from 'react';

const s = {
  width: '96%',
  height: '5px',
  backgroundColor: 'red',
  position: 'absolute',
  bottom: '2px',
  left: '2%',
};

type props = {
  time: number,
};

class CountDown extends React.Component {
  props: props;
  el: HTMLElement;

  componentDidMount() {
    setTimeout(() => {
      this.el.style.width = '0';
    }, 100);
  }

  render() {
    const { time } = this.props;

    return (
      <div
        style={{ ...s, transitionDuration: time + 'ms' }}
        ref={r => {
          this.el = r;
        }}
      />
    );
  }
}

export default CountDown;
