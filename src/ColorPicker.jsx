import { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  return (
    <div style={{ margin: 12 }}>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{ width: 100, height: 50, margin: "15px" }}
      />
      <div
        style={{
          width: 400,
          height: 400,
          backgroundColor: color,
        }}
      />
    </div>
  );
}