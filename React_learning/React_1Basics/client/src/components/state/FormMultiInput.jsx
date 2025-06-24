import { useState } from "react";

export default function FormMultiInput() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      <h3>Multiple Input (setValue using object for multiple input tag)</h3>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => {
          setName({ ...name, firstName: e.target.value });
        }}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => {
          setName({ ...name, lastName: e.target.value });
        }}
      />
      <p>
        {name.firstName} {name.lastName}
      </p>
      <button
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        submit
      </button>
    </div>
  );
}
