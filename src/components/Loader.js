import React, { Component, Fragment } from 'react';

class Loader extends Component {
    // constructor(props) {
    //   super(props)
    // }
    
    render() {

      return (
        <Fragment>
          <div id="loader">
            {this.props.isLoading && <div>Loading...</div>}
          </div>
        </Fragment>
      )
    }
}

export default Loader;
