import { useState } from "react";
export default function useDisplayMessage() {
  //  const [message, setMessage] = useState("This is a message");
  const message = "This is a message";
  function displayMessage() {
    console.log("This is a log message from displayMessage()");
  }
  return [message, displayMessage];
}
