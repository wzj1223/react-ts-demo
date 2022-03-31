import React, { useEffect } from "react";
import useGlobal from "./Store";

const User = () => {
  const [state, action] = useGlobal();
  return (
    <div>
      <br />
      <span>Count: {state.count}</span>
      <br />
      <span>firstName: {state.person.firstName}</span>
      <br />
      <span>LastName:{state.person.lastName}</span>
      <br />
      <span>Age:{state.person.age}</span>
    </div>
  );
};

export const UserList = () => {
  const [state, action] = useGlobal();
  useEffect(() => {
    console.log("userList", state.person);
  }, [state.person]);
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
        <User />
      ))}
    </div>
  );
};

export default User;
