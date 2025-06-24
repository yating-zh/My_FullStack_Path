import { useState } from "react";

export default function useLocalStorage() {
  const [userValue, setUserValue] = useState(() => getLocalUser());
  function setLocalUser(value) {
    localStorage.setItem("user", value);
    //
  }
  function getLocalUser() {
    const user = localStorage.getItem("user");
    return user;
  }
  return [setLocalUser, userValue];
}
