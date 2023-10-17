import React, { Component } from 'react';
import { Modalcontainer, Overlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.props.onClose, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.onClose, false);
  }
  render() {
    const { largeImageURL, tags } = this.props.img;
    return (
      <Overlay onClick={this.props.onClose}>
        <Modalcontainer>
          <img src={largeImageURL} alt={tags} />
        </Modalcontainer>
      </Overlay>
    );
  }
}
