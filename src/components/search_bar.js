import React, { Component } from 'react';

//define a new class and give it access to all of the functionality that React.Component does
class SearchBar extends Component {
  constructor(props) {
    super(props); //calls the parent method on the parent class
    this.state = {term: ''}; //
  }

  render() {
    return (
      <div>
        <input
          value = {this.state.term}
          onChange={event => this.setState({ term: event.target.value})} />
      </div>
    );
  }
}

//any file that imports SearchBar will get this component
export default SearchBar;
