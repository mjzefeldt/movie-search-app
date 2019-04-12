import React from 'react';
import List from './List';

function Main({list, base_url, poster_size}) {
    return (
            <main>
              {list.length === 0 && <p>Try searching for some movies!</p>}
              <List 
                list={list} 
                base_url={base_url}
                poster_size={poster_size}
              />
            </main>
    )
  }

export default Main;
