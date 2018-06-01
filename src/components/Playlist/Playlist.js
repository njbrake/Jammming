import React from 'react';
import './Playlist.css';
import PlaylistTrack from '../PlaylistTrack/PlaylistTrack';

export class Playlist extends React.Component {
saveToSpotify(){
  console.log("you're saving to spotify now");
}
render() {
return (
  <div className="Playlist">
    <input readOnly='New Playlist' />
      <div className="TrackList">
    {this.props.songs.map(song => <PlaylistTrack key={song.id} song={song} />)}
      </div>
      <a onClick = {this.saveToSpotify} className="Playlist-save">SAVE TO SPOTIFY</a>
  </div>
    )
  };
}
