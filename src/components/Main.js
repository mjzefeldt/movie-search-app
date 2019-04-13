import React from 'react';
import Header from './Header';
import List from './List';

function Main({onSearchChange, list, base_url, poster_size, search}) {
    return (
            <main>
              <Header onSearchChange={onSearchChange}/>
              {(list.length === 0 && search === '') && <h3>Try searching for some movies!</h3>}
              {(list.length === 0 && search !== '') && <h3>No movies match your search criteria.</h3>}
              <List 
                list={list} 
                base_url={base_url}
                poster_size={poster_size}
              />
            </main>
    )
  }

export default Main;
