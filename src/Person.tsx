import React from "react";
import { useTracked } from "./state";
import * as Constants from "./Constants";

let numRendered = 0;

const Counter: React.FC<{ firstName: string }> = ({ firstName }) => {
  const [state, dispatch] = useTracked();
  return (
    <div>
      numRendered：{++numRendered}
      <hr />
      {firstName}
      <div>
        <span>Count:{state.count}</span>
        <button
          type="button"
          onClick={() => dispatch({ type: Constants.INCREMENT })}
        >
          +1
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: Constants.DECREMENT })}
        >
          -1
        </button>
      </div>
    </div>
  );
};

const Person: React.FC = () => {
  const [state, dispatch] = useTracked();
  return (
    <div>
      <div>numRendered:{++numRendered}</div>
      <Counter firstName={state.person.firstName} />
      <div>
        First Name:
        <input
          value={state.person.firstName}
          onChange={(event) => {
            const firstName = event.target.value;
            dispatch({ payload: firstName, type: Constants.SET_FIRSTNAME });
          }}
        />
      </div>
      <div>
        Last Name:
        <input
          value={state.person.lastName}
          onChange={(event) => {
            const lastName = event.target.value;
            dispatch({ payload: lastName, type: Constants.SET_LASTNAME });
          }}
        />
      </div>
      <div>
        Age:
        <input
          value={state.person.age}
          onChange={(event) => {
            const age = Number(event.target.value) || 0;
            dispatch({ payload: age, type: Constants.SET_AGE });
          }}
        />
      </div>
    </div>
  );
};

export default Person;
