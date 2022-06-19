import React from "react";

const Link = ({ className, href, children }) => {
  const onClickFunction = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();

    //changes the href to what link was clicked
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClickFunction} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
