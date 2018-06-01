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
    this.state = {songs: [], playlistSongs: []};
    this.searchSpotify=this.searchSpotify.bind(this);
    this.addToPlaylist=this.addToPlaylist.bind(this);
  }
  searchSpotify(search){
//    Spotify.authorize();
    //Spotify.search(search);
    const searchedSongs = [
    {
      artistName: "Stevie Wonder",
      albumName: "Songs in the Key of Life",
      songName: "Superstition",
      id: "1"
    },
    {
      artistName: " Wonder",
      albumName: "Songs in the Key of Life",
      songName: "Superstition",
      id: "2"
    },
    {
    artistName: "Stevie Wonder",
    albumName: "Songs in the Key of Life",
    songName: "check",
    id: "3"
    },
    {
      artistName: " Wonder",
      albumName: "Songs in the Key of Life",
      songName: "Superstition",
      id: "4"
    },
    {
      artistName: " Wonder",
      albumName: "Songs in the Key of Life",
      songName: "Superstition",
      id: "5"
    },
    {
      artistName: " Wonder",
      albumName: "Songs in the Key of Life",
      songName: "Superstition",
      id: "6"
    }
  ]
    //console.log(searchedSongs);
    //this.setState({songs: searchedSongs})
    Spotify.search(search);
    this.setState({songs: searchedSongs});
  }
  addToPlaylist(song){

    console.log('you clicked me');
    this.setState({playlistSongs:[
      {
        artistName: " Wonder",
        albumName: "Songs in the Key of Life",
        songName: "Superstition",
        id: "6"
      }
    ] });
  }
  render() {
    return (
        <div>
          <h1>Nate Brake{"'"}s <span className="highlight">Spotify</span> App</h1>
            <div className="App">
              <SearchBar searchSpotify = {this.searchSpotify}/>
              <div className="App-playlist">
                <TrackList songs= {this.state.songs} addToPlaylist = {this.addToPlaylist}/>
                <Playlist songs = {this.state.playlistSongs}/>
              </div>
            </div>
        </div>
    );
  }
}

export default App;
