import { useState } from "react";

function Pagination() {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
    "Item 16",
    "Item 17",
    "Item 18",
    "Item 19",
    "Item 20",
    "Item 3",
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 1",
    "Item 2",
    "Item 3",
  ];

  const itemsToShow = items.slice((currentPage - 1) * itemsPerPage, itemsPerPage * currentPage);
  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function handlePreviousPage() {
    setCurrentPage(currentPage - 1);
  }

  return (
    <div>
      {itemsToShow.map((item) => {
        return <li key={item}>{item}</li>;
      })}
      <button onClick={handlePreviousPage}>Previous Elements</button>
      <button onClick={handleNextPage}>Next Elements</button>
    </div>
  );
}

export default Pagination;
