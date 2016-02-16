import * as React from 'react';
import {Component} from 'react';

interface SearchBoxProps {
  value: string;
}
interface SearchBoxState {}

export default class SearchBox extends Component<SearchBoxProps, SearchBoxState> {
  handleValueChange(){}

  render() {
    return (
      <div className="search-box">
        <input
          type="search"
          placeholder="Search..."
          value={this.props.value}
          onChange={this.handleValueChange}/>
      </div>
    );
  }
}