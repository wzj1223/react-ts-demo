export interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

export interface State {
  count: number;
  person: Person;
}

export interface SetState {
  setCountPlusOne: () => void;
  setCountReduceOne: () => void;
  setFirstName: (name: string) => void;
  setLastName: (name: string) => void;
  setAge: (age: number) => void;
  setPerson: (person: Person) => void;
}
