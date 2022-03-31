import { useReducer, Reducer } from "react";

import { createContainer } from "react-tracked";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const SET_FIRSTNAME = "SET_FIRSTNAME";
const SET_LASTNAME = "SET_LASTNAME";
const SET_AGE = "SET_AGE";
const SET_PERSON = "SET_PERSON";

const initialState = {
  count: 0,
  person: {
    age: 0,
    firstName: "",
    lastName: ""
  }
};

type State = typeof initialState;

const reducer: Reducer<State, any> = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case SET_FIRSTNAME:
      return {
        ...state,
        person: {
          ...state.person,
          firstName: action.payload
        }
      };
    case SET_LASTNAME:
      return {
        ...state,
        person: {
          ...state.person,
          lastName: action.payload
        }
      };
    case SET_AGE:
      return {
        ...state,
        person: {
          ...state.person,
          age: action.payload
        }
      };
    case SET_PERSON:
      return {
        ...state,
        person: action.payload
      };
    default:
      throw new Error("unknown action type");
  }
};

const useValue = () => useReducer(reducer, initialState);
export const { Provider, useTracked } = createContainer(useValue, {
  concurrentMode: true
});
