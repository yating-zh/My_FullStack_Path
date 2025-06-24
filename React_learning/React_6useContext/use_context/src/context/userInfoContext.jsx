import { createContext, useContext, useState } from "react";
export const userInfoContext = createContext(); //1. creating context
export default function UserInfoProvider({ children }) {
  const [username, setUsername] = useState("guest");

  return (
    <userInfoContext.Provider value={{ username, setUsername }}>
      {/* 2/ providing context */}
      {children}
    </userInfoContext.Provider>
  );
}
