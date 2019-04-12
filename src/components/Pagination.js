import React, { Component, Fragment } from 'react';
import ReactPaginate from 'react-paginate';


class Pagination extends Component {

    render() {
        return (
            <Fragment>
                <ReactPaginate 
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    pageCount={this.props.total_pages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={4} 
                    onPageChange={this.props.onPageChange}
                    containerClassName={'pagination'}
                    // breakClassName={'break-me'}
                    pageClassName={'pages'}
                />
            </Fragment>
        )
    }
}



export default Pagination;
