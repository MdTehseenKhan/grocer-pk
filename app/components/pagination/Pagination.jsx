"use client"

import "./Pagination.scss"

// export default function Pagination() {
export default function Pagination({ totalNumberOfData, currentPage, setCurrentPage, dataPerPage = 10 }) {
  // const { totalNumberOfData, currentPage, setCurrentPage, dataPerPage } = {
  //   totalNumberOfData: 20,
  //   dataPerPage: 2,
  //   currentPage: 1,
  //   setCurrentPage: () => {},
  // }
  const totalNumberOfPages = Math.ceil(totalNumberOfData / dataPerPage)

  if (totalNumberOfPages <= 1) return

  const numberOfPages = []
  for (let i = 1; i <= totalNumberOfPages; i++) {
    numberOfPages.push(i)
  }

  const paginate = (e) => setCurrentPage(parseInt(e.target.value))
  const paginatePrevious = () => setCurrentPage((prev) => prev - 1)
  const paginateNext = () => setCurrentPage((prev) => prev + 1)

  return (
    <nav className="pagination">
      <div className="pagination-container">
        {/* Previous */}
        {currentPage > 1 && (
          <>
            <button className="pagination-navigation rounded-l-lg" onClick={paginatePrevious}>
              Previous
            </button>
          </>
        )}

        {/* Numbers */}
        {numberOfPages?.map((number) => {
          if (
            number === currentPage - 3 ||
            number === currentPage - 2 ||
            number === currentPage - 1 ||
            number === currentPage ||
            number === currentPage + 1 ||
            number === currentPage + 2 ||
            number === currentPage + 3
          ) {
            return (
              <button
                key={number}
                className={`pagination-btn ${number === currentPage && "active"}`}
                value={number}
                onClick={paginate}
              >
                {number}
              </button>
            )
          }
        })}
        {/* Next */}
        {currentPage < totalNumberOfPages && (
          <>
            <button className="pagination-navigation rounded-r-lg" onClick={paginateNext}>
              Next
            </button>
          </>
        )}
      </div>
    </nav>
  )
}
