import React, { Fragment } from 'react';

function List({list, base_url, poster_size}) {

    const listing = list.map((item) => {
      return (
          <div className="card" key={item.id}>
            <div className="card-header">
              <h2>{item.title}</h2>
              <h5>{item.release_date}</h5>
            </div>
            <div className="card-body">
              <img src={`${base_url}${poster_size}${item.poster_path}`} alt={`${item.name} poster`} />
              <p>{item.overview}</p>
            </div>
            <div className="card-footer">
              <p>{item.vote_average} - {item.vote_count}</p>
            </div>
          </div>
      );
    });
    
    return (
      <Fragment>
        {listing}
      </Fragment>
    )
}

export default List;
