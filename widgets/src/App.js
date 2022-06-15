import React from "react";
// import Accordion from "./components/Accordion";
import Search from "./components/Search";

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

const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;
