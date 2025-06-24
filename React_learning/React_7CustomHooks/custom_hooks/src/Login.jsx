import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

export default function Login() {
  const [user, setUser] = useState("");
  const [setLocalUser, userValue] = useLocalStorage();
  const [storedUser, setStoredUser] = useState(userValue);

  function handleLogin() {
    setLocalUser(user);
    setStoredUser(user);
  }
  return (
    <div>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <div>
        current user in local storage: <strong>{storedUser}</strong>
      </div>
    </div>
  );
}
