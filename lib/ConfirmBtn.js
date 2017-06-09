// @flow

import React from 'react';
import CountDown from './CountDown';

type props = {
  children?: any,
  confirmText?: string,
  time?: number,
  style?: {},
  onConfirm: () => void,
};

class ConfirmButton extends React.Component {
  props: props;
  state = { confirmed: false, showCountDown: false };
  static defaultProps = {
    confirmText: 'Sure?',
  };

  checkConfirmation = () => {
    const { confirmed } = this.state;
    const { time } = this.props;

    if (confirmed) {
      this.props.onConfirm();
      this.setState({ showCountDown: false });
    } else if (time) {
      this.setState({ showCountDown: true });

      setTimeout(
        () => this.setState({ confirmed: false, showCountDown: false }),
        time,
      );
    }

    this.setState({ confirmed: !confirmed });
  };

  render() {
    const { confirmed, showCountDown } = this.state;
    const {
      children,
      confirmText,
      style,
      time,
      onConfirm,
      ...rest
    } = this.props;

    return (
      <button
        {...rest}
        style={{ ...s.button, ...style }}
        onClick={this.checkConfirmation}
      >
        {confirmed ? <span>{confirmText}</span> : children}
        {showCountDown && <CountDown time={time} />}
      </button>
    );
  }
}

export default ConfirmButton;

const s = {
  button: {
    position: 'relative',
  },
};
