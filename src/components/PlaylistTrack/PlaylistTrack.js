import React from 'react';
import './PlaylistTrack.css';
import {Playlist} from '../Playlist/Playlist';

class PlaylistTrack extends React.Component {
  constructor(props){
    super(props);
    this.removeFromSpotifyPlaylist=this.removeFromSpotifyPlaylist.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(){
    this.removeFromSpotifyPlaylist(this.props.song);
  }
  removeFromSpotifyPlaylist(song){

}
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.song.songName}</h3>
          <p>{this.props.song.albumName} | {this.props.song.albumName}</p>
        </div>
        <a onClick={this.handleClick} className="Track-action">-</a>
      </div>
    )
  }

}

export default PlaylistTrack;
