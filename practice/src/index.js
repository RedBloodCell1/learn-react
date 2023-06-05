import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

//Friend List
import { friends } from "./friends";
import Friend from "./Friend";

function FriendList() {
  return (
    <section className="friendlist">
      {friends.map((friend) => {
        return <Friend key={friend.id} {...friend} />;
      })}
    </section>
  );
}

ReactDom.render(<FriendList />, document.getElementById("root"));
