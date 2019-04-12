import React from 'react';

function Header({onSearchChange}) {
    return(
        <header>
            <div id="header-content">
                <h1>Movie Search App</h1>
                <input type="text" id="movie-search" name="movie-search" 
                    size="27" 
                    placeholder="Find movies..."
                    onChange={onSearchChange}
                />
            </div>
        </header>
    )
}

export default Header;
