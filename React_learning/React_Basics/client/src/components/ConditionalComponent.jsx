import MessageOne from "./MessageOne";
import MessageTwo from "./MessageTwo";
export default function ConditionalComponent() {
  let display = true;
  return (
    <div>
      <h3>ConditionalComponent (Msg1 or Msg2)</h3>
      {display ? <MessageOne /> : <MessageTwo />}
    </div>
  );
}
