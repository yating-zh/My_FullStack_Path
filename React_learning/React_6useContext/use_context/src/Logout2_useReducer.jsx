import { useContext } from "react";
import { userInfoContext_useReducer } from "./context/userInfoContext_useReducer";

export default function Logout2_useReducer() {
  const { state, dispatch } = useContext(userInfoContext_useReducer); //3. consuming.using context
  return (
    <div>
      <h4>Logout component:</h4>
      <button
        onClick={() => {
          dispatch({ type: "logout", payload: "guest" });
        }}
      >
        Logout
      </button>
      <hr />
    </div>
  );
}
