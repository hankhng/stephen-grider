import React, { useState } from "react";

const Accordion = ({ items }) => {
  // When setActiveIndex is called, the entire Accordion component rerenders
  // null is just to initialise the useState function, it's an initialisation value
  // When you call it one time, it disappears
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const itemsList = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{itemsList}</div>;
};

export default Accordion;
