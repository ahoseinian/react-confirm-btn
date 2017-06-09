// @flow

import React from 'react';

type props = {
  children?: any,
  confirmText?: string,
  onConfirm: () => void,
};

class ConfirmButton extends React.Component {
  props: props;
  state = { confirmed: false };
  static defaultProps = {
    confirmText: 'Sure?',
  };

  checkConfirmation = () => {
    const { confirmed } = this.state;
    if (confirmed) this.props.onConfirm();

    this.setState({ confirmed: !confirmed });
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
