import React, { Fragment } from 'react';
import Ratings from 'react-ratings-declarative';

function ListItem ({item, base_url, poster_size}) {
  return (
    <div className="card">
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
  )
}

function List({list, base_url, poster_size}) {
    const listing = list.map((item) => {
      return (
          <ListItem key={item.id} item={item} base_url={base_url} poster_size={poster_size} />
      );
    });
 
    return (
      <Fragment>
        {listing}
      </Fragment>
    )
}

export default List;
