import React, { Component } from 'react';

class Notification extends Component {
  render() {
    return (
        <p className={this.props.className} >{this.props.message}</p>
    );
  }
}

export default Notification;
