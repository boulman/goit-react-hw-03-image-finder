import React, { Component } from 'react';
import { Container } from './App.styled';
import { Searchbar } from './SearchBar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImgs } from 'fetchImgs';
import { Circles } from 'react-loader-spinner';
import { LoadBtn } from './LoadBtn/LoadBtn';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    page: 1,
    totalPages: null,
    images: [],
    query: '',
    loading: false,
    err: false,
    selectedImg: null,
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target[1];
    this.setState({ query: value, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  handleClickImg = img => {
    this.setState({ selectedImg: img });
  };

  handleCloseModal = () => {
    this.setState({ selectedImg: null });
  };

  async componentDidUpdate(pProps, pState) {
    if (pState.page !== this.state.page || pState.query !== this.state.query) {
      try {
        this.setState({ loading: true, err: false });
        const imgs = await fetchImgs(this.state.page, this.state.query);
        this.setState({
          images: [...pState.images, ...imgs.hits],
          totalPages: Math.ceil(imgs.totalHits / 12),
        });
      } catch (e) {
        this.setState({ err: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.err && <p>Something went wrong! Try again!</p>}
        {this.state.images.length > 0 && !this.state.err && (
          <ImageGallery
            imgs={this.state.images}
            onClick={this.handleClickImg}
          />
        )}
        {this.state.loading && (
          <Circles
            height="80"
            width="80"
            color="#3f51b5"
            ariaLabel="circles-loading"
            wrapperStyle={{
              margin: '10px auto 10px auto',
            }}
            visible={true}
          />
        )}
        {this.state.images.length > 0 &&
          this.state.page < this.state.totalPages &&
          !this.state.err && <LoadBtn onLoadMore={this.handleLoadMore} />}
        {this.state.selectedImg && (
          <Modal img={this.state.selectedImg} onClose={this.handleCloseModal} />
        )}
      </Container>
    );
  }
}
