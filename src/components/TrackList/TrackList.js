import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

export class TrackList extends React.Component {

  render() {
    return (
        <div className="SearchResults">
          <h2>Results</h2>
          <div className="TrackList">
            {this.props.songs.map(song => <Track key={song.id} song = {song} addToPlaylist = {this.props.addToPlaylist} />)}
          </div>
        </div>
    )
  };
}
