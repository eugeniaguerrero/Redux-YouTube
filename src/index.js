import React from 'react';
import ReactDOM from 'react-dom';

// path reference as this is a file we have created
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAT3JscCLJsscSW7McUF8KSBeSFgplL-Sg';

const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
