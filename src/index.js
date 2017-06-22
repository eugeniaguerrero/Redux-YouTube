import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAT3JscCLJsscSW7McUF8KSBeSFgplL-Sg';

//when the application boots, we get an instance of app
class App extends Component {
  //the constructor runs right away, and kicks off a search
  //with the term 'surfboards'
  constructor(props) {
    super(props);

    this.state = { videos : [] };

    //the callback function(data) will be called with a list of videos
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }

  render () {
    return (
    <div>
      <SearchBar />
      <VideoList videos={this.state.videos} />
    </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
