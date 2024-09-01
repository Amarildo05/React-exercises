import { useState } from "react";

function Theme() {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: theme === "light" ? "white" : "black",
      }}
    >
      {/* <button onClick={changeTheme}>Change Theme to {theme === "light" ? "dark" : "light"}</button> */}

      <input />
      <input />

      <h1>NAme: </h1>
      <h1>Email: </h1>
    </div>
  );
}

export default Theme;
