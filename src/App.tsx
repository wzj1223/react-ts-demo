import "./styles.css";

import { Provider } from "./state";

import Person from "./Person";
import User, { UserList } from "./User";

import { GlobalStateProvider } from "./Store";
import C1 from "./C1";

export default function App() {
  return (
    // <div className="App">
    //   <h1>Hello CodeSandbox</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    // </div>
    <div>
      {/* <Provider>
        <h1>Counter</h1>
        <h1>Person</h1>
        <Person />
        <h1> 用户信息</h1>
      </Provider> */}
      <hr />
      <hr />
      <GlobalStateProvider>
        <C1 />
        <UserList />
      </GlobalStateProvider>
    </div>
  );
}
