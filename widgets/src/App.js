import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import ControlledAccordions from "./components/ControlledAccordions";
import Translate from "./components/Translate";
import { Route } from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is FE JS Library",
  },
  {
    title: "Why use React?",
    content: "It is a favourite JS library amongst engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating reusable components",
  },
];

const options = [
  {
    label: "The Colour Red",
    value: "red",
  },
  {
    label: "The Colour Green",
    value: "green",
  },
  {
    label: "The Colour Blue",
    value: "Blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <br />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a colour"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      {window.location.pathname === "/muiaccordion" ? (
        <ControlledAccordions />
      ) : null}
    </div>
  );
};

export default App;
