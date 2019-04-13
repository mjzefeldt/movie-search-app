import React, { Component, Fragment } from 'react';
import ReactPaginate from 'react-paginate';


class Pagination extends Component {

    render() {
        return (
            <Fragment>
                <div id="pagination-container">
                    <ReactPaginate 
                        previousLabel={'< prev'}
                        nextLabel={'next >'}
                        breakLabel={'...'}
                        pageCount={this.props.total_pages}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={4} 
                        onPageChange={this.props.onPageChange}
                        containerClassName={'pagination'}
                        pageLinkClassName={'page-link'}
                        activeLinkClassName={'active-page-link'}
                        previousLinkClassName={'page-link'}
                        nextLinkClassName={'page-link'}
                        breakLinkClassName={'page-link'}
                    />
                </div>
            </Fragment>
        )
    }
}



export default Pagination;
