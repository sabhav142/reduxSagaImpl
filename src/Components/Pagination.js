const Pagination = () => {
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };
  
    return (
      <div>
        {Array(totalPages)
          .fill(0)
          .map((_, index) => (
            <button key={index} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          ))}
      </div>
    );
  };