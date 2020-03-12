import React, { Component } from 'react';
import './FilterableList.css';
import RecipeDetail from '../RecipeDetail/RecipeDetail';

class FilterableList extends Component {
  render() {
    const { searchTerms, filterOptions, filterOptionsCuisine } = this.props;
    const recipeList = this.props.recipes
    .filter(recipe => (recipe.recipeType === filterOptions || filterOptions === 'All'))
        .filter(recipe => (recipe.cuisineType === filterOptionsCuisine || filterOptionsCuisine === 'All'))
        .filter(recipe => recipe.ingredients.includes(searchTerms.toLowerCase()))
        .map((recipe, key) => <RecipeDetail {...recipe} key={key} />);
        
        console.log(searchTerms);
        console.log(filterOptions);
        console.log(filterOptionsCuisine);
    return (
      <div className="FilterableList">
        {recipeList}
      </div>
    );
  }
}

FilterableList.defaultProps = {
  recipes: []
};


export default FilterableList;