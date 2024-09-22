import { useState } from "react";

export default function ShowHidePsw() {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");

  function handleShowHide() {
    type === "password" ? setType("text") : setType("password");
  }

  return (
    <div style={{ padding: "6px" }}>
      <input
        style={{ height: "36px", margin: "5px" }}
        type={type}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
      />
      <button onClick={handleShowHide}>Show/Hide Password</button>
    </div>
  );
}