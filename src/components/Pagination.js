import React, { Fragment } from 'react';
import ReactPaginate from 'react-paginate';


function Pagination ({total_pages, current_page, onPageChange, total_results}) {
        return (
            <Fragment>
                <div id="pagination-container">
                    <div>
                        <p>Viewing page {current_page} of {total_pages}: {total_results.toString()} results</p>
                        <ReactPaginate 
                            previousLabel={'< prev'}
                            nextLabel={'next >'}
                            breakLabel={'...'}
                            pageCount={total_pages}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={4} 
                            onPageChange={onPageChange}
                            containerClassName={'pagination'}
                            pageLinkClassName={'page-link'}
                            activeLinkClassName={'active-page-link'}
                            previousLinkClassName={current_page === 0 || current_page === 1 ? 'page-link-inactive' : 'page-link' }
                            nextLinkClassName={current_page === 0 || current_page === total_pages ? 'page-link-inactive' : 'page-link' }
                            breakLinkClassName={'page-link'}
                            disabledClassName={'page-link-inactive'}
                            />
                    </div>
                </div>
            </Fragment>
        )

}

export default Pagination;
