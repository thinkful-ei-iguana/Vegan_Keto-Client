import React, { Component } from 'react';

import Header from './Header/Header'
import RecipeAdd from './RecipeAdd/RecipeAdd';
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
    console.log(term);
  }

  updateFilterOption(options) {
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

  render() {
    return (
      <div className="App">
            <Header />
            {/* <Home /> */}
            {/* <Landing /> */}
            {/* <RecipeAdd /> */}
            <RecipeAdd />
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
