import React from 'react';
import './PlaylistTrack.css';

class PlaylistTrack extends React.Component {
  constructor(props)
  {
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick()
  {
    this.props.removeFromPlaylist(this.props.song);
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
