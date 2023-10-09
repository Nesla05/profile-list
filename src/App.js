import React from "react";
import Profile from "./components/profile";

const users = [
  {
    id: 1,
    name: "nesla",
    email: "nesla@gmail.com",
  },
  {
    id: 2,
    name: "nesla",
    email: "nesla@gmail.com",
  },
];
function MyApp() {
  return (
    <div>
      {users.map((users) => (
        <Profile  key={users.id} name={users.name} email={users.email} />
      ))}
    </div>
  );
}

export default MyApp;
