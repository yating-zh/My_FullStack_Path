import { useContext } from "react";
import { userInfoContext } from "./context/userInfoContext";

export default function Checkout() {
  const { username, setUsername } = useContext(userInfoContext); //3. consuming.using context
  return (
    <div>
      <h4>Checkout component:</h4>
      check out as username: {username}
    </div>
  );
}
