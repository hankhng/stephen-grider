import React from "react";
import ReactDOM from "react-dom/client";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
import "./style/App.css";

export const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning!</h4>
        Are you sure?
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.company.companyName()}
          timeAgo="Today at 4:45PM"
          comment="Nice blog post!"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.company.companyName()}
          timeAgo="Today at 10:45PM"
          comment="Hello there"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.company.companyName()}
          timeAgo="Yesterday at 1:20PM"
          comment="Hey friend"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
