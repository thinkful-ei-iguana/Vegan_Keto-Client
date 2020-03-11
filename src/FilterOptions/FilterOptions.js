import React, { Component } from 'react';
import './FilterOptions.css';
// child of searchbar 
class FilterOptions extends Component {
  render() {
    const { filterOptions, filterOptionsCuisine } = this.props;
    return (
      <div className="FilterOptions">
        <div className="FilterOptions__option">
          <label htmlFor="filter_recipeType">
            Recipe Type:
            <select className="recipeTypeFilter"
              checked={filterOptions ==="All"}
              onChange={e => this.props.handleFilterChange(e.target.value)}>
              <option value></option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="dessert">Dessert</option>
              <option value="snack">Snack</option>
              <option value="Breads and Crackers">Breads and Crackers</option>
              <option value="Side Dish">Side Dish</option>
              <option value="fat-bombs">Fat Bombs</option>
            </select>
          </label>
        </div>
        <div className="FilterOptions__option">
          <label htmlFor="filter_cuisineType">
            Cuisine Type:
            <select className="cuisineTypeFilter"
                checked={filterOptionsCuisine ==="All"}
                onChange={e => this.props.handleFilterChangeCuisine(e.target.value)}>
                <option value></option>
                <option value="American">American</option>
                <option value="Chinese">Chinese</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Greek">Greek</option>
                <option value="Indian">Indian</option>
                <option value="Italian">Italian</option>
                <option value="Japanese">Japanese</option>                        
                <option value="Korean">Korean</option>
                <option value="Mexican">Mexican</option>
                <option value="Middle Eastern">Middle Eastern</option>
                <option value="Russian">Russian</option>                        
                <option value="Spanish">Spanish</option>               
                <option value="Thai">Thai</option>
                <option value="Vietnamese">Vietnamese</option>   
            </select>
          </label>
        </div>
      </div>
    );
  }
}

export default FilterOptions;