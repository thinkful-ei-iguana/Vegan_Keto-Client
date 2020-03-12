import React, { Component } from 'react';
import './RecipeSearch.css';
import SearchBox from '../SearchBox/SearchBox';
import FilterOptions from '../FilterOptions/FilterOptions';

class RecipeSearch extends Component {
  render() {
    return (
      <div className="RecipeSearch">
        <div className="RecipeSearch__heading">
          <h1>Recipe Search</h1>
        </div>
        <div className="RecipeSearch__controls">
          <SearchBox
            handleUpdate={this.props.updateSearchTerm}
            // handleFilterChange={this.updateFilterOption}
            // handleFilterChangeCuisine={this.updateFilterOptionsCuisine}
            handleSumbit={this.props.handleSubmit} />
          <FilterOptions
            filterOptions={this.props.filterOptions}
            handleFilterChange={this.props.handleFilterChange}
            handleFilterChangeCuisine={this.props.handleFilterChangeCuisine}/>
        </div>
      </div>
    );
  }
}

export default RecipeSearch;