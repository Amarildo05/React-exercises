import { useState } from "react";

const WordCounter = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea onChange={(e) => setText(e.target.value)}></textarea>
      Words: {text.split(" ").length}
    </div>
  );
};

export default WordCounter;