import React from 'react'

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <>
        <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 border rounded-md cursor-pointer"
            >
              Previous
            </button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 border rounded-md cursor-pointer"
            >
              Next
            </button>
    </>
  )
}

export default Pagination