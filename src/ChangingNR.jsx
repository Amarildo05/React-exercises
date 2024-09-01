import { useState } from "react";

export default function ChangingNr() {
  const [value, setValue] = useState(0);

  function decrease() {
    setValue(value - 1);
  }

  function increase() {
    setValue(value + 1);
  }
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <button onClick={decrease}>-</button>
      <p>{value}</p>
      <button onClick={increase}>+</button>
    </div>
  );
}