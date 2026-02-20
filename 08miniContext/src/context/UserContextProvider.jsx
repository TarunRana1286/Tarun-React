import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  // const [user, setUser] = React.useState({
  //   name: "John Doe",
  //   email: "tarun.rana@gmail.com",
  // });

  const [user, setUser] = React.useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
    );
}

export default UserContextProvider;