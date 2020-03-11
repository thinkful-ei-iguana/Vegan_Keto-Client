import React, { Component } from 'react';
import './SearchBar.css';
import SearchBox from '../SearchBox/SearchBox';
import FilterOptions from '../FilterOptions/FilterOptions';

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar__heading">
          <h1>Recipe Search</h1>
        </div>
        <div className="SearchBar__controls">
          <SearchBox
            searchTerm={this.props.searchTerm}
            handleUpdate={this.props.handleUpdate}
            handleSubmit={this.props.handleSubmit}/>
          <FilterOptions
            filterOptions={this.props.filterOptions}
            handleFilterChange={this.props.handleFilterChange}
            handleFilterChangeCuisine={this.props.handleFilterChangeCuisine}/>
        </div>
      </div>
    );
  }
}

export default SearchBar;