import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

//SETUP VARS

const friends = [
  {
    img: "https://i.ytimg.com/an_webp/6jraQOeWOqM/mqdefault_6s.webp?du=3000&sqp=CN6IjaMG&rs=AOn4CLDEX16K3Xy6ENXWmO0XxbBv4QCKZA",
    name: "Martio",
    skinColor: "Black",
  },
  {
    img: "https://i.ytimg.com/an_webp/b6ozunDfahc/mqdefault_6s.webp?du=3000&sqp=CN6NjaMG&rs=AOn4CLBOZpYvFlLRjY71kRLoMXz4G-uZ5Q",
    name: "Defriantio",
    skinColor: "Brown",
  },
  {
    img: "https://i.ytimg.com/vi/sPL-GybO1cA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDIDVrX6Q2oVHm5LbQa4UD4cRYcVQ",
    name: "Jason",
    skinColor: "Wheat",
  },
];

//Rules
// return single element
// fragment <React.fragment> / section / div
// camel case for html attribute
// className instead of class
// close every element

function FriendList() {
  return (
    <section className="friendlist">
      <Friend
        img={firstFriend.img}
        name={firstFriend.name}
        skinColor={firstFriend.skinColor}
      ></Friend>

      <Friend
        img={secondFriend.img}
        name={secondFriend.name}
        skinColor={secondFriend.skinColor}
      ></Friend>
      <Friend
        img={thirdFriend.img}
        name={thirdFriend.name}
        skinColor={thirdFriend.skinColor}
      ></Friend>
    </section>
  );
}

const Friend = (props) => {
  const { img, name, skinColor } = props;
  return (
    <article className="friend">
      <img src={img} alt="" />
      <h1>{name}</h1>
      <h4>{skinColor}</h4>
    </article>
  );
};

// const Greeting = () => {
//   return React.createElement("h1", {}, "BODOBOM");
// };

ReactDom.render(<FriendList />, document.getElementById("root"));
