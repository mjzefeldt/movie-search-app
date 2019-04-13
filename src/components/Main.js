import React from 'react';
import List from './List';

function Main({list, base_url, poster_size, search}) {
    return (
            <main>
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
