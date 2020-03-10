import React, { Component } from 'react';
import './FilterableList.css';
import ListItem from '../ListItem/ListItem';

class FilterableList extends Component {
  render() {
    const { searchTerm, filterOptions } = this.props;
    const list = this.props.recipes
        .filter(recipe => recipe.ingredients.includes(searchTerm)
        && (filterOptions === 'All' || recipe.recipeType === filterOptions))
        .map((recipe, key) => <ListItem {...recipe} key={key} />);
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