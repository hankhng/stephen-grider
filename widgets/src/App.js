import React, { useState } from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import ControlledAccordions from "./components/ControlledAccordions";

// const items = [
//   {
//     title: "What is React?",
//     content: "React is FE JS Library",
//   },
//   {
//     title: "Why use React?",
//     content: "It is a favourite JS library amongst engineers",
//   },
//   {
//     title: "How do you use React?",
//     content: "You use React by creating reusable components",
//   },
// ];

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
  const [showDropdown, setShowDropdown] = useState(true)

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <ControlledAccordions />
      <br />
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ?
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
        : null
      }

    </div>
  );
};

export default App;
