import React, { Component } from 'react';

import Header from './Header/Header'
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'paprika',
      filterOption: 'All'
    };
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
              filterOption={this.state.filterOptions}/>
            <FilterableList
              files={this.props.files}  
              searchTerm={this.state.searchTerm}
              filterOption={this.state.filterOptions}/>
      </div>
    );
  }
}

export default App;
