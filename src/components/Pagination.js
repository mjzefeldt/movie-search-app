import React, { Fragment } from 'react';
import ReactPaginate from 'react-paginate';


function Pagination ({total_pages, current_page, onPageChange, total_results}) {
        console.log(total_pages, current_page, onPageChange, total_results, '<<< props in pagination')
        return (
            <Fragment>
                <div id="pagination-container">
                    <div>
                        <p>Viewing page {current_page} of {total_pages} - {total_results} results</p>
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
                            previousLinkClassName={'page-link'}
                            nextLinkClassName={'page-link'}
                            breakLinkClassName={'page-link'}
                            />
                    </div>
                </div>
            </Fragment>
        )

}

export default Pagination;
