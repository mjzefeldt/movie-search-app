import React, { Fragment } from 'react';
import Ratings from 'react-ratings-declarative';

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
              <Ratings
                rating={parseFloat(item.vote_average)}
                widgetDimensions="1rem"
                widgetSpacings=".25rem"
                widgetRatedColors="#FFDC00"
                widgetEmptyColors="lightgrey"
              >
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
              </Ratings>
              <p>{item.vote_count} votes</p>
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
