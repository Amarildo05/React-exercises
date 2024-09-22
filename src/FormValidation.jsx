import { useState } from "react";

export default function FormValidation() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleValues = (e) => {
    const { type, value } = e.target;
    if (type === "text") {
      setUsername(value);
    } else if (type === "password") {
      setPassword(value);
    }
  };

  const handleClick = () => {
    if (username.trim() === "" || password.trim() === "") {
      alert("Both fields are required");
      return;
    }

    //clear fields after validation
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleValues}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleValues}
        />
      </div>
      <button type="button" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}