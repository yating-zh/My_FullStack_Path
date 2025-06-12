const header = { color: "red", fontSize: "5rem" };
export default function InlineStyling() {
  return (
    <div>
      {/*<h1 style={{ color: "blue" }}>Inline Component</h1>*/}
      <h1 style={header}>Inline Component</h1>
    </div>
  );
}
