import React from "react";
import useGlobal from "../Store";
import { Button, Input } from "antd";

const Counter: React.FC<{ firstName: string }> = ({ firstName }) => {
  const [global, action] = useGlobal();

  return (
    <div>
      numRendered: {global.count}
      <br />
      firstName {firstName}
      <hr />
      <Button type="primary" danger onClick={() => action.setCountPlusOne()}>
        +1
      </Button>
      <span> </span>
      <Button type="primary" onClick={() => action.setCountReduceOne()}>
        -1
      </Button>
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
        <Input
          value={state.person.firstName}
          onChange={(event) => {
            const firstName = event.target.value;
            action.setFirstName(firstName);
          }}
        />
      </div>
      <div>
        Last Name:
        <Input
          value={state.person.lastName}
          onChange={(event) => {
            const lastName = event.target.value;
            action.setLastName(lastName);
          }}
        />
      </div>
      <div>
        Age:
        <Input
          value={state.person.age}
          onChange={(event) => {
            const age = Number(event.target.value) || 0;
            action.setAge(age);
          }}
        />
      </div>
      <Button type="primary" onClick={() => updatePerson()}>
        赋值新的Person
      </Button>
    </div>
  );
};

export default C1;
