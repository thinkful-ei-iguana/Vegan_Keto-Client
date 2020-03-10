import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBox extends Component {
    render() {
        return (
            <div className="SearchBox">
                <FontAwesomeIcon icon={faSearch} />
                <input placeholder="Kale, Spinach, Avocado" />
            </div>
        );
    }
}

export default SearchBox;