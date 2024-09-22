import { useState } from "react";

export default function TemperatureConverter() {
  const [temp, setTemp] = useState(0);

  const convertedTemp = (temp * 9.0) / 5.0 + 32.0;
  
  return (
    <div>
      <input
        style={{ width: 175, height: 40, margin: 8 }}
        type="number"
        placeholder="Current temperature (0°C)"
        onChange={(event) => {
          setTemp(event.target.value);
        }}
      />
      <span style={{ fontSize: '16px' }}>°C</span>
      <p style={{ padding: 8 }}>
        Temperature in Fahrenheit: {convertedTemp.toFixed(1)} °F
      </p>
    </div>
  );
}