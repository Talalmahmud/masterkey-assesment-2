import React, { useState } from "react";
import "./App.css";

const letterList = "ABCDEFGHIJKLMNOPQRST";
const App = () => {
  const [outputString, setOutputString] = useState("");

  const handleClick = (letter) => {
    let newString = outputString + letter;

    // Replace consecutive letters with underscores
    newString = newString.replace(/([A-Z])\1{2,}/g, (match) =>
      "_".repeat(match.length)
    );

    setOutputString(newString);
  };

  return (
    <div className="App">
      <div className="grid">
        {letterList.split("").map((item, index) => (
          <div key={index} className="tile" onClick={() => handleClick(item)}>
            {item}
          </div>
        ))}
      </div>
      <div className="outputString">
        {outputString === "" ? <p>No Letter Typed</p> : <p>{outputString}</p>}
      </div>
    </div>
  );
};

export default App;
