import * as React from 'react';
import {Component} from 'react';

interface SearchBoxProps {}
interface SearchBoxState {}

export default class SearchBox extends Component<SearchBoxProps, SearchBoxState> {
  render() {
    return (
      <div className="search-box">
        <input type="search" placeholder="Search..." />
      </div>
    );
  }
}