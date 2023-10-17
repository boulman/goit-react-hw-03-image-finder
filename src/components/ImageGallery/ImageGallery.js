import React, { Component } from 'react';
import { ImgGallery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    return (
      <ImgGallery>
        {this.props.imgs.map(item => (
          <ImageGalleryItem
            img={item}
            key={item.id}
            onClick={this.props.onClick}
          />
        ))}
      </ImgGallery>
    );
  }
}
