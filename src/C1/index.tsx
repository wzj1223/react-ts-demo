import React from "react";
import useGlobal from "../Store";

const Counter: React.FC<{ firstName: string }> = ({ firstName }) => {
  const [global, action] = useGlobal();

  return (
    <div>
      numRendered: {global.count}
      <br />
      firstName {firstName}
      <hr />
      <button onClick={() => action.setCountPlusOne()}>+1</button>
      <button onClick={() => action.setCountReduceOne()}>-1</button>
    </div>
  );
};

const C1 = () => {
  const [state, action] = useGlobal();
  const updatePerson = () => {
    action.setPerson({
      firstName: "张三",
      lastName: "李四",
      age: 20
    });
  };
  return (
    <div>
      <Counter firstName={state.person.firstName} />
      <p>numRendered:{state.count}</p>
      <hr />
      <div>
        First Name:
        <input
          value={state.person.firstName}
          onChange={(event) => {
            const firstName = event.target.value;
            action.setFirstName(firstName);
          }}
        />
      </div>
      <div>
        Last Name:
        <input
          value={state.person.lastName}
          onChange={(event) => {
            const lastName = event.target.value;
            action.setLastName(lastName);
          }}
        />
      </div>
      <div>
        Age:
        <input
          value={state.person.age}
          onChange={(event) => {
            const age = Number(event.target.value) || 0;
            action.setAge(age);
          }}
        />
      </div>
      <button onClick={() => updatePerson()}>赋值新的Person</button>
    </div>
  );
};

export default C1;
