import "./styles.css";
import React, { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

export default function App() {
  const [text, setText] = useState("");
  const [correction, setCorrection] = useState("");

  const handleTextChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);

    // Check for misspellings
    const words = inputText.toLowerCase().split(" ");
    for (let word of words) {
      if (customDictionary[word]) {
        setCorrection(`Did you mean: ${customDictionary[word]}?`);
        return;
      }
    }
    setCorrection("");
  };

  return (
    <div className="spellcheck-container">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        className="text-area"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text..."
      ></textarea>
      {correction && <p className="correction">{correction}</p>}
    </div>
  );
}
