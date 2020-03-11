import React, { Component } from 'react';

import Header from './Header/Header'
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterOptions: 'All',
      filterOptionsCuisine: 'All'
    };
  }

  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })
  }

  updateFilterOption(options) {
    this.setState({
      filterOptions: options
    })
  }

  updateFilterOptionsCuisine(optionsCuisine) {
    this.setState({
      filterOptionsCuisine: optionsCuisine
    })
  }

  render() {
    return (
      <div className="App">
            <Header />
            {/* <Home /> */}
            {/* <Landing /> */}
            {/* <RecipeAdd /> */}
            <SearchBar
              searchTerm={this.state.searchTerm}
              filterOptions={this.state.filterOptions}
              handleUpdate={term=>this.updateSearchTerm(term)}
              handleFilterChange={options => this.updateFilterOption(options)}
              handleFilterChangeCuisine={optionsCuisine => this.updateFilterOptionsCuisine(optionsCuisine)}
              />
            <FilterableList
              recipes={this.props.recipes}  
              searchTerm={this.state.searchTerm}
              filterOptions={this.state.filterOptions}
              filterOptionsCuisine={this.state.filterOptionsCuisine}/>
      </div>
    );
  }
}

export default App;
