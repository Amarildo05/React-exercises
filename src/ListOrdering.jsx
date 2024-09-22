import { useState } from "react";


function ListOrdering() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);

  function handleUp(index) {
    //index = 1
    const temp = items[index - 1];
    // temp = Item 1
    const tempList = [...items];
    // tempList = ["Item 1", "Item 2", "Item 3", "Item 4"]
    tempList[index - 1] = tempList[index];
    // tempList = ["Item 2", "Item 2", "Item 3", "Item 4"]
    tempList[index] = temp;
    // tempList = ["Item 2", "Item 1", "Item 3", "Item 4"]
    setItems(tempList);
  }

  function handleDown(index) {
    const temp = items[index + 1];
    const tempList = [...items];
    tempList[index + 1] = tempList[index];
    tempList[index] = temp;
    setItems(tempList);
  }

  return (
    <div>
      {items.map((item, index) => {
        return (
          <li key={item}>
            {item}
            <button onClick={() => handleUp(index)} disabled={index === 0}>
              Up
            </button>
            <button onClick={() => handleDown(index)} disabled={index === items.length - 1}>
              Down
            </button>
          </li>
        );
      })}
    </div>
  );
}

export default ListOrdering;