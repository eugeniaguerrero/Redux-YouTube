import React, { Component } from 'react';

//define a new class and give it access to all of the functionality that React.Component does
class SearchBar extends Component {
  render() {
    return <input onChange={event => console.log(event.target.value)} />;
  }
}

//any file that imports SearchBar will get this component
export default SearchBar;
