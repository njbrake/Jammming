import React from 'react';
import './Playlist.css';
import PlaylistTrack from '../PlaylistTrack/PlaylistTrack';

export class Playlist extends React.Component {
  constructor(props)
  {
    super(props);
    this.state =
    {
      playlistName: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.saveToSpotify = this.saveToSpotify.bind(this);
  }
saveToSpotify(event)
{
  this.props.saveToSpotify(this.state.playlistName);
  event.preventDefault();
}

handleNameChange(e)
{
  this.setState({
    playlistName: e.target.value
  });
}

render() {
return (
  <div className="Playlist">
    <input onChange = {this.handleNameChange} placeholder="New Playlist" />
      <div className="TrackList">
        {this.props.songs.map(song => <PlaylistTrack key={song.id} song={song} removeFromPlaylist= {this.props.removeFromPlaylist}/>)}
      </div>
      <a onClick = {this.saveToSpotify} className="Playlist-save">SAVE TO SPOTIFY</a>
  </div>
    )
  };
}
