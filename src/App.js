import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TrackList} from './components/TrackList/TrackList';
import {Playlist} from './components/Playlist/Playlist';
import {Spotify} from './util/Spotify.js';
import {SearchBar} from './components/SearchBar/SearchBar.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {songs: []};
    this.searchSpotify=this.searchSpotify.bind(this);
  }
  searchSpotify(search){
    Spotify.search(search).then(songs => {this.setState({songs: songs})});
  }
  render() {
    return (
        <div>
          <h1>Nate Brake{"'"}s <span className="highlight">Spotify</span> App</h1>
            <div className="App">
              <SearchBar searchSpotify = {this.searchSpotify}/>
              <div className="App-playlist">
                <TrackList />
                <Playlist />
              </div>
            </div>
        </div>
    );
  }
}

export default App;
