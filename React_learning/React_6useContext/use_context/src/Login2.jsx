import { useContext, useState } from "react";
import { userInfoContext } from "./context/userInfoContext";

export default function Login2() {
  const [value, setValue] = useState("");
  const { username, setUsername } = useContext(userInfoContext); //3. consuming.using context
  return (
    <div>
      Login component <mark> (useState):</mark>
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
