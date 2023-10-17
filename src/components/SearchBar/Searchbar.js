import React, { Component } from 'react';
import {
  Form,
  Header,
  SearchBtn,
  SearchBtnLbl,
  SearchInput,
} from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';

export class Searchbar extends Component {
  render() {
    return (
      <Header>
        <Form onSubmit={this.props.onSubmit}>
          <SearchBtn type="submit">
            <SearchBtnLbl>
              <AiOutlineSearch />
            </SearchBtnLbl>
          </SearchBtn>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}
