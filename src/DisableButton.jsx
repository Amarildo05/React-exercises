import { useState } from "react";

export default function DisableButton() {
  const [inputValue, setInputValue] = useState("");

  const buttonDisabled = inputValue.trim() === "";

  return (
    <div style={{ padding: 10 }}>
      <input
        style={{ width: 200, height: 40 }}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type here..."
      />
      <button
        type="submit"
        disabled={buttonDisabled}
        style={{
          backgroundColor: buttonDisabled ? "gray" : "red",
          cursor: buttonDisabled ? "not-allowed" : "pointer",
        }}
      >
        Submit
      </button>
    </div>
  );
}