import React from 'react';
import './TrackList.css';

export class TrackList extends React.Component {
  render() {
    return (

        <div className="SearchResults">
          <h2>Results</h2>
          <div className="TrackList">
            <div className="Track">
              <div className="Track-information">
                <h3>Check one two </h3>
                <p>Artist | Album</p>
              </div>
              <a className="Track-action">+</a>
            </div>
            <div className="Track">
              <div className="Track-information">
                <h3>Tiny Dancer</h3>
                <p>Tim McGraw | Love Story</p>
              </div>
              <a className="Track-action">+</a>
            </div>
            <div className="Track">
              <div className="Track-information">
                <h3>Tiny Dancer</h3>
                <p>Rockabye Baby! | Lullaby Renditions of Elton John</p>
              </div>
              <a className="Track-action">+</a>
            </div>
            <div className="Track">
              <div className="Track-information">
                <h3>Tiny Dancer</h3>
                <p>The White Raven | Tiny Dancer</p>
              </div>
              <a className="Track-action">+</a>
            </div>
            <div className="Track">
              <div className="Track-information">
                <h3>Tiny Dancer - Live Album Version</h3>
                <p>Ben Folds | Ben Folds Live</p>
              </div>
              <a className="Track-action">+</a>
            </div>
          </div>
        </div>
    )
  };
}
