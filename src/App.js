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
      filterOptions: 'All'
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
              />
            <FilterableList
              recipes={this.props.recipes}  
              searchTerm={this.state.searchTerm}
              filterOptions={this.state.filterOptions}/>
      </div>
    );
  }
}

export default App;
