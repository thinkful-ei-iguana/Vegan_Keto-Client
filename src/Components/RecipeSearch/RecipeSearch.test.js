import React, { Component } from 'react';


import SearchBox from '../SearchBox/SearchBox';
import FilterOptions from '../FilterOptions/FilterOptions';

import './RecipeSearch.css';

class RecipeSearch extends Component {
    render() {
        return (
            <div className="RecipeSearch">
                <div className="RecipeSearch__heading">
                    <h1>Recipe Search</h1>
                </div>
                <div className="RecipeSearch__controls">
                    <SearchBox />
                    <FilterOptions />
                </div>
            </div>
        );
    }
}

export default RecipeSearch;
