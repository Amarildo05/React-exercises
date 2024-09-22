import { useState } from "react";

export default function CurrencyConverter() {
  // const currencyRatio = 99.7;
  //multiply input value by 99.7
  const [value, setValue] = useState(0);

  const convertedValue = value * 99.7;

  return (
    <div>
      <input
        type="number"
        placeholder="insert value (EUR)"
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <br />
      <p>Value: {convertedValue.toFixed(1)} ALL </p>
    </div>
  );
}