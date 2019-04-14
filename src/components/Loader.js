import React, { Fragment } from 'react';

function Loader ({isLoading}) {

      return (
        <Fragment>
          <div id="loader">
            {isLoading && <div>Loading...</div>}
          </div>
        </Fragment>
      )
}

export default Loader;
