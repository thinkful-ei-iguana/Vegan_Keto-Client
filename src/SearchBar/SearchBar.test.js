import React, { Component } from 'react';


import SearchBox from '../SearchBox/SearchBox';
import FilterOptions from '../FilterOptions/FilterOptions';

import './SearchBar.css';

class SearchBar extends Component {
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar__heading">
                    <h1>Recipe Search</h1>
                </div>
                <div className="SearchBar__controls">
                    <SearchBox />
                    <FilterOptions />
                </div>
            </div>
        );
    }
}

export default SearchBar;
