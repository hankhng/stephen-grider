import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

const Button = () => {
  const language = useContext(LanguageContext);
  const text = language === "english" ? "submit" : "verlooggen";

  return (
    <button language={language} className="ui button primary">
      {text}
    </button>
  );
};

export default Button;
