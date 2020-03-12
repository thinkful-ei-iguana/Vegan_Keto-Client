import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="home-container">
                <ul id="home-link-list">
                    <Link
                        className="home-link-text"
                        to={"/RecipeSearch"}>
                        <li className="home-search">Search Recipes</li>
                    </Link>
                    <Link
                        className="home-link-text"
                        to={"/RecipeAdd"}>
                        <li className="home-search">Add A Recipe</li>
                    </Link>
                    <Link
                        className="home-link-text"
                        to={"/RecipeEdit"}>
                        <li className="home-search">Edit Recipes</li>
                    </Link>
                    <Link
                        className="home-link-text"
                        to={"/RecipeFavorites"}>
                        <li className="home-search">Recipe Favorites</li>
                    </Link>
                </ul>
                <h1>Hello!</h1>
            </div>
        )
    }
}

export default Home;