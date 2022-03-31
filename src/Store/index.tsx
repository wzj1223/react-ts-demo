import React, { useReducer } from "react";

import { State, SetState, Person } from "./Interface";
import * as Constants from "../Constants";
import { createContainer } from "react-tracked";

const initialState: State = {
  count: 0,
  person: {
    firstName: "",
    lastName: "",
    age: 0
  }
};
const globalStateReducer = (state: State, action: any) => {
  switch (action.type) {
    case Constants.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case Constants.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case Constants.SET_FIRSTNAME:
      return {
        ...state,
        person: {
          ...state.person,
          firstName: action.payload
        }
      };
    case Constants.SET_LASTNAME:
      return {
        ...state,
        person: {
          ...state.person,
          lastName: action.payload
        }
      };
    case Constants.SET_AGE:
      return {
        ...state,
        person: {
          ...state.person,
          age: action.payload
        }
      };
    case Constants.SET_PERSON:
      return {
        ...state,
        person: action.payload
      };
    default:
      throw new Error("unknown action type");
  }
};
const useValue = () => useReducer(globalStateReducer, initialState);
const { Provider, useTracked } = createContainer(useValue);

const useGlobalState = (): [State, SetState] => {
  const [state, dispath] = useTracked();
  const setCountPlusOne = () => {
    dispath({
      type: Constants.INCREMENT
    });
  };
  const setCountReduceOne = () => {
    dispath({
      type: Constants.DECREMENT
    });
  };
  const setPerson = (person: Person) => {
    dispath({
      type: Constants.SET_PERSON,
      payload: person
    });
  };
  const setFirstName = (name: string) => {
    dispath({
      type: Constants.SET_FIRSTNAME,
      payload: name
    });
  };
  const setLastName = (name: string) => {
    dispath({
      type: Constants.SET_LASTNAME,
      payload: name
    });
  };
  const setAge = (age: number) => {
    dispath({
      type: Constants.SET_AGE,
      payload: age
    });
  };
  const setState: SetState = {
    setCountPlusOne,
    setCountReduceOne,
    setPerson,
    setFirstName,
    setLastName,
    setAge
  };
  return [state, setState];
};

export default useGlobalState;

export const GlobalStateProvider: React.FC = ({ children }) => {
  return <Provider>{children}</Provider>;
};
