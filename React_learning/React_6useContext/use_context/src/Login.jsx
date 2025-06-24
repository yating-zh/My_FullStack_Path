import { useContext, useState } from "react";
import { userInfoContext } from "./App";

export default function Login() {
  const [value, setValue] = useState("");
  const { username, setUsername } = useContext(userInfoContext); //3. consuming.using context
  return (
    <div>
      <h4>Login component:</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUsername(value); //4. updating context
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
