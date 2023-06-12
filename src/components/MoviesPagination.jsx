import React from 'react';

const MoviesPagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePreviousClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className='text-white font-bold max-w-7xl mx-auto'>
      {currentPage} / {totalPages}
      <button
        className={`w-1/2 h-6 p-2 rounded border border-gray-300 outline-none transition-all duration-300 ease-in-out`}
        onClick={handlePreviousClick}
      >Left</button>
      <button
        className={`w-1/2 h-6 p-2 rounded border border-gray-300 outline-none transition-all duration-300 ease-in-out`}
        onClick={handleNextClick}
      >
      Right
      </button>
    </div>
  );
};

export default MoviesPagination;