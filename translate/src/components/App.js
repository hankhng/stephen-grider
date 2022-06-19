import React, { useState } from "react";
import UserCreate from "./UserCreate";
import { LanguageProvider } from "../contexts/LanguageContext";

function App() {
  const [language, setLanguage] = useState("english");

  const onLanguageChange = (language) => {
    setLanguage(language);
  };

  return (
    <div className="ui container">
      <div>
        Select a language
        <i onClick={() => onLanguageChange("english")} className="flag gb" />
        <i onClick={() => onLanguageChange("dutch")} className="flag nl" />
        <LanguageProvider value={language}>
          <UserCreate />
        </LanguageProvider>
      </div>
    </div>
  );
}

export default App;
