import { createContext, useContext, useReducer, useState } from "react";
export const userInfoContext_useReducer = createContext(); //1. creating context
export default function UserInfoProvider2({ children }) {
  //const [username, setUsername] = useState("guest");
  const [state, dispatch] = useReducer(infoReducer, { user: null });
  function infoReducer(state, action) {
    if (action.type === "login") {
      return { user: action.payload };
    }
    if (action.type === "logout") {
      return { user: "guest" };
    }
  }
  return (
    <userInfoContext_useReducer.Provider value={{ state, dispatch }}>
      {/* 2/ providing context */}
      {children}
    </userInfoContext_useReducer.Provider>
  );
}
