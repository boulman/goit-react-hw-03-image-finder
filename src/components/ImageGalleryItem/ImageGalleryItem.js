import React, { Component } from 'react';
import { GalImg, GalItem } from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  handleClick = () => {
    this.props.onClick(this.props.img);
  };
  render() {
    const { webformatURL, tags } = this.props.img;
    return (
      <GalItem onClick={this.handleClick}>
        <GalImg src={webformatURL} alt={tags} />
      </GalItem>
    );
  }
}
