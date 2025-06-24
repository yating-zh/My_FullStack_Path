import { useContext, useState } from "react";
import { userInfoContext_useReducer } from "./context/userInfoContext_useReducer";

export default function Login2_useReducer() {
  const [value, setValue] = useState("");
  const { state, dispatch } = useContext(userInfoContext_useReducer); //3. consuming.using context
  return (
    <div>
      <h4>
        Login component <mark> (useReducer):</mark>
      </h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "login", payload: value }); //4. updating context
        }}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">login</button>
      </form>
      <br />
      <hr />
    </div>
  );
}
