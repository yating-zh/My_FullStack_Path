import { useContext } from "react";
import { userInfoContext } from "./context/userInfoContext";

export default function Logout2() {
  const { setUsername } = useContext(userInfoContext); //3. consuming.using context
  return (
    <div>
      <h4>Logout component:</h4>
      <button
        onClick={() => {
          setUsername("guest");
        }}
      >
        Logout
      </button>
      <hr />
    </div>
  );
}
