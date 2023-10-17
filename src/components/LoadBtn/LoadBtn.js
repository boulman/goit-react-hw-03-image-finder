import React, { Component } from 'react';
import { LoadButton } from './LoadBtn.styled';

export class LoadBtn extends Component {
  render() {
    return (
      <LoadButton type="button" onClick={this.props.onLoadMore}>
        Load more
      </LoadButton>
    );
  }
}
