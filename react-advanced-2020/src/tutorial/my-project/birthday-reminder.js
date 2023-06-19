import React, { useState } from "react";

const MyOwnProject = () => {
  const myFriend = [
    {
      id: 1,
      name: "Jason",
      birthday: "22-12-01",
      img: "https://media.licdn.com/dms/image/D5603AQEsGbF67vU9bg/profile-displayphoto-shrink_800_800/0/1641900521968?e=2147483647&v=beta&t=JjX5LTPOt88Fwv5KB0jqlEJtxcBnpQ34EtQotSbfcOM",
    },
    {
      id: 2,
      name: "Jason2",
      birthday: "22-12-02",
      img: "https://media.licdn.com/dms/image/D5603AQEsGbF67vU9bg/profile-displayphoto-shrink_800_800/0/1641900521968?e=2147483647&v=beta&t=JjX5LTPOt88Fwv5KB0jqlEJtxcBnpQ34EtQotSbfcOM",
    },
    {
      id: 3,
      name: "Jason3",
      birthday: "22-12-03",
      img: "https://media.licdn.com/dms/image/D5603AQEsGbF67vU9bg/profile-displayphoto-shrink_800_800/0/1641900521968?e=2147483647&v=beta&t=JjX5LTPOt88Fwv5KB0jqlEJtxcBnpQ34EtQotSbfcOM",
    },
    {
      id: 4,
      name: "Jason4",
      birthday: "22-12-04",
      img: "https://media.licdn.com/dms/image/D5603AQEsGbF67vU9bg/profile-displayphoto-shrink_800_800/0/1641900521968?e=2147483647&v=beta&t=JjX5LTPOt88Fwv5KB0jqlEJtxcBnpQ34EtQotSbfcOM",
    },
    {
      id: 5,
      name: "Jason5",
      birthday: "22-12-05",
      img: "https://media.licdn.com/dms/image/D5603AQEsGbF67vU9bg/profile-displayphoto-shrink_800_800/0/1641900521968?e=2147483647&v=beta&t=JjX5LTPOt88Fwv5KB0jqlEJtxcBnpQ34EtQotSbfcOM",
    },
  ];

  const [friends, setFriend] = useState(myFriend);

  const clearAllHandler = () => {
    setFriend([]);
  };

  const clearOneHandler = (id) => {
    let newFriends = friends.filter((friend) => friend.id !== id);
    setFriend(newFriends);
  };
  return (
    <>
      <h1>Birthday Reminder</h1>
      {friends.map((friend) => {
        const { id, name, birthday, img } = friend;
        return (
          <div key={id} className="item">
            <img
              src={img}
              alt=""
              style={{ width: "70px", height: "70px", borderRadius: " 50%" }}
            />
            <h4>{name}</h4>
            <h5>{birthday}</h5>
            <button className="btn" onClick={() => clearOneHandler(id)}>
              Delete {name}
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={clearAllHandler}>
        Clear All
      </button>
    </>
  );
};

export default MyOwnProject;
