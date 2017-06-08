// @flow

import React from 'react';

type props = {
  children?: any,
  onConfirm: () => void,
  confirmText?: string,
};

class ConfirmButton extends React.Component {
  props: props;
  state = { confirmed: false };
  static defaultProps = {
    confirmText: 'sure?',
  };

  checkConfirmation = () => {
    const { confirmed } = this.state;
    if (confirmed) return this.props.onConfirm();

    this.setState({ confirmed: true });
  };

  render() {
    const { confirmed } = this.state;
    const { children, confirmText, ...rest } = this.props;

    return (
      <button {...rest} onClick={this.checkConfirmation}>
        {confirmed ? <span>{confirmText}</span> : children}
      </button>
    );
  }
}

export default ConfirmButton;
