import React, { useState } from "react";

function App() {
  const [mouseOver, onnMouseOver] = useState(false);

  const handleMouseOver = () => {
    onnMouseOver(true);
  };

  const handleMouseOut = () => {
    onnMouseOver(false);
  };

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={handleMouseOver}
        style={{ backgroundColor: mouseOver ? "black" : "white" }}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
