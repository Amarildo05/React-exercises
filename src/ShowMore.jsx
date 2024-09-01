import { useState } from "react";

function ShowMore(props) {
  const [endSlice, setEndSlice] = useState(20);
  const text = endSlice === 20 ? props.children.slice(0, endSlice) + "..." : props.children.slice(0, endSlice);

  function handleShowMore() {
    setEndSlice(props.children.length);
  }

  function handleShowLess() {
    setEndSlice(20);
  }

  return (
    <div>
      <p>{text}</p>
      {endSlice === 20 ? (
        <button onClick={handleShowMore}>Show more</button>
      ) : (
        <button onClick={handleShowLess}>Show less</button>
      )}
    </div>
  );
}

export default ShowMore;
