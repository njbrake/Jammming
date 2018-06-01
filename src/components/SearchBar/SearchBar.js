import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component{
constructor(props){
  super(props);
  this.state = {
    search: '',
  };
  this.handleSearchChange = this.handleSearchChange.bind(this);
  this.handleSearch = this.handleSearch.bind(this);
}

handleSearchChange(e){
  this.setState({
    search: e.target.value
  });
}
handleSearch(event){
  this.props.searchSpotify(this.state.search);
  event.preventDefault();
}
render(){return(
<div className="SearchBar">
  <input onChange = {this.handleSearchChange} placeholder="Enter A Song Title" />
  <a onClick ={this.handleSearch}>SEARCH</a>
</div>
)}
}
