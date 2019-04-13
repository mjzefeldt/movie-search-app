import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header({onSearchChange}) {
    return(
        <header>
            <div id="header-content">
                <h1>Movie Search App</h1>
                <div id="search-container">
                    <FontAwesomeIcon id="search-icon" icon={faSearch} color="#fff" size="xs" /> 
                    <input type="search" id="movie-search" name="movie-search" 
                        size="27" 
                        placeholder="Find movies by title or key word..."
                        onChange={onSearchChange}
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;
