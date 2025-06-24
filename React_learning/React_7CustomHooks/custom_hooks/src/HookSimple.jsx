import useDisplayMessage from "./hooks/useDisplayMessage";

export default function HookSimple() {
  const [message, displayMessage] = useDisplayMessage("");
  displayMessage();
  return <div>{message}</div>;
}
