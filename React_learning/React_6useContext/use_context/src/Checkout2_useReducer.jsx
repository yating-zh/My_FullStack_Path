import { useContext } from "react";
import { userInfoContext_useReducer } from "./context/userInfoContext_useReducer";

export default function Checkout2_useReducer() {
  const { state } = useContext(userInfoContext_useReducer); //3. consuming.using context
  return (
    <div>
      <h4>Checkout component:</h4>
      check out as username: {state.user}
    </div>
  );
}
