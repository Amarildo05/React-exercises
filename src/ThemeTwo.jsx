import { useState } from "react";

function ThemeTwo() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function changeTheme() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: isDarkMode ? "black" : "white",
      }}
    >
      <button onClick={changeTheme}>Change Theme to {isDarkMode ? "light" : "dark"}</button>
    </div>
  );
}

export default ThemeTwo;
