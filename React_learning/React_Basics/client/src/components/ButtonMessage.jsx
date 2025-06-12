export default function ButtonMessage() {
  function clickButton() {
    console.log("button clicked");
  }

  return (
    <div>
      <h3>Event Basics - onClick</h3>
      <button onClick={clickButton}>
        Click this button to see the console log msg
      </button>
    </div>
  );
}
