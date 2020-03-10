import React, { Component } from 'react';
import './FilterableList.css';
import ListItem from '../ListItem/ListItem';

class FilterableList extends Component {
  render() {
    const { serachTerm, filterOption } = this.props;
    const list = this.props.recipes
        .filter(recipe => recipe.name.includes(serachTerm)
        && (filterOption === 'All' || recipe.status === filterOption))
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