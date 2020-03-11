import React, { Component } from 'react';
import './FilterableList.css';
import ListItem from '../ListItem/ListItem';

class FilterableList extends Component {
  render() {
    const { searchTerm, filterOptions, filterOptionsCuisine } = this.props;
    const list = this.props.recipes
    .filter(recipe => (recipe.recipeType === filterOptions || filterOptions === 'All'))
        .filter(recipe => (recipe.cuisineType === filterOptionsCuisine || filterOptionsCuisine === 'All'))
        .filter(recipe => recipe.ingredients.includes(searchTerm.toLowerCase()))
        .map((recipe, key) => <ListItem {...recipe} key={key} />);
        
        // console.log(searchTerm);
        // console.log(filterOptions);
        // console.log(filterOptionsCuisine);
    return (
      <div className="FilterableList">
        {list}
      </div>
    );
  }
}

FilterableList.defaultProps = {
  recipes: []
};


export default FilterableList;