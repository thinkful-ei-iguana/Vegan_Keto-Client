import React, { Component } from 'react';
import './RecipeSearch.css';
import SearchBox from '../SearchBox/SearchBox';
import FilterOptions from '../FilterOptions/FilterOptions';

class RecipeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      searchTerms: '',
      filterOptions: 'All',
      filterOptionsCuisine: 'All'
    };
  }

  updateSearchTerm(term) {
    this.setState({
      searchTerms: term
    })
    console.log(term);
  }
  // // setSearch(term) {
  // //   this.setState({
  // //     searchTerm: term
  // //   })
  // //   console.log(term);
  // // }

  updateFilterOptions(options) {
    this.setState({
      filterOptions: options      
    })
    console.log(options);
  }

  updateFilterOptionsCuisine(optionsCuisine) {
    this.setState({
      filterOptionsCuisine: optionsCuisine   
    })
    console.log(optionsCuisine);
  }


handleSearch = (e) => {
  e.preventDefault();
  let searchArray = this.state.searchTerms.split(' ');
  let searchTerms = searchArray.join(',+');
  let URL =`http://localhost:8000/recipes`;

  fetch(URL)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(results => {
      this.setState({
        recipes: results,
      });
    })
    .catch(err => {
      this.setState({
        error: 'That does not exist',
      });
    })
}

  render() {
    return (
      <div className="RecipeSearch">
        <div className="RecipeSearch__heading">
          <h1>Recipe Search</h1>
        </div>
        <div className="RecipeSearch__controls">
          <SearchBox
            filterOptions={this.state.filterOptions}
            filterOptionsCuisine={this.state.filterOptionsCuisine}
            handleUpdate={term =>this.updateSearchTerm(term)}
            // handleFilterChange={options => this.updateFilterOptions(options)}
            // handleFilterChangeCuisine={optionsCuisine => this.updateFilterOptionsCuisine(optionsCuisine)}
            handleSumbit={e => this.handleSearch(e)}            
             />
          <FilterOptions
            filterOptions={this.filterOptions}
            handleFilterChange={options => this.updateFilterOptions(options)}
            handleFilterChangeCuisine={optionsCuisine => this.updateFilterOptionsCuisine(optionsCuisine)}/>
        </div>
      </div>
    );
  }
}

export default RecipeSearch;