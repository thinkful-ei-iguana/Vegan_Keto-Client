import React, { Component } from 'react';
import RecipeDetail from './RecipeDetail/RecipeDetail';

// import RecipeDetail from './RecipeDetail/RecipeDetail';

// import Header from './Header/Header'
// import RecipeAdd from './RecipeAdd/RecipeAdd';
// import SearchBar from './SearchBar/SearchBar';
// import FilterableList from './FilterableList/FilterableList';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      searchTerm: '',
      filterOptions: 'All',
      filterOptionsCuisine: 'All'
    };
  }

  // updateSearchTerm(term) {
  //   this.setState({
  //     searchTerm: term
  //   })
  //   console.log(term);
  // }
  setSearch(term) {
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

  handleSubmit(e) {
    e.preventDefault();
    const baseUrl = 'http://localhost:8000/recipes';
    const params = [];

    if (this.state.term) {
      params.push(`term=${this.state.term}`);
    }
    const query = params.join('$');
    const url = `${baseUrl}?${query}`;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          recipes: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: 'Sorry, No recipes here!'
        });
      })
  }

  render() {
    const recipes = this.state.recipes.map((recipe, i) => {
      return <RecipeDetail {...recipe} key={1} />
    })
    return (
      // <div className="App">
      //       <Header />
      //       {/* <Home /> */}
      //       {/* <Landing /> */}
      //       {/* <RecipeAdd /> */}
      //       <RecipeAdd />
      //       <SearchBar
      //         searchTerm={this.state.searchTerm}
      //         filterOptions={this.state.filterOptions}
      //         handleUpdate={term =>this.updateSearchTerm(term)}
      //         handleFilterChange={options => this.updateFilterOption(options)}
      //         handleFilterChangeCuisine={optionsCuisine => this.updateFilterOptionsCuisine(optionsCuisine)}
      //         />
      //       <FilterableList
      //         recipes={this.props.recipes}  
      //         searchTerm={this.state.searchTerm}
      //         filterOptions={this.state.filterOptions}
      //         filterOptionsCuisine={this.state.filterOptionsCuisine}/>
      // </div>
      <main className="App">
        <h1>NYT Best Sellers</h1>
        <div className="search">
          <form onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor="search">Search: </label>
            <input
              type="text"
              id="search"
              name="search"
              value={this.state.term}
              onChange={e => this.setSearch(e.target.value)}/>

            <label htmlFor="sort">Sort: </label>
            <select id="sort" name="sort" onChange={e => this.setSort(e.target.value)}>
              <option value="">None</option>
              <option value="title">Title</option>
              <option value="recipeType">Type</option>
            </select>
            <button type="submit">Search</button>
          </form>
          <div className="App_error">{ this.state.error }</div>
        </div>
        {recipes}
      </main>
    );
  }
}

export default App;
