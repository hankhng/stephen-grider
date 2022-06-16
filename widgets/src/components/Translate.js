import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
  { label: "English", value: "en" },
  { label: "Spanish", value: "es" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Italian", value: "it" },
  { label: "Japanese", value: "ja" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Turkish", value: "tr" },
  { label: "Chinese", value: "zh" },
  { label: "Dutch", value: "nl" },
  { label: "Swedish", value: "sv" },
  { label: "Norwegian", value: "no" },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Input language</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <br />
      </div>
      <Dropdown
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
        label="Select a language"
      />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
