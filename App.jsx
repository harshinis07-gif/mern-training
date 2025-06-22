
import React, { useState } from "react";

function InputBoxExample() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>React Input Box</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default InputBoxExample;
