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
    this.removeFromPlaylist=this.removeFromPlaylist.bind(this);
    this.saveToSpotify = this.saveToSpotify.bind(this);
  }

  searchSpotify(search)
  {
    Spotify.search(search).then(songs =>
      {
        this.setState({
            songs: songs
          })
      });
  }

  saveToSpotify(PlaylistName)
  {
    Spotify.playlistSave(PlaylistName,this.state.playlistSongs).then(saved =>
    {
      this.setState({
          playlistSongs: []
      })
    });
  }

  addToPlaylist(song)
  {
    let newPlaylist = this.state.playlistSongs.slice();
    newPlaylist.push(song);
    this.setState(
    {
      playlistSongs: newPlaylist
    });

  }

  removeFromPlaylist(song)
  {
    // get index of object with id matching parameter
    let removeIndex = this.state.playlistSongs.map(function(item) { return item.id; }).indexOf(song.id);
    // remove object
    let newPlaylist = this.state.playlistSongs.slice();
    newPlaylist.splice(removeIndex,1);
    this.setState(
      {
        playlistSongs: newPlaylist
      });
    }

  render()
  {
    return (
        <div>
          <h1>Nate Brake{"'"}s <span className="highlight">Spotify</span> App</h1>
            <div className="App">
              <SearchBar searchSpotify = {this.searchSpotify}/>
              <div className="App-playlist">
                <TrackList songs= {this.state.songs} addToPlaylist = {this.addToPlaylist}/>
                <Playlist
                 songs = {this.state.playlistSongs}
                 removeFromPlaylist = {this.removeFromPlaylist}
                 saveToSpotify = {this.saveToSpotify}/>
              </div>
            </div>
        </div>
    );
  }
}

export default App;
