import { createContext, useContext, useState } from "react";
import Checkout from "./Checkout";
import Login from "./Login";

export const userInfoContext = createContext(); //1. creating context
function App() {
  const [username, setUsername] = useState("");
  return (
    <div>
      <userInfoContext.Provider value={{ username, setUsername }}>
        {/* 2/ providing context */}
        <Login />
        <Checkout />
      </userInfoContext.Provider>
      <br />
      <hr />
      <mark>steps:</mark>
      <p>
        <mark>1. use createContext at App()</mark>
      </p>
      <p>
        <mark>
          2. userInfoContext.Provider tag cover Login() and Checkout()
        </mark>
      </p>
      <p>
        <mark>3. useContext at Login() and Checkout()</mark>
      </p>
      <p>
        <mark>4. combine with useState to update context values</mark>
      </p>
    </div>
  );
}

export default App;
