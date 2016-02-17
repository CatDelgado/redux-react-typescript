import * as React from 'react';
import {Component} from 'react';

interface SearchBoxProps {
  query: string;
  changeSearch: ()=>{}
}
interface SearchBoxState {
  query: string;
}

export default class SearchBox extends Component<SearchBoxProps, SearchBoxState> {

  constructor(props: SearchBoxProps, context) {
    super(props, context);
    this.state = {
      query: props.query || ''
    };
  }

  handleChange(event: React.SyntheticEvent) {
    const target = event.target as HTMLInputElement;
    this.setState({query: target.value});
  }

  render() {
    return (
      <div className="search-box">
        <input
          type="search"
          placeholder="Search..."
          value={this.state.query}
          onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}